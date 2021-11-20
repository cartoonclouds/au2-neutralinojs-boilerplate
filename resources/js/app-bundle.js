define.switchToUserSpace();
define('text!app.css',function(){return "\n/* dumber-css-module: {} */\n";});
define('app.html.js',['require','exports','module','@aurelia/runtime-html','./app.css'],function (require, exports, module) {
"use strict";

exports.__esModule = true;
exports.name = exports.dependencies = exports.default = void 0;
exports.register = register;
exports.template = void 0;

var _runtimeHtml = require("@aurelia/runtime-html");

var _app = _interopRequireDefault(require("./app.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const name = "app";
exports.name = name;
const template = "<nav>\n  <a load=\"welcome-page\">Welcome</a>\n  <a load=\"about-page\">About</a>\n</nav>\n\n<h1>HEADING</h1>";
exports.template = template;
var _default = template;
exports.default = _default;
const dependencies = [(0, _runtimeHtml.cssModules)(_app.default)];
exports.dependencies = dependencies;

let _e;

function register(container) {
  if (!_e) {
    _e = _runtimeHtml.CustomElement.define({
      name,
      template,
      dependencies
    });
  }

  container.register(_e);
}
});

define('app.js',['require','exports','module','./app.html','@aurelia/runtime-html'],function (require, exports, module) {
"use strict";

exports.__esModule = true;
exports.App = void 0;

var __au2ViewDef = _interopRequireWildcard(require("./app.html"));

var _runtimeHtml = require("@aurelia/runtime-html");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let App = class App {
  close() {
    Neutralino.app.exit(() => {}, () => {});
  }

  showSettings() {
    Neutralino.settings.getSettings(data => {
      alert(JSON.stringify(data));
    }, () => {});
  }

};
exports.App = App;
exports.App = App = __decorate([(0, _runtimeHtml.customElement)(__au2ViewDef)], App);
});

define('ext:css',['dumber/lib/inject-css'],function(m){return m;});
;define.alias('ext:less','ext:css');
;define.alias('ext:scss','ext:css');
;define.alias('ext:sass','ext:css');
;define.alias('ext:styl','ext:css');
define('main.js',['require','exports','module','aurelia','./app','jquery','jquery-ui','select2','select2/dist/css/select2.min.css'],function (require, exports, module) {
"use strict";

var _aurelia = _interopRequireDefault(require("aurelia"));

var _app = require("./app");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Register plugins
require("jquery");

require("jquery-ui"); // Fix due to https://github.com/select2/select2/commit/45a877345482956021161203ac789c25f40a7d5e


require("select2");

require("select2/dist/css/select2.min.css");

const app = _aurelia.default.app(_app.App); // Initialize native API communication. This is non-blocking
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
      menuItems: [{
        id: "VERSION",
        text: "Get version"
      }, {
        id: "SEP",
        text: "-"
      }, {
        id: "QUIT",
        text: "Quit"
      }]
    };
    Neutralino.os.setTray(tray);
  }

  app.start();
}); // @ts-ignore

Neutralino.events.on("trayMenuItemClicked", event => {
  switch (event.detail.id) {
    case "VERSION":
      Neutralino.os.showMessageBox("Version information", `Neutralinojs server: v${NL_VERSION} | Neutralinojs client: v${NL_CVERSION}`);
      break;

    case "QUIT":
      Neutralino.app.exit();
      break;
  }
}); // @ts-ignore

Neutralino.events.on("windowClose", () => {
  Neutralino.app.exit();
});
});
//# sourceMappingURL=app-bundle.js.map
