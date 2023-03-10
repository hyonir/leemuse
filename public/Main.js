const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

function createWindow() {
  const win = new BrowserWindow({
    width: 500,
    height: 800,
    autoHideMenuBar: true,
  });

  const startUrl = process.env.ELECTRON_START_URL || url.format({
    pathname: path.join(__dirname, '/../build/index.html'),
    protocol: 'file:',
    slashes: true
  });
  
  // BrowserWindow에서 url 실행
  win.loadURL(startUrl);
}

app.on('ready', createWindow);