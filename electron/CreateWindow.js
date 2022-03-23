const { BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 270,
    height: 280,
    show: false, // nao aparecer no meio da tela ao iniciar
    // frame: false, // aba superior (min, max, close)
    resizable: false, // - para n redefinir o tamanho da tela
    fullscreenable: false, // - para n ativar modo full screen
  });

  win.loadFile("index.html");

  //blur da janela
  /* win.on('blur', () => win.hide()) */

  return win;
};

module.exports = createWindow();
