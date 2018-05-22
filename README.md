# travel

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
#git
1.要把两个不同的项目合并,git pull --allow-unrelated-histories

…or create a new repository on the command line
 echo "# react-" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/hzpmsky/react-.git
git push -u origin master
…or push an existing repository from the command line
 git remote add origin https://github.com/hzpmsky/react-.git
git push -u origin master

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


cnpm i sass-loader node-sass --save-dev
#less的安装与配置
npm install less less-loader--save
在build文件夹中的webpackage.base.conf.js中配置：

{
  test:/\.less$/,
  loader:'less-loader'
}


抖动：图片未加载时，高度为0；加载后高度撑开；

#创建分支
1. git checkout -b name
2./home icons.vue
