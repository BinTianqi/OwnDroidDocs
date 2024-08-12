# 权限

::: info CaremeOS

过度精简的CaremeOS无法使用DevicePolicyManager，所以无法使用OwnDroid

:::

## Dhizuku API

https://github.com/iamr0s/Dhizuku

Dhizuku可以分享Device owner权限给其余应用

::: info

Dhizuku对部分API作出了限制，如果使用Dhizuku模式，OwnDroid会在使用某些功能时崩溃。如果遇到了这样的情况，请不要发送反馈，除非你确定这是由OwnDroid本身引起的。

:::

::: info 把Device owner权限转移给Dhizuku

如果OwnDroid是Device owner，你可以使用[转移所有权](#转移所有权)，把OwnDroid的Device owner权限转移给Dhizuku

- 包名： `com.rosan.dhizuku`
- 类名： `com.rosan.dhizuku.server.DhizukuDAReceiver`

:::

## Device admin

即“设备管理器”

权限最小，数量不限

### 激活

- 安卓设置中激活（你可以在此应用中跳转到安卓设置的激活界面）
- ADB命令
- Shizuku（本质上还是ADB激活）

ADB激活命令：
```shell
dpm set-active-admin com.bintianqi.owndroid/com.bintianqi.owndroid.Receiver
```

一个设备可以同时存在多个Device admin。

### 停用

- 此应用的”权限“界面中停用
- 安卓设置中停用

## Profile owner

权限中等

如无特别说明，Profile owner包括主用户、工作资料和受管理用户中的Profile owner

每个用户都可以有一个Profile owner

### 激活

- [创建工作资料](ManagedProfile#创建工作资料)，OwnDroid会成为工作资料中的Profile owner
- 成为Device owner后创建并管理用户，此应用会成为新用户的Profile owner，每个用户各有一个Profile owner

极不推荐在主用户激活Profile owner

### 停用

工作资料：删除工作资料

受管理的用户：删除用户

## Device owner

权限最高，一个设备只能有一个

### 激活

- ADB
- Shizuku
- Dhizuku

ADB激活命令：

```shell
dpm set-device-owner com.bintianqi.owndroid/com.bintianqi.owndroid.Receiver
```

激活时设备上不能有多余1个用户（user），否则会报错。你可以使用下面这条ADB命令查看已有的用户

```shell
pm list users
```

激活时设备上不能有任何账号（account），否则会报错。你可以使用下面这条ADB命令查看已有的账号

```shell
dumpsys account
```

::: info MIUI

需要在开发者选项中打开`USB调试（安全设置）`

:::

::: info ColorOS

请使用testKey的apk，否则只能使用Device admin和工作资料中的Profile owner

:::

### 停用

停用Device owner时会同时停用Device admin

如果你在使用Dhizuku模式，此操作会直接停用Dhizuku

## Shizuku

https://github.com/RikkaApps/Shizuku

功能：

- 激活[Device admin](#device-admin)
- 激活[Profile owner](#profile-owner)
- 激活[Device owner](#device-owner)
- 激活[由组织拥有的工作资料](ManagedProfile#由组织拥有的工作资料)
- 列出所有Device owner和Profile owner

## 设备信息

### 设备策略管理器角色

`API33`

DPMRH: Device policy management role holder

### 加密状态

`Device admin`

有以下5种状态：不支持、未使用、正在使用、正在使用（默认密钥）、正在使用（每个用户分别加密）

### 支持设备ID认证

`API28`

如果支持密钥证明和设备ID证明，返回true

### 支持唯一设备认证

`API30`

如果设备上的StrongBox Keymaster可以配置单独的证明证书并且可以使用该证书签署证明记录，则返回true（只有StrongBox安全级别的Keymaster才能使用单独的证明证书进行证明）

### 激活的Device admin

一个已激活的Device admin的列表

## 组织名称

`Device owner` / `Profile owner`

`API26`

设置组织名称后会在一些地方显示“此设备归xxx所有”

## 组织ID

`Device owner` / `工作资料`

`API31`

设置组织ID后才能获取设备注册专用ID

## 设备注册专用ID

`Device owner` / `工作资料`

`API31`

需要先设置[组织ID](#组织ID)，不同组织ID的设备注册专用ID不同，恢复出厂设置或删除工作资料后不变

## 禁用账号控制

`Device owner` / `Profile owner`

不能添加或移除被禁用控制的账号

## 锁屏信息

`Device owner` / `工作资料（组织）`

`API24`

在锁屏界面上显示的一段简短的消息

将会覆盖用户当前设置的锁屏信息，并且防止用户在系统设置中设置新的锁屏信息

## 提供支持的消息

`Device admin`

`API24`

### 提供支持的短消息

如果用户试图使用被禁用的功能，会显示提供支持的短消息。不能多于200字

### 提供支持的长消息

在Device admin设置中会显示长消息，不能多于20000字

## 转移所有权

`Device owner` / `Profile owner`

`API28`

转移Device owner或Profile owner权限到另外一个app

目标应用必须支持转移所有权
