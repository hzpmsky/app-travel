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

#问题记录
1.子元素未加载，父元素的高度
npm i axios --save
npm install better-scroll --save

字母列表：charList.vue

div中的文本内容居中: line-height = height

:to=  "'/detail/' + item.id"
动态路由：path:'detail/:id'

img的外层div: overflow:hidden  heihgt:0
padding-bottom:

webpack.base:公共组件
overflow:inherit
钩子：activated(){
window.addEventListener('scroll',callback)
}
deactivated(){
remove  解绑
}

:style="var"
var:{opacity:0}

变量绑定 :src
一开始轮播图隐藏，后显示无法自动计算宽度


递归组件：组件内调用组件自身


keep-alive  exclude="" 取消缓存

滚动行为：多所有路由导航，页面滚动到顶部scrollBehav
<transition>
<slot></solt>
<transition>
<style>
v-enter,v-leave-to,v-enter-active,v-leave-active
</style>

引入fade页，包裹标签

现象：绑定的click方法不被触发
解决：fastClick的安装与使用
npm install fastclick--save
在main.js中：
import fastclick from 'clickfast'
FastClick.attach(document.body)
