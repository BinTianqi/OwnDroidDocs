# 网络

`Device owner` / `Profile owner`

## Wi-Fi Mac地址


`API24`

得到的是设备真实的Wi-Fi Mac地址，不是用于连接当前Wi-Fi的随机Mac地址

## 选项

### 优先网络服务

`Device owner(API33)` / `工作资料(API31)`

### 锁定由管理员配置的网络

`Device owner` / `工作资料（组织）`

`API30`

控制用户是否可以更改管理员配置的网络。启用此锁定后，用户仍然可以配置和连接到其他Wi-Fi，或使用其他Wi-Fi功能（如网络共享）。

## 最低Wi-Fi安全等级

`Device owner` / `工作资料（组织）`

`API33`

指定Wi-Fi网络所需的最低安全等级。
无法连接到低于最低安全等级的网络。如果当前Wi-Fi不满足要求，则会断开连接。

安全等级：

- 开放
- WEP、WPA(2)-PSK
- WPA-EAP
- WPA3-192bit

## Wi-Fi SSID策略

`Device owner` / `工作资料（组织）`

`API33`

Wi-Fi网络必须满足SSID限制才能连接

模式：

- 无
- 黑名单
- 白名单

设置用户能连接/不能连接的Wi-Fi

## 私人DNS

`Device owner`

`API29`

### 将私人DNS模式设为自动

将全局私人DNS模式设置为自动模式

在此模式下DNS子系统将在尝试以明文形式进行域名解析之前尝试与网络提供的DNS服务器进行TLS握手。

### 设置私人DNS主机名

将对DNS服务器执行连接检查，以确保其有效

如果将VPN与私人DNS结合使用，则私人DNS必须可从VPN内部和外部访问。否则，设备可能会失去解析域名的能力，因为到DNS服务器的系统流量可能不会通过VPN。

## 建议的全局代理

`Device owner`

类型：
- 无代理
- PAC代理
- 直连代理

这个代理只是一个建议，一些app有可能会忽略它。

## 网络日志记录

`Device owner` / `工作资料`

`API26`

工作资料中使用此功能只会记录工作资料的网络日志

如果被Device owner使用，设备上不能有非附属用户

网络日志包含DNS查询和connect()库调用记录

功能开发中

## Wi-Fi密钥对

`Device owner` / `Profile owner`

`API31`

可以添加Wi-Fi认证密钥对

没什么用

## APN设置

`Device owner`

`API28`

我没用过这个功能，因为我不懂APN。如果这个功能能用或者不能用，请打开一个issue

