import { spawn } from 'child_process';
import { app } from 'electron';
import path from 'path';

export function runPython(): Promise<string> {
  // Путь к Python-скрипту
  const scriptPath = app.isPackaged
    ? path.join(process.resourcesPath, 'python', 'testdata.py') // production
    : path.join(process.cwd(), 'src', 'main', 'python', 'testdata.py'); // dev

  // Используем системный Python
  const pythonExe = process.platform === 'win32' ? 'python' : 'python3';

  const py = spawn(pythonExe, [scriptPath]);

  return new Promise((resolve, reject) => {
    let output = '';

    py.stdout.on('data', (data) => (output += data.toString()));
    py.stderr.on('data', (data) => (output += data.toString()));

    py.on('error', (err) => reject(err));
    py.on('close', () => resolve(output.trim()));
  });
}