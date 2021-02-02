/**
 * This file is used specifically and only for development. It installs
 * `electron-debug` & `vue-devtools`. There shouldn't be any need to
 *  modify this file, but it can be used to extend your development
 *  environment.
 */

/* eslint-disable */

// Install `electron-debug` with `devtron`
// import {app} from 'electron'
// const app = require('electron').app
// 上面两种导入二选一

const app = require('electron').app
let author = 'LC'

// 打开调试工具
// require('electron-debug')({showDevTools: true})

// Install `vue-devtools`

// ready
app.on('ready', () => {
  console.log('index.dev.js electron ready...')

  // let installExtension = require('electron-devtools-installer')
  // installExtension.default(installExtension.VUEJS_DEVTOOLS)
  //   .then(() => {})
  //   .catch(err => {
  //     console.log('Unable to install `vue-devtools`: \n', err)
  //   })
})

// 当应用程序完成基础的启动的时候被触发
// 在 Windows 和 Linux 中, will-finish-launching 事件与 ready 事件是相同的;
// 在 macOS 中，这个事件相当于 NSApplication 中的 applicationWillFinishLaunching 提示。
// 通常会在这里为 open-file 和 open-url 设置监听器，并启动崩溃报告和自动更新
app.on('will-finish-launching', () => {
  console.log('index.dev.js app.on will-finish-launching')
})

// 当全部窗口关闭时退出
app.on('window-all-closed', () => {
  console.log('index.dev.js app.on window-all-closed')
  // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
  // 否则绝大部分应用及其菜单栏会保持激活。
  if (process.platform !== 'darwin') {
    console.log('index.dev.js bye 非mac用户 ' + author)
    app.quit()
  } else {
    // 可以走到这里就是mac用户
    console.log('index.dev.js bye mac用户 ' + author)
  }
})

// 在程序关闭窗口前发信号
// 在应用程序开始关闭窗口之前触发
app.on('before-quit', () => {
  console.log('index.dev.js app.on before-quit')
})

// 在所有窗口都已关闭并且应用程序将退出时发出
app.on('will-quit', () => {
  console.log('index.dev.js app.on will-quit')
})

// 在应用程序退出时发出
app.on('quit', () => {
  console.log('index.dev.js app.on quit')
})

app.on('activate', () => {
  // 在macOS上，当单击dock图标并且没有其他窗口打开时，
  // 通常在应用程序中重新创建一个窗口。
  if (BrowserWindow.getAllWindows().length === 0) {
    console.log('index.dev.js app.on activate')
    createWindow()
  }
})

// 还有其他事件 可在【https://www.electronjs.org/docs/all】搜索【事件】查看学习。

// 在这个文件中，你可以续写应用剩下主进程代码。
// 也可以拆分成几个文件，然后用 require 导入。

// Require `main` process to boot app
require('./index')
