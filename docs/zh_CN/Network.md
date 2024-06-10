# 网络

**[Device owner] [Profile owner]**

**[API24]**

## Wi-Fi Mac地址

**[Device owner] [工作资料（组织）]**

**[API24]**

得到的是设备真实的Wi-Fi Mac地址，不是用于连接当前Wi-Fi的随机Mac地址

## 优先网络服务

**[Device owner(API33)] [工作资料(API31)]**

功能开发中

## Wi-Fi锁定

**[Device owner] [工作资料（组织）]**

**[API30]**

## 要求最小Wi-Fi安全等级

**[Device owner] [工作资料（组织）]**

**[API33]**

选项：

- 开放
- WEP、WPA(2)-PSK
- WPA-EAP
- WPA3-192bit

用户不能连接低于要求的安全等级的Wi-Fi，如果已经连接了这样的Wi-Fi，会立即断开

## Wi-Fi SSID策略

**[Device owner] [工作资料（组织）]**

**[API33]**

模式：

- 无
- 黑名单
- 白名单

设置用户能连接/不能连接的Wi-Fi

## 私人DNS

**[Device owner]**

**[API29]**

可以将私人DNS模式设为自动

也可以设置私人DNS主机名

## 网络日志记录

**[Device owner] [工作资料]**

**[API26]**

工作资料中使用此功能只会记录工作资料的网络日志

如果被Device owner使用，设备上不能有非附属用户

网络日志包含DNS查询和connect()库调用记录

功能开发中

## Wi-Fi密钥对

**[Device owner] [Profile owner]**

**[API31]**

可以添加Wi-Fi认证密钥对

没什么用

## APN设置

**[Device owner]**

**[API28]**

我没用过这个功能，因为我不懂APN。如果这个功能能用或者不能用，请打开一个issue

