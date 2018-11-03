(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{160:function(t,s,e){"use strict";e.r(s);var n=e(0),a=Object(n.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("p",[t._v('在爬虫抓取网页信息时常需要将类似"\\u4eba\\u751f\\u82e6\\u77ed\\uff0cpy\\u662f\\u5cb8"转换为中文，实际上这是 unicode 的中文编码。可用以下方法转换：')]),t._v(" "),t._m(2),t._m(3),e("p",[t._v("另外，在 python2 的字符编码问题时常会遇到“UnicodeEncodeError: 'ascii' codec can't encode characters in position 0-5: ordinal not in range(128)”的编码错误。而用以下方法通常可以解决：")]),t._v(" "),t._m(4),t._v(" "),e("p",[t._v("此方法是将 Python2 的默认编码 ASCII 改为 utf-8。但此方法不是一劳永逸的，可能会使一些代码的行为变得怪异。")]),t._v(" "),e("p",[t._v("可以参考该连接："),e("a",{attrs:{href:"http://blog.ernest.me/post/python-setdefaultencoding-unicode-bytes",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://blog.ernest.me/post/python-setdefaultencoding-unicode-bytes"),e("OutboundLink")],1)])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"常见问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见问题","aria-hidden":"true"}},[this._v("#")]),this._v(" 常见问题")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"中文成-unicode-等编码解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#中文成-unicode-等编码解决方案","aria-hidden":"true"}},[this._v("#")]),this._v(" 中文成 unicode 等编码解决方案")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-python line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[t._v("s "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" u"),e("span",{attrs:{class:"token string"}},[t._v("'\\u4eba\\u751f\\u82e6\\u77ed\\uff0cpy\\u662f\\u5cb8'")]),t._v("\n"),e("span",{attrs:{class:"token keyword"}},[t._v("print")]),t._v(" s"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token comment"}},[t._v("# 人生苦短，py 是岸")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-python line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[t._v("s "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" r"),e("span",{attrs:{class:"token string"}},[t._v("'\\u4eba\\u751f\\u82e6\\u77ed\\uff0cpy\\u662f\\u5cb8'")]),t._v("\ns "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" s"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("decode"),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v("'unicode_escape'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{attrs:{class:"token keyword"}},[t._v("print")]),t._v(" s "),e("span",{attrs:{class:"token comment"}},[t._v("# 人生苦短，py 是岸")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("p",[this._v("import sys")])]),this._v(" "),s("li",[s("p",[this._v("reload(sys)")])]),this._v(" "),s("li",[s("p",[this._v("sys.setdefaultencoding('utf-8')")])])])}],!1,null,null,null);a.options.__file="problem.md";s.default=a.exports}}]);