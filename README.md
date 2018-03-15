# car-brand

> A Vue.js project

## 项目创建

```
# 使用 mpvue 小程序框架

# 全局安装 vue-cli
$ npm install --global vue-cli

# 创建一个基于 mpvue-quickstart 模板的新项目
$ vue init mpvue/mpvue-quickstart car-brand

# 安装依赖
$ cd my-project
$ npm install
# 启动构建
$ npm run dev

# 压缩
npm run build

```

如果在 `npm run dev`的时候报错，使用 `sudo npm run dev`

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


使用 `scss` 需要安装

```
npm install node-sass
npm install sass-loader
```

并且需要在 `build/util.js` 文件中引入 `sass-loader` 

```angular2html

const sassLoader = {
	loader: 'sass-loader',
	options: {
		sourceMap: true
	}
}
```

