// JS
var name = 'zhangshan',
  age = 20,
  html = ''
html += '<div>'
html += ' <p>' + name + '</p>'
html += ' <p>' + age + '</p>'
html += '</div>'

// ES6
const name = 'zhangshan',
  age = 20
const html = `<div>
                <p>${name}</p>
                <p>${age}</p>
            </div>`
console.log(html)
