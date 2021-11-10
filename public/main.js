const { app, BrowserWindow } = require('electron');
require('electron-reload')(__dirname);
const path = require('path');
const isDev = require('electron-is-dev');

// in the main process:
require('@electron/remote/main').initialize()

function createWindow() {
    const { screen } = require('electron');
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;

    // Create the brower window.
    const win = new BrowserWindow({
        title: "My Electron App",
        // titleBarStyle: 'hidden',
        width: Math.round(width * 0.9),
        height: Math.round(height * 0.9),
        show: false,
        // minWidth: 800,
        // minHeight: 600,
        // frame: false,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            // devTools: false, 
            contextIsolation: true
        }
    });

    // create a new `splash`-Window 
    const splash = new BrowserWindow({
        width: 400, 
        height: 500, 
        transparent: true, 
        frame: false, 
        resizable: false,
        // alwaysOnTop: true
    });

    // load splash screen 
    splash.loadURL(isDev ? `file://${path.join(__dirname, './splash.html')}` : `file://${path.join(__dirname, '../build/splash.html')}`);

    // main window
    // win.loadURL('http://localhost:3000');
    win.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);

    // if main window is ready to show, 
    // then destroy the splash window and show up the main window
    win.once('ready-to-show', () => {
        setTimeout(function() { 
            splash.destroy();
            // splash.close();
            win.show();
        }, 5000);
    });
}

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
