import Aurelia from "aurelia";
import { App } from "./app";

// Register plugins
require("jquery");
require("jquery-ui");
require("select2");
require("select2/dist/css/select2.min.css");



const app = Aurelia.app(App);

// Initialize native API communication. This is non-blocking
// use 'ready' event to run code on app load.
// Avoid calling API functions before init or after init.
Neutralino.init();

Neutralino.events.on("ready", () => {
  if (NL_OS != "Darwin") {
    // TODO: Fix https://github.com/neutralinojs/neutralinojs/issues/615
    // Set tray handling
    // @ts-ignore
    if (NL_MODE != "window") {
      console.log("INFO: Tray menu is only available in the window mode.");
      return;
    }
    let tray = {
      icon: "/resources/icons/trayIcon.png",
      menuItems: [
        { id: "VERSION", text: "Get version" },
        { id: "SEP", text: "-" },
        { id: "QUIT", text: "Quit" },
      ],
    };
    Neutralino.os.setTray(tray);
  }

  app.start();
});

// @ts-ignore
Neutralino.events.on("trayMenuItemClicked", (event) => {
  switch (event.detail.id) {
    case "VERSION":
      Neutralino.os.showMessageBox(
        "Version information",
        `Neutralinojs server: v${NL_VERSION} | Neutralinojs client: v${NL_CVERSION}`
      );
      break;
    case "QUIT":
      Neutralino.app.exit();
      break;
  }
});

// @ts-ignore
Neutralino.events.on("windowClose", () => {
  Neutralino.app.exit();
});
