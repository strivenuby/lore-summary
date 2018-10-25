// 基础语法
function MathHandle(x, y) {
  this.x = x
  this.y = y
}
MathHandle.prototype.add = function() {
  return this.x + this.y
}
var m = new MathHandle(1, 2)
console.log(m.add()) // 3

// 继承
function Animal() {
  this.eat = function() {
    console.log('animal eat')
  }
}
function Dog() {
  this.bark = function() {
    console.log('dog bark')
  }
}
// 绑定原型，实现继承
Dog.prototype = new Animal()
var hashiqi = new Dog()
