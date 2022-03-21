const { Tray } = require("electron");
const { resolve } = require("path");

const iconPath = resolve(__dirname, "../", "assets", "icon.png");

function createTray() {
  const tray = new Tray(iconPath);
  // Para lembrar de estudar ao passar em cima
  tray.setToolTip("Study Reminder");

  return tray;
}

module.exports = createTray();
