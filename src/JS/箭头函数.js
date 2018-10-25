// JS
var arr = [1, 2, 3]
arr.map(function(item) {
  return item + 1
})

// ES6
const arr = [1, 2, 3]
arr.map(item => item + 1)
arr.map((item, index) => {
  console.log(index)
  return item + 1
})

// this 指向
function fn() {
  console.log('real', this) // {a: 100}
  var arr = [1, 2, 3]
  //  普通JS
  arr.map(function(item) {
    console.log('js', this) // window
    return item + 1
  })
  // 箭头函数
  arr.map(item => {
    console.log('es6', this) // {a: 100}
    return item + 1
  })
}
fn.call({ a: 100 })
