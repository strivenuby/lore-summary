// jq 1.5 之前
var ajax = $.ajax({
  url: 'data.json',
  success: function() {
    console.log('success1')
    console.log('success2')
    console.log('success3')
  },
  error: function() {
    console.log('error')
  }
})
console.log(ajax) // 返回一个 XHR 对象

// jq 1.5 之后
var ajax = $.ajax('data.json')
ajax
  .done(function() {
    console.log('success 1')
  })
  .fail(function() {
    console.log('error')
  })
  .done(function() {
    console.log('success 2')
  })
console.log(ajax) // 返回一个 deferred 对象
