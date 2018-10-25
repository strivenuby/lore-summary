# ES6

## 模块化的使用和编译环境

`export` `import` `babel` `webpack` `rollup`

- 语法：import export（注意有无 default）
- 环境：babel 编译 ES6 语法，模块化可用 webpack 和 rollup

## Class 和 JS 构造函数的区别

Class 在语法上更加贴合面向对象的写法

Class 实现继承更加易读、易理解

更易于写 java 等后端语言的使用

本质还是语法糖，使用 prototype

### Js 构造函数

<<< @/src/JS/构造函数.js

### Class

<<< @/src/JS/class.js

## Promise

new Promise 实例，而且要 return

new Promise 时要传入函数，函数有 resolve reject 两个参数

成功时执行 resolve() 失败时执行 reject()

then 监听结果

### Callback(Promise 未出现之前)

<<< @/src/JS/callback.js

### Promise 基本语法

<<< @/src/JS/Promise-基本语法.js

## let/const

<<< @/src/JS/let-const.js

## 多行字符串/模板变量

<<< @/src/JS/多行字符串-模板变量.js

## 解构赋值

<<< @/src/JS/解构赋值.js

## 块级作用域

<<< @/src/JS/块级作用域.js

## 函数默认参数

<<< @/src/JS/函数默认参数.js

## 箭头函数

<<< @/src/JS/箭头函数.js
