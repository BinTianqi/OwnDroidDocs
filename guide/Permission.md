## 权限

### Device admin

有时候叫“设备管理器”

权限最小，数量不限

#### 激活

- 安卓设置中激活（你可以在此应用中跳转到安卓设置的激活界面）
- ADB命令
- Shizuku（本质上还是ADB激活）

ADB激活命令：
```shell
dpm set-active-admin com.bintianqi.owndroid/com.bintianqi.owndroid.Receiver
```

一个设备可以同时存在多个Device admin。

小天才电话手表（Android 8.1）使用ADB激活Device admin会返回"Success"，但是实际上没有效果

#### 停用

- 此应用的”权限“界面中停用
- 安卓设置中停用
- ~~ADB命令停用~~（参考Device owner的ADB命令停用）

### Profile owner

权限中等

如无特别说明，Profile owner包括主用户、工作资料和受管理用户中的Profile owner

每个用户都可以有一个Profile owner

#### 激活

- 使用ADB激活（不推荐，如果能使用ADB，建议激活Device owner），只能有一个Profile owner
- Shizuku（本质上还是ADB激活）
- 创建工作资料，此应用会成为工作资料中的Profile owner，只能有一个Profile owner
- 成为Device owner后创建并管理用户，此应用会成为新用户的Profile owner，每个用户各有一个Profile owner

ADB激活命令：

```shell
dpm set-profile-owner com.bintianqi.owndroid/com.bintianqi.owndroid.Receiver
```

#### 停用

主用户：”权限“界面中停用~~或ADB停用~~

工作资料：”设备控制“界面中的”清除数据“，会删除工作资料

受管理的用户：删除用户即可

### Device owner

权限最高，一个设备只能有一个

#### 激活

- 使用ADB激活
- Shizuku（本质上还是ADB激活）
- 恢复出厂设置并开机后，使用NFC发送这个app的下载链接（没试过）
- 使用Root权限往/data/system里面放一个xml文件（可以无视当前存在的用户和账号，没试过）

ADB激活命令：

```shell
dpm set-device-owner com.bintianqi.owndroid/com.bintianqi.owndroid.Receiver
```

ADB激活有一定局限性

激活前必须删除所有用户（user），否则会报错。你可以使用下面这条ADB命令查看已有的用户

```shell
pm list users
```

激活前也要删除所有账号（account），否则会报错。你可以使用下面这条ADB命令查看已有的账号

```shell
dumpsys account
```

上面两个是安卓系统的限制，此外，还有设备生产商的限制

MIUI：需要在开发者选项中打开”USB调试（安全设置）“

ColorOS：请使用testKey的apk，否则只能使用Device admin和工作资料中的Profile owner

小天才电话手表（Android 8.1）：完全不支持Device owner

#### 停用

- 恢复出厂设置（这是官方推荐的做法）
- 在“权限”页面停用（推荐）
- ADB命令停用（麻烦）

ADB命令停用十分麻烦，你需要修改AndroidManifest.xml并自己编译项目。

你需要把AndroidManifest.xml中的`android:testOnly="false"`的值改为true

签名校验问题请自己解决

然后，使用这条ADB命令停用

```shell
dpm remove-active-admin com.bintianqi.owndroid/com.bintianqi.owndroid.Receiver
```

使用这条命令也可以停用Device admin和Profile owner

以上三种方法停用Device owner都会同时停用Device admin

### Shizuku

请自己学习如何启动[Shizuku](https://github.com/RikkaApps/Shizuku)

功能：

- 激活[Device admin](#device-admin)
- 激活[Profile owner](#profile-owner)
- 激活[Device owner](#device-owner)
- 激活[由组织拥有的工作资料](#由组织拥有的工作资料)
- 列出所有Device owner和Profile owner

### 设备唯一标识码

需API31或以上

需要先设置[组织ID](#组织ID)，同一个组织ID的设备唯一标识码相同，恢复出厂设置不变

### 组织名称

需API26或以上

需要Device owner或Profile owner

设置组织名称后会在一些地方显示此设备归xxx所有

### 不受控制的账号类型

需Device owner或Profile owner

作用未知

### 锁屏信息

需API24或以上

需要Device owner或Profile owner

在锁屏界面上显示的一段简短的消息

### 提供支持的长/短消息

需API24或以上

如果用户试图使用被挂起的应用或被禁用的功能，会显示提供支持的短消息

提供支持的长消息不知道有啥用

### 转移所有权

需要Device owner或Profile owner

需要API28或以上

转移设备所有权到另外一个Device owner或Profile owner

目标应用必须是Device admin且支持被转移所有权

