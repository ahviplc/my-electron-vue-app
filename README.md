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

# About me

```
https://github.com/ahviplc

https://github.com/ahviplc/my-electron-vue-app

https://github.com/ahviplc/my-electron-vue-app.git
```

> 官方版 electron demo 请去下面链接

> ahviplc/my-electron-app: my-electron-app demo by LC.
https://github.com/ahviplc/my-electron-app
