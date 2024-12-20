# 工作资料

工作资料是一种特殊的用户，使用`pm list user`命令可以看到工作资料，工作资料的默认用户名是“工作资料”或“Work Profile”

::: info

工作资料中默认打开[用户限制：安装未知来源应用](UserRestriction#应用)

:::

## 创建工作资料

设备上不能有Device owner

一个设备只能有一个工作资料

选项：

- `API22` 迁移账号
  - `API26` 保留账号在主用户中
- `API24` 跳过加密
- `API33` 离线模式

创建工作资料时安卓系统会把OwnDroid安装在工作资料中，并将其设置为Profile owner

::: info WearOS

在WearOS上可以创建工作资料，但WearOS的启动器不会显示工作资料中的应用。此外，不要尝试给工作资料重置密码，因为WearOS不能输入工作资料的密码。（测试环境：WearOS4(AVD)）

:::

## 由组织拥有的工作资料

`工作资料`

`API30`

成为由组织拥有的工作资料后可以使用更多功能

你需要在工作资料中的OwnDroid的“用户管理”页面中查看UserID（通常为10），然后执行下面这个ADB命令

```shell
#（把命令中的USER_ID替换为你的UserID）
dpm mark-profile-owner-on-organization-owned-device --user USER_ID com.bintianqi.owndroid/com.bintianqi.owndroid.Receiver
```

你也可以使用Shizuku激活由组织拥有的工作资料

## 挂起个人应用


只会挂起个人的用户应用，系统应用和OwnDroid仍然可以打开

## 资料最长关闭时间

`工作资料（组织）`

用户可以关闭工作资料，如果关闭工作资料的时间超过了在这里设置的时间，会挂起个人应用

设置的时间不能小于72小时，如果小于72小时，按72小时算

## 跨资料Intent过滤器

`工作资料`

添加跨资料Intent过滤器，使工作资料中可以发送的指定Intent到主用户，反之亦然。仅支持Activity意图。
