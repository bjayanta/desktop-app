const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');
const { electron } = require('process');

// in the main process:
require('@electron/remote/main').initialize()

function createWindow() {
    const { screen } = require('electron');
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;

    // Create the brower window.
    const win = new BrowserWindow({
        width: Math.round(width * 0.4),
        height: Math.round(height * 0.6),
        // minWidth: 800,
        // minHeight: 600,
        title: "My Electron App",
        // frame: false,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            // devTools: false, 
            contextIsolation: true
        }
    });

    // win.loadURL('http://localhost:3000');
    win.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
}

ipcMain.on('msg', (event, data) => {
    console.warn(data);
});

app.on('ready', createWindow);

// Quit when all window are closed.
app.on('window-all-closed', function() {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if(process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('active', function () {
    // On OS X it's common to re-create a window in the app when the dock icon is clicked and there are no other windows open.
    if(BrowserWindow.getAllWindows().length === 0) createWindow();    
});

// disable security warnings
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = '1';
