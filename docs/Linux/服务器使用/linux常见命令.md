# 常见命令

## 查看系统信息

df -h 查看 linux 硬盘使用情况。

![](http://ww1.sinaimg.cn/large/005SlI74gy1fmwkx3mprrj30lw03ut8p.jpg)

free -h 查看剩余的内存。

![](http://ww1.sinaimg.cn/large/005SlI74gy1fmwky4g654j30hw02ua9y.jpg)

ip a 查看当前公网 ip

![](http://ww1.sinaimg.cn/large/005SlI74gy1fmwlqsnypaj30nn06c3yr.jpg)

top 查看当前服务器的总揽

![](http://ww1.sinaimg.cn/large/005SlI74gy1fmwl1wo9oyj30jm0bcaah.jpg)

ps -ef 查看当前服务器的进程（类似 window 的任务管理器）

![](http://ww1.sinaimg.cn/large/005SlI74gy1fmwl2stlhej30oj0a2jry.jpg)

## 系统常用命令

ls 查看当前目录

![](http://ww1.sinaimg.cn/large/005SlI74gy1fmwl3jzapij30o3016743.jpg)

cd /path 跳转到某个目录下 + “tab”补齐路径

![](http://ww1.sinaimg.cn/large/005SlI74gy1fmwl52kb0rj30ns01cjr7.jpg)

## 网络连接命令

telnet ip+prot 查看对应的端口是否通畅

![](http://ww1.sinaimg.cn/large/005SlI74gy1fmwlogt5z9j30o903uweg.jpg)

ping 对指定的 ip 进行 ping 协议测试

![](http://ww1.sinaimg.cn/large/005SlI74gy1fmwlqfc8b0j30lj06074k.jpg)

netstat -ultcp 查看当前服务使用的端口

![](http://ww1.sinaimg.cn/large/005SlI74gy1fmwlt2tg67j30o404hglp.jpg)

wget +“url” 下载文件

![](http://ww1.sinaimg.cn/large/005SlI74gy1fmwm309tltj30oq05s0sv.jpg)

## 文件操作命令

tail -f 按对文件的倒数 50 行进行查看

tail -f 50 /usr/local/nginx/logs/access.log

![](http://ww1.sinaimg.cn/large/005SlI74gy1fmxhh587bgj30p9096757.jpg)

cat 查看文件所有内容

![](http://ww1.sinaimg.cn/large/005SlI74gy1fmxhjxu18uj30k70bvt8x.jpg)

grep 管道根据给定的关键字帮助找到文件

![](http://ww1.sinaimg.cn/large/005SlI74gy1fmxhl8i8xgj30cg00za9u.jpg)
