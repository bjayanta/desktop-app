// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
const os = require('os');
const { contextBridge, ipcRenderer } = require("electron");

// As an example, here we use the exposeInMainWorld API to expose the browsers
// and node versions to the main window.
// They'll be accessible at "window.versions".
process.once("loaded", () => {
    contextBridge.exposeInMainWorld("cpuUsage", os);
    contextBridge.exposeInMainWorld("versions", process.versions);
    contextBridge.exposeInMainWorld(
        "api", {
            send: (channel, data) => {
                // whitelist channels
                let validChannels = ["toMain"];
                if (validChannels.includes(channel)) {
                    ipcRenderer.send(channel, data);
                }
            },
            receive: (channel, func) => {
                let validChannels = ["fromMain"];
                if (validChannels.includes(channel)) {
                    // Deliberately strip event as it includes `sender` 
                    ipcRenderer.on(channel, (event, ...args) => func(...args));
                }
            }
        }
    );
    
});