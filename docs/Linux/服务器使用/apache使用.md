#如何在一台主机建立多个虚拟主机（二级域名）

一台服务器安装了Apache,如何绑定多个域名或网站呢？
最简单高效的方法如下
1.  先打开Apache的配置文件httpd.conf，（debian  为 /etc/apache2/sote-av****/）在这个文件，
    找到这句：“#Include etc/extra/httpd-vhosts.conf”
k
    （根据安装路径不同，上面的路径会略有不同）
    把前面的#曲调，即开启了使用虚拟主机的功能；
2.  在httpd-vhosts.conf中进行虚拟主机的配置操作；也可以在httpd.conf直接写入配置，但是
    不建议这么做；
3.  打开httpd-vhosts.conf文件，找到NameVirutalHost *:80，这句话的含义是制定这个主机的
    IP地址和端口号；
4.  关键的virtualhost配置，在NameVirutalHost *:80的下面；
    注意事项：Apache在接受请求时，首先会默认第一个VirtualHost，然后再匹配其他虚拟主
    机，如果没有匹配的，就是第一个VirtualHost起作用。故，在httpd.conf中，将
    <Dicrectory />（这个是所有目录的默认配置)和<Direcotry/opt/lampp/htdocs>的权限，
    都默认设置为deny from all。
5.  virtualhost配置实例：
    <VirtualHost*:80>
     ServerName *
     DocumentRoot </opt/lampp/htdocs/guest>
    <Directory /opt/lampp/htdocs/guest>
    Order deny,allow
    Allow from all
   </Direcotry>
   <VirtualHost/>
    后面的，依次添加就可以
   <VirtualHost *:80>
    ServerName www.myweb1.com
    DocumentRoot </opt/lampp/htdocs/myweb1>
    <Directory /opt/lampp/htdocs/myweb1>
    Order deny,allow
    Allow from all
    </Direcotry>
  <VirtualHost/>
