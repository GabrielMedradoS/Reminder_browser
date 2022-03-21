const { BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 270,
    height: 310,
    //show: false,
    //frame: false,
    // resizable: false, // - para n redefinir o tamanho da tela
    // fullscreenable: false, // - para n ativar modo full screen
  });

  win.loadFile("index.html");

  return win;
};

module.exports = createWindow();
