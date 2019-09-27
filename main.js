const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow, Menu} = electron;

let mainWindow;
let addWindow;

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

    //quit app when closed
    mainWindow.on('closed', function() {
        app.quit();
    });

    //Build menu from template
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);

    //insert menu from template
    Menu.setApplicationMenu(mainMenu);
});

//handle create add window
function createAddWindow() {
    //Create add window
    addWindow = new BrowserWindow({
        width:300,
        height:200,
        title: 'Add Shopping List Item',
        //frame:false
    });
    //load html file to the add window
    addWindow.loadURL(url.format({
        pathname: path.join(__dirname,'addWindow.html'),
        protocol: 'file',
        slashes: true
    }));
    //garbage handle
    addWindow.on('close', function() {
        addWindow = null;
    })
}

//Create menu template
const mainMenuTemplate = [
    {
        label: 'File',
        submenu: [
            {
                label: 'Add item',
                click() {
                    createAddWindow();
                }
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