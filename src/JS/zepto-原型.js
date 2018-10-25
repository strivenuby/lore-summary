// 空对象
var zepto = {}

// 构造函数
function Z(dom, selector) {
  var i,
    len = dom ? dom.length : 0
  for (i = 0; i < len; i++) this[i] = dom[i]
  this.length = len
  this.selector = selector || ''
}

zepto.Z = function(dom, selector) {
  return new Z(dom, selector)
}

zepto.init = function(selector) {
  var slice = Array.prototype.slice
  var dom = slice.call(document.querySelectorAll(selector))
  return zepto.Z(dom, selector)
}

// 即使用 zepto 时候的 $
var $ = function(selector) {
  return zepto.init(selector)
}

$.fn = {
  constructor: zepto.Z,
  css: function(key, value) {},
  html: function(val) {}
}

zepto.Z.prototype = Z.prototype = $.fn
