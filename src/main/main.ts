import {app, BrowserWindow, ipcMain, session} from 'electron';
import {join} from 'path';
import { runPython } from './runPython';

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
    }
  });

  if (process.env.NODE_ENV === 'development') {
    const rendererPort = process.argv[2];
    mainWindow.loadURL(`http://localhost:${rendererPort}`);
  }
  else {
    mainWindow.loadFile(join(app.getAppPath(), 'renderer', 'index.html'));
  }
}

app.whenReady().then(() => {
  createWindow();

  session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
    callback({
      responseHeaders: {
        ...details.responseHeaders,
        'Content-Security-Policy': ['script-src \'self\'']
      }
    })
  })

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
});

ipcMain.on('message', (event, message) => {
  console.log(message);
})

// IPC обработчик
// ipcMain.handle('run-python', async () => {
//   return await runPython();
// });


import { spawn, ChildProcessWithoutNullStreams } from 'child_process';
import path from 'path';

let currentPyProcess: ChildProcessWithoutNullStreams | null = null;

ipcMain.handle('run-python', (event) => {
  const scriptPath = app.isPackaged
    ? path.join(process.resourcesPath, 'python', 'testdata.py')
    : path.join(process.cwd(), 'src', 'main', 'python', 'testdata.py');

  const pythonExe = process.platform === 'win32' ? 'python' : 'python3';

  const py = spawn(pythonExe, [scriptPath]);
  currentPyProcess = py; // сохранить процесс

  py.stdout.on('data', (data) => {
    event.sender.send('python-stdout', data.toString());
  });

  py.stderr.on('data', (data) => {
    event.sender.send('python-stdout', data.toString());
  });

  return new Promise((resolve) => {
    py.on('close', () => {
      currentPyProcess = null;
      resolve('Python finished');
    });
  });
});

// КНОПКА "СТОП"
ipcMain.handle('stop-python', () => {
  if (currentPyProcess) {
    currentPyProcess.kill();   // завершает выполнение
    currentPyProcess = null;
    return 'killed';
  }
  return 'no-process';
});