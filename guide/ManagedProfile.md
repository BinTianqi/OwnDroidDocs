# 工作资料

工作资料是一种特殊的用户，使用`pm list user`命令可以看到工作资料，工作资料的默认用户名是“工作资料”或“Work Profile”

工作资料创建后默认禁用[安装未知来源应用](UserRestriction#应用)

## 创建工作资料

设备上不能有Device owner

一个设备只能有一个工作资料

选项：

- 跳过加密（需要API24或以上，没有实际作用）

创建后会跳转到工作资料中的OwnDroid，请立即按照指引激活工作资料

创建后工作资料中的OwnDroid会成为Profile owner

在WearOS上可以创建工作资料，但是会导致SystemUI停止运行一次。WearOS原生的启动器不会显示工作资料中的应用，你需要使用支持工作资料的启动器。你可以通过[ADB命令移除工作资料](#删除工作资料)。此外，不要尝试给工作资料重置密码，因为WearOS不能输入工作资料的密码。（测试环境：WearOS4(AVD)）

## 由组织拥有的工作资料

需要API30或以上

成为由组织拥有的工作资料后可以使用更多功能

前提条件：OwnDroid是工作资料中的Profile owner

首先，你需要在工作资料中的OwnDroid的“用户管理”页面中查看UserID

然后执行下面这个ADB命令

```shell
dpm mark-profile-owner-on-organization-owned-device --user USER_ID com.bintianqi.owndroid/com.bintianqi.owndroid.Receiver
```

把命令中的USER_ID替换为你的UserID

出现“Success”即为成功

## 挂起个人应用

需要的权限：由组织拥有的工作资料的Profile owner

只会挂起个人的用户应用，系统应用和OwnDroid仍然可以打开

## 资料最长关闭时间

需要的权限：工作资料的Profile owner

用户可以关闭工作资料，如果关闭工作资料的时间超过了在这里设置的时间，会挂起个人应用

设置的时间不能小于72小时，如果小于72小时，按72小时算

## 跨资料Intent过滤器

需要的权限：工作资料的Profile owner

默认情况下，工作资料中的应用不能打开个人应用，个人应用也不可以打开工作资料中的应用

添加Intent过滤器以允许这些行为

## 组织ID

需要的权限：工作资料的Profile owner

需要API31或以上

组织ID长度需在6~64个字符之间

设置组织ID后才能在“权限”页面查看[设备唯一标识码](Permission#设备唯一标识码)。不同的组织ID会有不同的设备唯一标识码

## 删除工作资料

你可以在工作资料中使用 [恢复出厂设置](SystemManager#恢复出厂设置) 来删除工作资料

如果你的工作资料不是由组织拥有的，你可以打开安卓设置->安全->更多安全设置->设备管理器->带工作资料图标的OwnDroid->移除工作资料（非原生用户自己找）

你也可以使用ADB命令移除工作资料（把USER_ID替换为工作资料的UserID）

```shell
pm remove-user USER_ID
```
