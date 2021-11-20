<div align="center">
  <img src="https://cdn.rawgit.com/neutralinojs/neutralinojs.github.io/b667f2c2/docs/nllogo.png" width="160"/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
  <img src="https://aurelia.io/styles/images/aurelia-icon.svg" width="150"/>
</div>

# au2-neutralinojs-template

Template for getting started with the **[Neutralino.js](https://neutralino.js.org/)** and **[Aurelia2](https://aurelia.io)** framework to create portable desktop applications, packaged with **[dumberjs](https://dumber.js.org/)**

 >**NOTE:**
 >This is using **Aurelia v2** , which is still in alpha stage!
 >
 > You can find documentation for this version [here](https://docs.aurelia.io/)
 > 
 > Note that compatibility may be an issue if you intend on supporting older versions of Windows. There was discussion regarding the use of the IE engine (MSHTML) versus Edge/Chromium (WebView2) versus Microsoft Edge (EdgeHTML) to render the application. Quoting one of the developers
 > For Win32 [Windows] it's either MSHTML (aka IE), or EdgeHTML (since Windows 10), or Edge/Chromium .... I suggest to drop the support of MSHTML, since .... it does not match the expectations of a modern web developer.
> 
> .... For Windows that would mean using Edge/Chromium (if available), or falling back to EdgeHTML on Windows 10. On Windows 7 an error message should be displayed.
> 
> .... If at some point Edge/Chromium becomes the default in Windows 10 - we will drop the support of EdgeHTML.
> [zserge](https://github.com/zserge) 2020, https://github.com/webview/webview/issues/305
>
> Using EDGE makes part of the [2021 roadmap](https://factsoverflow.com/neutralinojs-2021-roadmap/)
This repo is base off of [pmanu93/au-neutralino](https://github.com/pmanu93/au-neutralino). Thanks pmanu93!

 
## Setup
Install [neu-cli](https://neutralino.js.org/docs/#/tools/cli):
```sh
npm i -g @neutralinojs/neu
```

Install dependencies:
```sh
npm i
```

## Development
To run the application you must build it first:

```sh
npm run build
```
(Running `neu build` will **not** successfully build the application! You must use the command above to correctly build and package the assets using [gulp.js](https://gulpjs.com/)/[dumberjs](https://dumber.js.org/) as well as move all the distribution files into their correct locations.)

then
```sh
neu run
```

### Configuration
Neutralino configuration is done in the `neutralino.config.json` file.

The following settings must be left as-is in order for Neutralino, gulp.js and dumber.js to work correctly together. **Do not change** unless you know what you're doing! This includes their locations as well as the location of the Neutralinojs JavaScript library (file `neutralino.js`)

`neutralino.config.json`
* `url`
* `cli.resourcesPath`
* `cli.clientLibrary`

`gulpfile.js`
* `baseUrl`
* `entryBundle`

`_index.html`
* `src` of `neutralino.js`
* `src` of `entry.bundle.js`

### Debugging
You can enable the inspector by changing the value of `enableinspector` in `neutralino.config.json`.

For more information checkout Neutralino [documentation](http://neutralino.js.org/docs/)

## Release
To create an executable for your application, you run:

```sh
neu update
```
This will create a `bin` folder and download the binaries to build the executables. This step may not be necessary however you may receive an error when trying to build - which still may build successfully.

```sh
neu build
```
This will create/update the `dist` folder with the executables for Linux, Windows and MacOS platforms with all application resources bundled into the `res.neu` file.

FOr more information about distribution checkout the Neutralino documenation [Distribution](https://neutralino.js.org/docs/distribution/overview/)
