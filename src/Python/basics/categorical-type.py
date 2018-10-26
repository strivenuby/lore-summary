'''
 整数: 1, 10, -100
'''
print(10)

'''
  浮点数: 1.0
'''
print(1.0)

'''
  字符串
'''

# \ 转义字符
print('I\'m "Ok"!')

# \n 换行
print('\\\n\\')

# \t 制表符
print('\\\t\\')

# r'' 不转义
print(r'\\\t\\')

# '''...''' 多行内容
print('''line1
line2
line3 ''')

print(r'''hello,\n
world''')

# 布尔值 True | False
print(5 > 3)
print(5 < 3)

# and 与运算，只有所有都为True
print(5 > 3 and 5 > 4)
print(5 > 3 and 5 < 3)

# or 或运算，只要其中有一个为True
print(5 > 3 or 5 > 4)
print(5 > 3 or 5 < 3)

# not 非运算，它是一个单目运算符
print(not 1 > 2)

# / 除法运算符, 结果都为浮点数
print(10 / 3)
print(9 / 3)

# // 同为除法运算符，称为地板除，它只取整数部分
print(10 / 3)

# % 余数运算
print(10 % 3)

'''
  空值
'''

# None != 0
print(None)
