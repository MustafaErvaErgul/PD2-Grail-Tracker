import { contextBridge, ipcRenderer, clipboard } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
const api = {
  hideOverlay: () => ipcRenderer.send("hideOverlay"),
  showNotification: (notificationDetails) => ipcRenderer.send('showNotification', notificationDetails),
  handleNotification: (notificationHandler) => ipcRenderer.on('handleNotification', notificationHandler),
  readData: () => ipcRenderer.invoke('readData'),
  writeData: (data) => ipcRenderer.invoke('writeData', data),
  handleItemCopy: (itemCopyHandler) => ipcRenderer.on("handleItemCopy", itemCopyHandler),
  clipboard: clipboard
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  window.electron = electronAPI
  window.api = api
}
