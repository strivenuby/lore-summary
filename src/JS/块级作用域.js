// JS
var obj = { a: 100, b: 200 }
for (var item in obj) {
  console.log(item)
}
console.log(item) // 'b'

// ES6
const obj = { a: 100, b: 200 }
for (let item in obj) {
  console.log(item)
}
console.log(item) // 'undefined'
