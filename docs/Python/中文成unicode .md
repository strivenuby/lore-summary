#python中文成unicode 等编码解决方案


　在爬虫抓取网页信息时常需要将类似"\u4eba\u751f\u82e6\u77ed\uff0cpy\u662f\u5cb8"转换为中文，实际上这是unicode的中文编码。可用以下方法转换：
1、
1 >>> s = u'\u4eba\u751f\u82e6\u77ed\uff0cpy\u662f\u5cb8'
2 >>> print s
3 人生苦短，py是岸
2、
1 >>> s = r'\u4eba\u751f\u82e6\u77ed\uff0cpy\u662f\u5cb8'
2 >>> s = s.decode('unicode_escape')
3 >>> print s
4 人生苦短，py是岸
 
二、
　　另外，在python2的字符编码问题时常会遇到“UnicodeEncodeError: 'ascii' codec can't encode characters in position 0-5: ordinal not in range(128)”的编码错误。
而用以下方法通常可以解决：
1 import sys
2 reload(sys)
3 sys.setdefaultencoding('utf-8')
　　此方法是将Python2的默认编码ASCII改为 utf-8。但此方法不是一劳永逸的，可能会使一些代码的行为变得怪异。
　　可以参考该连接：http://blog.ernest.me/post/python-setdefaultencoding-unicode-bytes