const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1300,
    height: 850,
    minWidth: 1100,
    minHeight: 700,
    backgroundColor: '#040406',
    autoHideMenuBar: true,
    title: "AETHER — LoL Companion",
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  // Charge l'application compilée
  win.loadFile(path.join(__dirname, '../dist/index.html'));
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
