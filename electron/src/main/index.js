import { app, shell, BrowserWindow, ipcMain, Tray, screen, globalShortcut, Menu } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import { promises as fs } from 'fs'
import icon from '../../resources/icon.png?asset'

let tray
let overlayWindow
let notificationWindow

function createTray() {
  tray = new Tray(icon);

  const contextMenu = Menu.buildFromTemplate([
    { label: 'Quit', click: () => app.quit() }
  ]);

  tray.setToolTip('PD2 Grail Tracker');
  tray.setContextMenu(contextMenu);
}

function createOverlayWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  overlayWindow = new BrowserWindow({
    fullscreen: true,
    width,
    height,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    resizable: false,
    show: false,
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  });

  overlayWindow.on('blur', () => {
    overlayWindow.hide();
  });

  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    overlayWindow.loadURL(process.env['ELECTRON_RENDERER_URL']);
  } else {
    overlayWindow.loadFile(join(__dirname, '../renderer/index.html'));
  }
}

function createNotificationWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  const notificationWidth = 480;
  const notificationHeight = 80;

  notificationWindow = new BrowserWindow({
    width: notificationWidth,
    height: notificationHeight,
    x: Math.floor((width - notificationWidth) / 2),
    y: 20,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    resizable: false,
    focusable: false,
    show: false,
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  });

  const loadURL = is.dev && process.env['ELECTRON_RENDERER_URL']
    ? `${process.env['ELECTRON_RENDERER_URL']}#notification`
    : join(__dirname, '../renderer/index.html#notification');

  notificationWindow.loadURL(loadURL);
}

app.whenReady().then(() => {
  electronApp.setAppUserModelId('com.electron');

  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window);
  });

  ipcMain.on('hideOverlay', () => overlayWindow.hide());
  ipcMain.on('showNotification', (event, notificationDetails) => { showNotification(notificationDetails) });

  ipcMain.handle('readData', handleReadData);
  ipcMain.handle('writeData', handleWriteData);

  createTray();
  createOverlayWindow();
  createNotificationWindow();

  globalShortcut.register('Control+Shift+F', toggleOverlay);
  globalShortcut.register('Control+Shift+C', handleItemCopy);

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createOverlayWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('will-quit', () => {
  globalShortcut.unregisterAll();
});

/* ---------- Functions ---------- */

function toggleOverlay() {
  if (overlayWindow.isVisible()) {
    overlayWindow.hide();
  } else {
    overlayWindow.show();
  }
}

let notificationTimeout;

function showNotification(notificationDetails) {
  notificationWindow.webContents.send('handleNotification', notificationDetails);

  if (notificationWindow.isVisible()) {
    notificationWindow.hide();
  }

  clearTimeout(notificationTimeout);

  notificationWindow.show();

  notificationTimeout = setTimeout(() => {
    notificationWindow.hide();
  }, 3000);
}

function getDatabaseFilePath() {
  if (is.dev) {
    return join(__dirname, '../../resources/database.txt');
  } else {
    // In production, adjust the path accordingly
    const basePath = app.getAppPath();
    return join(basePath.replace('app.asar', 'app.asar.unpacked'), 'resources/database.txt');
  }
}

async function handleReadData() {
  try {
    const data = await fs.readFile(getDatabaseFilePath(), 'utf8');
    const database = JSON.parse(data);
    return database;
  } catch (error) {
    console.error('Error reading data:', error);
    return {};
  }
}

async function handleWriteData(event, data) {
  try {
    await fs.writeFile(getDatabaseFilePath(), JSON.stringify(data, null, 4), { encoding: 'utf8' });
    return true
  } catch (error) {
    console.error('Error writing data:', error);
    return error;
  }
}

function handleItemCopy() {
  overlayWindow.webContents.send('handleItemCopy');
}