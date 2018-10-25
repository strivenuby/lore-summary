var jQuery = function(selector) {
  return new jQuery.fn.init(selector)
}

// 定义构造函数
var init = (jQuery.fn.init = function(selector) {
  var slice = Array.prototype.slice
  var dom = slice.call(document.queryselectorAll(selector))

  var i,
    len = dom ? dom.length : 0
  for (i = 0; i < len; i++) this[i] = dom[i]
  this.length = len
  this.selector = selector || ''
})

// 初始化 jQuery, fn
jQuery.fn = jQuery.prototype = {
  constructor: jQuery,
  css: function(key, value) {},
  html: function(val) {}
}

// 定义原型
init.prototype = jQuery.fn
