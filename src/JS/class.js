// 基本语法
class MathHandle {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  add() {
    return this.x + this.y
  }
}
const m = new MathHandle(1, 2)
console.log(m.add()) // 3

typeof MathHandle // 'function'
MathHandle.prototype.constructor === MathHandle // true
m.__proto__ === MathHandle.prototype // true

// 继承
class Animal {
  constructor(name) {
    this.name = name
  }
  eat() {
    console.log(`${this.name} eat`)
  }
}
class Dog extends Animal {
  constructor(name) {
    super(name)
    this.name = name
  }
  say() {
    console.log(`${this.name} say`)
  }
}
const dog = new Dog('哈士奇')
dog.say()
dog.eat()
