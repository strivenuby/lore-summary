# 如何在一台主机建立多个虚拟主机（二级域名）

一台服务器安装了 Apache,如何绑定多个域名或网站呢？
最简单高效的方法如下

1. 先打开 Apache 的配置文件 httpd.conf，（debian 为 /etc/apache2/sote-av\*\*\*\*/）在这个文件，找到这句：`#Include etc/extra/httpd-vhosts.conf`（根据安装路径不同，上面的路径会略有不同）把前面的#去掉，即开启了使用虚拟主机的功能

2. 在 httpd-vhosts.conf 中进行虚拟主机的配置操作；也可以在 httpd.conf 直接写入配置，但是不建议这么做

3. 打开 httpd-vhosts.conf 文件，找到 NameVirutalHost \*:80，这句话的含义是制定这个主机的 IP 地址和端口号

4. 关键的 virtualhost 配置，在 NameVirutalHost \*:80 的下面；
   注意事项：Apache 在接受请求时，首先会默认第一个 VirtualHost，然后再匹配其他虚拟主
   机，如果没有匹配的，就是第一个 VirtualHost 起作用。故，在 httpd.conf 中，将
   <Dicrectory />（这个是所有目录的默认配置)和<Direcotry/opt/lampp/htdocs>的权限，
   都默认设置为 deny from all。

5. virtualhost 配置实例：

```xml
<VirtualHost*:80>
    ServerName *
    DocumentRoot
    </opt/lampp/htdocs/guest>
    <Directory /opt/lampp/htdocs/guest>
        Order deny,allow
        Allow from all
    </Direcotry>
<VirtualHost/>
```

后面的，依次添加就可以

```xml
<VirtualHost \*:80>
    ServerName www.myweb1.com
    DocumentRoot
    </opt/lampp/htdocs/myweb1>
    <Directory /opt/lampp/htdocs/myweb1>
        Order deny,allow
        Allow from all
    </Direcotry>
<VirtualHost/>
```
