function loadImg() {
  const promise = new Promise(function(resolve, reject) {
    var img = document.createElement('img')
    img.onload = function() {
      callback(img)
    }
    img.onerror = function() {
      fail()
    }
    img.src = src
  })
  return promise
}
var src = ''
var result = loadImg(src)

result.then(
  function(img) {
    console.log(img.width)
  },
  function() {
    console.log('failed')
  }
)

result.then(function(img) {
  console.log(img.height)
})
