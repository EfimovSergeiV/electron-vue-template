import {contextBridge, ipcRenderer} from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
  sendMessage: (message: string) => ipcRenderer.send('message', message),
  runPython: () => ipcRenderer.invoke('run-python'),
  stopPython: () => ipcRenderer.invoke('stop-python'),
  onPythonOutput: (callback) =>
    ipcRenderer.on('python-stdout', (_event, data) => callback(data)),
})

