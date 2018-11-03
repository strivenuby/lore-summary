/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1e827cb4e4c36929f692faa9cfb0e72e"
  },
  {
    "url": "algorithm/二叉树.html",
    "revision": "f937d0ae17d2533deb9a94d03ab84954"
  },
  {
    "url": "assets/css/1.styles.5167b105.css",
    "revision": "df7c35ec8029dbbde0735a45f875eaf7"
  },
  {
    "url": "assets/css/2.styles.48df321d.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/styles.a906a5db.css",
    "revision": "04ccbdb09fded0c8fe8c81a58a12a5c5"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.5167b105.js",
    "revision": "2486a96c1c5e54772adee3c3d104bd71"
  },
  {
    "url": "assets/js/10.0e19e3f2.js",
    "revision": "834f2c22cf04b1f4c2f18998507fdb98"
  },
  {
    "url": "assets/js/11.c680fdac.js",
    "revision": "a185a6cc8b7b0f9983d33a4e33b60785"
  },
  {
    "url": "assets/js/12.ea1f68c2.js",
    "revision": "2f6eca0c229257a6abc78fcf2a1bcff5"
  },
  {
    "url": "assets/js/13.9a7f9430.js",
    "revision": "56125502f1d8da93cdc62639357be4f4"
  },
  {
    "url": "assets/js/14.51db9f90.js",
    "revision": "03c91daaf395f7bdf5072d118899c7d0"
  },
  {
    "url": "assets/js/15.d3c92082.js",
    "revision": "4ebe1ab8828fd712c7849109cf939ca0"
  },
  {
    "url": "assets/js/16.e7b5e082.js",
    "revision": "dcf3d8c317f8e17783f2d967fb0c59a7"
  },
  {
    "url": "assets/js/17.8e20e23c.js",
    "revision": "64850655c0d50b4a03f37119707b8552"
  },
  {
    "url": "assets/js/18.a60848e2.js",
    "revision": "0b5073b96e2b81981e6a44e9631ee1c9"
  },
  {
    "url": "assets/js/19.e7f1c5df.js",
    "revision": "82d26ac1092f875cdb46551de72241c3"
  },
  {
    "url": "assets/js/2.48df321d.js",
    "revision": "fe333b391aa7529e7228c22d5c70f516"
  },
  {
    "url": "assets/js/20.99340a2c.js",
    "revision": "a60d16daec04136422d3068255b6710f"
  },
  {
    "url": "assets/js/21.fa2dfabb.js",
    "revision": "94c4059bcdfe60dd0a6e691be980f865"
  },
  {
    "url": "assets/js/22.3daed524.js",
    "revision": "f7137ed909f299f3935f5a851da76320"
  },
  {
    "url": "assets/js/3.d2c18614.js",
    "revision": "acd270ace80b8289f3af92fa65d2975d"
  },
  {
    "url": "assets/js/4.687de110.js",
    "revision": "fbb9e0cc32b2a8bc02e44915ef7f5465"
  },
  {
    "url": "assets/js/5.6b861508.js",
    "revision": "e530bd0dac9c7fff24ecd4bcda28aa98"
  },
  {
    "url": "assets/js/6.f82bfc71.js",
    "revision": "f5a7f7c6c60619762385580c4d3fc19c"
  },
  {
    "url": "assets/js/7.d8f94215.js",
    "revision": "d9565ee4a44a3357a4f4cc6d312e0389"
  },
  {
    "url": "assets/js/8.9b3e7f11.js",
    "revision": "821583a4e752a71e8f1e52e617117886"
  },
  {
    "url": "assets/js/9.34e378b5.js",
    "revision": "b0e6db5131f5b463a9834f89c45eb072"
  },
  {
    "url": "assets/js/app.a906a5db.js",
    "revision": "91943e16f40d5e98a61985e8f77b3047"
  },
  {
    "url": "guide/index.html",
    "revision": "893edcbf28da6cc5a24d5b0685a11102"
  },
  {
    "url": "img/01.png",
    "revision": "20b13467d3ab3297e288e1726027a577"
  },
  {
    "url": "img/02.png",
    "revision": "f7950db765da7103a1c1a663c6e19d36"
  },
  {
    "url": "img/03.png",
    "revision": "392a3833e0167a2265d973da770d18dd"
  },
  {
    "url": "img/04.png",
    "revision": "2dca3e6c8516d2f08531eb87067f0e27"
  },
  {
    "url": "index.html",
    "revision": "418630ccb165b6ee8397d7d1caa7bf06"
  },
  {
    "url": "JS/ES6.html",
    "revision": "a1472715b2269946718773a6253d6f87"
  },
  {
    "url": "JS/vdom.html",
    "revision": "4d87239d6d3ef1adc90164047420d8ec"
  },
  {
    "url": "JS/原型.html",
    "revision": "f33abf39098d7eb591faa34f76178afe"
  },
  {
    "url": "JS/异步.html",
    "revision": "247be3b69cf49882cce9b97962c9d5ce"
  },
  {
    "url": "Linux/base.html",
    "revision": "d3102fea9842a3a06e87cbf05f0c9085"
  },
  {
    "url": "Linux/服务器使用/apache使用.html",
    "revision": "9d97d4895a35f18d5dcd9f02548925f7"
  },
  {
    "url": "Linux/服务器使用/cron同步使用.html",
    "revision": "5abca7837170999d7b187cfb27bbe218"
  },
  {
    "url": "Linux/服务器使用/linux常见命令.html",
    "revision": "5540ef61b3f0eebb71a27f0843977c11"
  },
  {
    "url": "Linux/服务器使用/linux进程后台运行的几种方法.html",
    "revision": "681d33c74ff59867f40dad1fe95d571d"
  },
  {
    "url": "Linux/服务器使用/mysql基础.html",
    "revision": "321b4e02c88f026a06f7e224b9cb65fb"
  },
  {
    "url": "Linux/服务器使用/ubnutu安装.html",
    "revision": "10cd97333d180297e41748962990ae67"
  },
  {
    "url": "Linux/服务器使用/网卡默认路由.html",
    "revision": "a236bbd0950a1542ee59f62195e9029a"
  },
  {
    "url": "Python/data-type/Number.html",
    "revision": "3f8f7fffa35a5e80d68402de331e5db0"
  },
  {
    "url": "Python/index.html",
    "revision": "f8872769da59c329a060a5851a9539d0"
  },
  {
    "url": "Python/problem.html",
    "revision": "6b96c25487dd4167d25793fe3fdf4d24"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
