# 网络

这个页面需要API24或以上的Device owner或Profile owner才能进入

## 查看Wi-Fi Mac地址

需要的权限：Device owner或由组织拥有的工作资料的Profile owner

需要API24或以上

得到的是设备真实的Wi-Fi Mac地址，不是连接Wi-Fi时随机生成的Mac地址

## 优先网络服务

需要的权限：Device owner

需要API33或以上

功能开发中

## Wi-Fi锁定

需要的权限：Device owner或由组织拥有的工作资料的Profile owner

需要API30或以上

作用未知

## 要求最小Wi-Fi安全等级

需要的权限：Device owner或由组织拥有的工作资料的Profile owner

需要API33或以上

选项：

- 开放
- WEP、WPA(2)-PSK
- WPA-EAP
- WPA3-192bit

用户不能连接低于要求的安全等级的Wi-Fi，如果已经连接了这样的Wi-Fi，会立即断开

## Wi-Fi SSID策略

需要的权限：Device owner或由组织拥有的工作资料的Profile owner

需要API33或以上

模式：

- 无
- 黑名单
- 白名单

设置用户能连接/不能连接的Wi-Fi

## 私人DNS

需要的权限：Device owner

需要API29或以上

可以将私人DNS模式设为自动

也可以设置私人DNS主机名

## 网络日志记录

需要的权限：Device owner或工作资料的Profile owner

工作资料中使用此功能只会记录工作资料的网络日志

如果被Device owner使用，设备上不能有非附属用户

需要API26或以上

功能开发中，所以现在使用收集不到任何内容

## Wi-Fi密钥对

需要的权限：Device owner或Profile owner

需要API31或以上

可以添加或移除Wi-Fi密钥对

作用未知

## APN设置

需要的权限：Device owner

需要API28或以上

我没用过这个功能，因为我不懂APN。如果这个功能存在问题，请打开一个issue

