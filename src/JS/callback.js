function loadImg(src, callback, fail) {
  var img = document.createElement('img')
  img.onload = function() {
    callback(img)
  }
  img.onerror = function() {
    fail()
  }
  img.src = src
}

var src = ''
loadImg(
  src,
  function(img) {
    console.log(img.width)
  },
  function() {
    console.log('failed')
  }
)
