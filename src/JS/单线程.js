// 循环运行期间，JS 执行和 DOM 渲染暂时卡顿
var i,
  sum = 0
for (i = 0; i < 10000000; i++) {
  sum += i
}
console.log(sum)

// alert 不处理，JS 执行和 DOM 渲染暂时卡顿
console.log(1)
alert('hello')
console.log(2)
