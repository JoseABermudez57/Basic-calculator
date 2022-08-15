const {app, BrowserWindow} = require('electron');

app.on('ready', ()=>{
    let win = new BrowserWindow({width:350, height:500});
    win.loadFile('./Resources/HTML/Principal.html');
    win.on('closed', ()=>{
        win = null;
        app.quit()
    });
});