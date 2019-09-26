const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow, Menu} = electron;

let mainWindow;

//LIsten for the app to be ready
app.on('ready', function() {
    //Create main window
    mainWindow = new BrowserWindow({});
    //load html file to the main window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname,'mainWindow.html'),
        protocol: 'file',
        slashes: true
    }));

    //Build menu from template
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);

    //insert menu from template
    Menu.setApplicationMenu(mainMenu);
});

//Create menu template
const mainMenuTemplate = [
    {
        label: 'File',
        submenu: [
            {
                label: 'Add item',
            },
            {
                label: 'Clear items',
            },
            {type: 'separator'},
            {
                label: 'Quit',
                //add hotkey to quit
                accelerator: process.platform == 'darwin'? 'Command+Q' : 'Control+Q',
                click() {
                    app.quit();
                }
            }
        ]
    }
];