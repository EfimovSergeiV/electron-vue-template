import {contextBridge, ipcRenderer} from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
  sendMessage: (message: string) => ipcRenderer.send('message', message),
  // runPython: () => ipcRenderer.invoke('run-python')
  runPython: () => ipcRenderer.invoke('run-python'),
  onPythonOutput: (callback: (data: string) => void) => 
    ipcRenderer.on('python-stdout', (e, data) => callback(data))
})

