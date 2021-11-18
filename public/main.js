const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

// require('electron-reload')(__dirname);
// Enable live reload for Electron too
require('electron-reload')(__dirname, {
    // Note that the path to electron may vary according to the main file
    // electron: require(`${__dirname}/node_modules/electron`)
    electron: require(`${path.join(__dirname, '../node_modules/electron')}`)
});

// in the main process:
require('@electron/remote/main').initialize()

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;

function createWindow() {
    // const { screen } = require('electron');
    // const { width, height } = screen.getPrimaryDisplay().workAreaSize;

    // Create the brower window.
    win = new BrowserWindow({
        title: "My Electron App",
        // titleBarStyle: 'hidden',
        width: 1024, // Math.round(width * 0.6),
        height: 768, // Math.round(height * 0.8),
        show: false,
        icon: path.join(__dirname, "maxsop.png"),
        // minWidth: 800,
        // minHeight: 600,
        // frame: false,
        webPreferences: {
            enableRemoteModule: true,
            nodeIntegration: true,
            // devTools: false, 
            contextIsolation: true,
            preload: path.join(__dirname, "preload.js"),
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

    // create main window
    // win.loadURL('http://localhost:3000');
    win.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);

    // if main window is ready to show, 
    // then destroy the splash window and show up the main window
    win.once('ready-to-show', () => {
        // console.log(__dirname);

        setTimeout(function() { 
            splash.destroy();
            // splash.close();
            win.show();

            // show with extra features
            // win.setAutoHideMenuBar(true); // auto hide menubar
            win.maximize(); // full screen 
        }, 3000);
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

// ipc 
ipcMain.on("toMain", (event, args) => {
    
    // Send result back to renderer process
    win.webContents.send("fromMain", args);
});

// disable security warnings
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = '1';
