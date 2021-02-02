# my-electron-vue-app

> a demo of the electron-vue by LC.

> https://www.electronjs.org

> https://www.electronjs.org/docs

> https://www.electronjs.org/docs/tutorial/quick-start

> https://github.com/electron/electron

> https://github.com/electron/electron/tree/v11.1.1/docs/fiddles/quick-start

> 中文版 · 官方文档 · 简介 · electron-vue
  https://simulatedgreg.gitbooks.io/electron-vue/content/cn/

> https://github.com/SimulatedGREG/electron-vue

# run it.

#### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9080
npm run dev

# build electron application for production
npm run build

# run unit & end-to-end tests
npm test


# lint all JS/Vue component files in `src/`
npm run lint

```

---

This project was generated with [electron-vue](https://github.com/SimulatedGREG/electron-vue)@[45a3e22](https://github.com/SimulatedGREG/electron-vue/tree/45a3e224e7bb8fc71909021ccfdcfec0f461f634) using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about the original structure can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).

---

# 其他

```markdown
中文版 · 官方文档 · 简介 · electron-vue
https://simulatedgreg.gitbooks.io/electron-vue/content/cn/

英文版 · 官方文档 · Introduction · electron-vue
https://simulatedgreg.gitbooks.io/electron-vue/content/en/

GitHub - SimulatedGREG/electron-vue: An Electron & Vue.js quick start boilerplate with vue-cli scaffolding, common Vue plugins, electron-packager/electron-builder, unit/e2e testing, vue-devtools, and webpack.
https://github.com/SimulatedGREG/electron-vue

ERROR in Template execution failed: ReferenceError: process is not defined(使用electron-vue出现的错误)_sinat_19594515的博客-CSDN博客
https://blog.csdn.net/sinat_19594515/article/details/103694805

Webpack ReferenceError: process is not defined · Issue #871 · SimulatedGREG/electron-vue · GitHub
https://github.com/SimulatedGREG/electron-vue/issues/871
```

# 问题点
> 1.vue搭建脚手架 出现问题Command vue init requires a global addon to be installed
```markdown
# Install vue-cli and scaffold boilerplate
解决方法：npm install -g @vue/cli-init
命令执行完,安装成全局即可.
然后再执行下面命令
vue init simulatedgreg/electron-vue my-electron-vue-app

# Install dependencies and run your app
cd my-electron-vue-app
yarn # or npm install
yarn run dev # or npm run dev
即可安装依赖和执行.
```

> 2.ERROR in Template execution failed: ReferenceError: process is not defined
```markdown
Solved by removing:

<% if (!process.browser) { %>
  <script>
    if (process.env.NODE_ENV !== 'development') window.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
  </script>
<% } %>

from src/index.ejs:16
```

> 3.Failed to fetch extension, trying 4 more times
```markdown
解决办法是将index.dev.js中注释这几行就行

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
```

> 4.配置proxy 解决跨域问题 跨源资源共享 (CORS)
```javascript
// 在.electron-vue\dev-runner.js中
// 配置proxy 解决跨域问题 跨源资源共享 (CORS)
        proxy: {
          '/one.json': {
            // 请求的目标服务器地址
            target: 'https://v2.jinrishici.com',
            // 设置允许跨域
            changeOrigin: true,
            // 重写路径
            pathRewrite: {
              '^/one.json': '/one.json'
            },
            headers: {
              referer: ''
            }
          },
          '/getAPoem': {
            // 请求的目标服务器地址
            target: 'https://v2.jinrishici.com',
            // 设置允许跨域
            changeOrigin: true,
            // 重写路径
            pathRewrite: {
              '^/getAPoem': '/one.json'
            },
            headers: {
              referer: ''
            }
          }
        }
```

# 打包
```markdown
1. 可使用electron-builder或者electron-packager进行打包

> npm install -g electron-builder

electron-userland/electron-builder: A complete solution to package and build a ready for distribution Electron app with “auto update” support out of the box
https://github.com/electron-userland/electron-builder

electron-userland/electron-builder-binaries
https://github.com/electron-userland/electron-builder-binaries

> npm install -g electron-package

electron/electron-packager: Customize and package your Electron app with OS-specific bundles (.app, .exe, etc.) via JS or CLI
https://github.com/electron/electron-packager

2. 这里是使用electron-builder进行打包,下面列举可能打包过程中,有些压缩包或者资源无法正常网速下载的解决办法.
首先执行命令
> npm install -g electron-builder

其electron的不同平台的具体路径-win已确认,其他待确认:
macOS: ~/Library/Caches/electron
Linux: ~/.cache/electron
windows: %LOCALAPPDATA%\electron\cache

其electron-builder的不同平台的具体路径:
macOS: ~/Library/Caches/electron-builder
Linux: ~/.cache/electron-builder
windows: %LOCALAPPDATA%\electron-builder\cache

3. 下载electron
> Releases · electron/electron | 可在此下载
> https://github.com/electron/electron/releases

> electron Mirror | electron 淘宝镜像 速度快
> https://npm.taobao.org/mirrors/electron/

在win10下(其他平台对应上面不同路径放入即可) 贴出路径 下载的压缩包 不用解压 放到此文件夹下即可
> C:\Users\Administrator\AppData\Local\electron\Cache
> C:\Users\Administrator\AppData\Local\electron\Cache\electron-v2.0.18-win32-x64.zip

4. 下载其他关键压缩包
> electron-userland/electron-builder-binaries | 可在此下载
> https://github.com/electron-userland/electron-builder-binaries

下载 winCodeSign-2.4.0 | nsis-3.0.3.2 | nsis-resources-3.3.0

此要把压缩包解压,解压之后,具体放入路径 拿win10举例(其他平台对应上面不同路径放入即可)
> C:\Users\Administrator\AppData\Local\electron-builder\Cache\winCodeSign\winCodeSign-2.4.0
> C:\Users\Administrator\AppData\Local\electron-builder\Cache\nsis\nsis-3.0.3.2
> C:\Users\Administrator\AppData\Local\electron-builder\Cache\nsis\nsis-resources-3.3.0

5. 到这里打包环境都好了
执行命令即可打包
npm run build

6.具体打包详解可借鉴下面网址
> Electron-builder打包详解_weixin_34162695的博客-CSDN博客_electron-builder 打包
> https://blog.csdn.net/weixin_34162695/article/details/91461372
```

# About me

```
https://github.com/ahviplc

https://github.com/ahviplc/my-electron-vue-app

https://github.com/ahviplc/my-electron-vue-app.git
```

> 官方版 electron demo 请去下面链接

> ahviplc/my-electron-app: my-electron-app demo by LC.
https://github.com/ahviplc/my-electron-app
