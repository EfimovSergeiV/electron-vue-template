import { spawn } from 'child_process';
import { app } from 'electron';
import path from 'path';

export function runPython(): Promise<string> {
  const scriptPath = app.isPackaged
    // production: testdata.py упакован в resources/python
    ? path.join(process.resourcesPath, 'python', 'testdata.py')
    // development: использовать исходник
    : path.join(process.cwd(), 'src', 'main', 'python', 'testdata.py');

  const pythonExe = app.isPackaged
    ? path.join(process.resourcesPath, 'python', process.platform === 'win32' ? 'python.exe' : 'python3')
    : 'python3';

  const py = spawn(pythonExe, [scriptPath]);

  return new Promise((resolve, reject) => {
    let output = '';

    py.stdout.on('data', data => output += data.toString());
    py.stderr.on('data', data => output += data.toString());
    py.on('error', reject);

    py.on('close', () => resolve(output.trim()));
  });
}