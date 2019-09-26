const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow} = electron;

let mainWindow;

//LIsten for the app to be ready
app.on('ready', function() {
    //Create main window
    mainWindow = new BrowserWindow({});
    //load html file to the main window
    mainWindow.loadURL(url.format({
        pathname:path.join(__dirname,'mainWindow.html'),
        protocol: 'file',
        slashes: true
    }));
});