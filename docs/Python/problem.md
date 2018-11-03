# 常见问题

## 中文成 unicode 等编码解决方案

在爬虫抓取网页信息时常需要将类似"\u4eba\u751f\u82e6\u77ed\uff0cpy\u662f\u5cb8"转换为中文，实际上这是 unicode 的中文编码。可用以下方法转换：

```python
s = u'\u4eba\u751f\u82e6\u77ed\uff0cpy\u662f\u5cb8'
print s= # 人生苦短，py 是岸
```

```python
s = r'\u4eba\u751f\u82e6\u77ed\uff0cpy\u662f\u5cb8'
s = s.decode('unicode_escape')
print s # 人生苦短，py 是岸
```

另外，在 python2 的字符编码问题时常会遇到“UnicodeEncodeError: 'ascii' codec can't encode characters in position 0-5: ordinal not in range(128)”的编码错误。而用以下方法通常可以解决：

- import sys

- reload(sys)

- sys.setdefaultencoding('utf-8')

此方法是将 Python2 的默认编码 ASCII 改为 utf-8。但此方法不是一劳永逸的，可能会使一些代码的行为变得怪异。

可以参考该连接：[http://blog.ernest.me/post/python-setdefaultencoding-unicode-bytes](http://blog.ernest.me/post/python-setdefaultencoding-unicode-bytes)
