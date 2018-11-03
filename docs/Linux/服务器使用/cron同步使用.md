# cron 同步使用

yum apt 安装不解释

配置文件目录 可以写在 cron.d 里面

```bash
[root@wh15366 ~]# cat /etc/crontab
SHELL=/bin/bash
PATH=/sbin:/bin:/usr/sbin:/usr/bin
MAILTO=root
```

### For details see man 4 crontabs

Example of job definition:

```
# .---------------- minute (0 - 59)
# |  .------------- hour (0 - 23)
# |  |  .---------- day of month (1 - 31)
# |  |  |  .------- month (1 - 12) OR jan,feb,mar,apr ...
# |  |  |  |  .---- day of week (0 - 6) (Sunday=0 or 7) OR sun,mon,tue,wed,thu,fri,sat
# |  |  |  |  |
# *  *  *  *  * user-name  command to be executed
```

例子 每一分钟把文件写到 home/mydatetest

```shell
* * * * * root date >> /home/mydatetest
```

log 文件

```shell
tail -f /var/log/cron
```
