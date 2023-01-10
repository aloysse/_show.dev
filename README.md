# _show.dev


Hi!我是旼修，這是我的個人網站，記錄自己在前端開發、學習的內容。

> 網站是利用 [Docusaurus 2](https://docusaurus.io/) 搭建
> This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.


### CSS Framework

本站引入 TailwindCSS，並使用 **[postcss-nest](https://www.npmjs.com/package/postcss-nested)** 將，需使用 tailwind 樣式的區塊限制於帶 `className='tailwind'` 的容器之中，避免於 Docusaurus 原有的樣式衝突。

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
