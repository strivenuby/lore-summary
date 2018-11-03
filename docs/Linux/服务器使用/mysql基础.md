# mysql 基础语句

在 linux 中一般为 mysql 启动为 mysql -u root -p （需要输入密码）
查找所有表 show databases； 设置编码 set names utf8； 选择数据库 use database_NAME；显示所有 show tables；查询表里面的数据 SELECT \* FROM table_name;；
SELECT - 从数据库中提取数据
UPDATE - 更新数据库中的数据
DELETE - 从数据库中删除数据
INSERT INTO - 向数据库中插入新数据
CREATE DROP TABLE- 创建新数据库
ALTER DATABASE - 修改数据库
CREATE TABLE - 创建新表
ALTER TABLE - 变更（改变）数据库表
DROP TABLE - 删除表
CREATE INDEX - 创建索引（搜索键）
DROP INDEX - 删除索引
DROP DATABASE -删除数据库

#mysql 开启远程登录

mysql 为了安全性，在默认情况下用户只允许在本地登录，可是在有此情况下，还是需要使用用户进行远程连接，因此为了使其可以远程需要进行如下操作：
查看/etc/mysql/my.cnf 找到 bind-address 才发现配置的是 127.0.0.1(bind-address=127.0.0.1)，直接改为 bind-address=10.0.0.1(本机 ip)，然 后再查看 3306 端口打开了，ok，可以正常连接了

一、允许 root 用户在任何地方进行远程登录，并具有所有库任何操作权限，
具体操作如下：
在本机先使用 root 用户登录 mysql： mysql -u root -p"youpassword" 进行授权操作：
mysql>GRANT ALL PRIVILEGES ON _._ TO 'root'@'%' IDENTIFIED BY 'youpassword' WITH GRANT OPTION; //创建新用户
mysql>GRANT ALL PRIVILEGES ON _._ TO 'root'@'%' IDENTIFIED BY 'youpassword' WITH GRANT OPTION;
重载授权表：
FLUSH PRIVILEGES;
退出 mysql 数据库：
exit

二、允许 root 用户在一个特定的 IP 进行远程登录，并具有所有库任何操作权限，具体操作如下： 在本机先使用 root 用户登录 mysql： mysql -u root -p"youpassword" 进行授权操作： GRANT ALL PRIVILEGES ON _._ TO root@"172.16.16.152" IDENTIFIED BY "youpassword" WITH GRANT OPTION; 重载授权表： FLUSH PRIVILEGES; 退出 mysql 数据库： exit

三、允许 root 用户在一个特定的 IP 进行远程登录，并具有所有库特定操作权限，具体操作如下： 在本机先使用 root 用户登录 mysql： mysql -u root -p"youpassword" 进行授权操作： GRANT select，insert，update，delete ON _._ TO root@"172.16.16.152" IDENTIFIED BY "youpassword"; 重载授权表： FLUSH PRIVILEGES; 退出 mysql 数据库： exit

四、删除用户授权，需要使用 REVOKE 命令，具体命令格式为： REVOKE privileges ON 数据库[.表名] FROM user-name; 具体实例，先在本机登录 mysql: mysql -u root -p"youpassword" 进行授权操作： GRANT select，insert，update，delete ON TEST-DB TO test-user@"172.16.16.152" IDENTIFIED BY "youpassword"; 再进行删除授权操作： REVOKE all on TEST-DB from test-user; \*\*\*\*注：该操作只是清除了用户对于 TEST-DB 的相关授权权限，但是这个“test-user”这个用户还是存在。 最后从用户表内清除用户： DELETE FROM user WHERE user="test-user"; 重载授权表： FLUSH PRIVILEGES; 退出 mysql 数据库： exit

五、MYSQL 权限详细分类： 全局管理权限： FILE: 在 MySQL 服务器上读写文件。 PROCESS: 显示或杀死属于其它用户的服务线程。 RELOAD: 重载访问控制表，刷新日志等。 SHUTDOWN: 关闭 MySQL 服务。 数据库/数据表/数据列权限： ALTER: 修改已存在的数据表(例如增加/删除列)和索引。 CREATE: 建立新的数据库或数据表。 DELETE: 删除表的记录。 DROP: 删除数据表或数据库。 INDEX: 建立或删除索引。 INSERT: 增加表的记录。 SELECT: 显示/搜索表的记录。 UPDATE: 修改表中已存在的记录。 特别的权限： ALL: 允许做任何事(和 root 一样)。 USAGE: 只允许登录--其它什么也不允许做。

六。测试使用 telnet + “ip” “端口”进行测试 如该还是登录不上的话请查看 iptable 或者只 firewalld 是否开启
端口(懒人一般全关) 或者 selinux
