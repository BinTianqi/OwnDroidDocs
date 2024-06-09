# 系统

## 选项

### 禁用相机

**[Device owner] [Profile owner]**

### 禁止截屏

**[Device owner] [Profile owner]**

也会禁止AOSP自带的录屏

### 隐藏状态栏

**[Device owner] [Profile owner(附属)]**

**[API34]**

状态栏仍会显示时间和系统图标，但是通知图标会隐藏，并且状态栏不能下拉

### 自动设置时间

**[Device owner] [工作资料（组织）]**

**[API30]**

默认打开

### 自动设置时区

**[Device owner] [工作资料（组织）]**

**[API30]**

默认打开

### 自动设置时间（弃用）

**[Device owner] [Profile owner]**

自从API30开始弃用，在API30或以上的设备上，此功能不会显示

### 全局静音

**[Device owner] [Profile owner]**

### 备份服务

**[Device owner] [Profile owner]**

**[API26]**

### 禁止蓝牙分享联系人

**[Device owner] [Profile owner]**

**[API23]**

### 通用标准模式

**[Device owner]**

**[API30]**

### USB信号

**[Device owner] [工作资料（组织）]**

**[API31]**

有的设备不支持

默认打开

## 锁屏方式

**[Device owner] [Profile owner（附属）]**

**[API28]**

禁用和启用锁屏方式，需要无锁屏密码

## 立即锁屏

**[Device admin]**

选项：重新输入密码 **[API26]**

无论勾不勾选这个选项，解锁时都需要重新输入密码

## 请求错误报告

**[Device owner]**

**[API24]**

## 重启

**[Device owner]**

**[API24]**

## 修改时间

**[Device owner] [工作资料（组织）]**

输入从Epoch(1970/1/1 00:00:00 UTC)到你想设置的时间(毫秒)

## 修改时区

**[Device owner] [Profile owner]**

可以查看所有时区ID

需要关闭自动时区。你可以在系统设置中或[这里](#自动设置时区)关闭

## 权限策略

**[Device owner] [Profile owner]**

当应用请求权限时执行的操作

- 默认（由用户决定）
- 自动允许
- 自动拒绝

## MTE策略

**[Device owner]**

**[API34]**

MTE: Memory Tagging Extension（内存标记拓展）[安卓开发者：MTE](https://developer.android.google.cn/ndk/guides/arm-mte?hl=zh-cn)

需要ARMv9的SoC

选项：

- 由用户决定
- 开启
- 关闭

## 附近App共享&附近通知共享

**[Device owner] [Profile owner]**

**[API31]**

选项：

- 由用户决定
- 启用
- 禁用
- 在足够安全时启用

## 锁定任务模式

**[Device owner]**

**[API28]**

选项：

- 禁用全部
- 自定义
  - 允许状态栏信息
  - 允许通知
  - 允许返回主屏幕（启动器需在白名单内）
  - 允许打开后台应用概览
  - 允许全局行为（比如长按电源键的对话框）
  - 允许锁屏（如果不允许，即使有密码也不会锁屏）
  - **[API30]** 阻止启动未允许的应用（阻止白名单应用启动非白名单应用）

## Ca证书

**[Device owner] [Profile owner]**

- 选择一个证书（.0文件）

  - 查看这个证书是否已安装
  - 安装这个证书
  - 卸载这个证书（如果已安装）

- 清除所有用户证书

## 安全日志&&重启前安全日志

**[Device owner] [工作资料（组织）]**

**[API24]**

如果被Device owner使用，设备上不能有非附属用户，否则不会有输出

这个功能正在开发中

## 系统更新策略

**[Device owner]**

查看待安装的更新是否安全补丁

系统更新策略：

- 准备好后立即更新
- 在某段时间里更新
- 延迟30天
- 默认（由用户决定）

## 安装系统更新

**[Device owner] [工作资料（组织）]**

可能会出现`DeadSystemException`

能否安装成功完全取决于系统

## FRP策略

**[Device owner] [工作资料（组织）]**

FRP: Factory reset protection

恢复出厂设置保护策略

需要设备支持持久数据块服务(persistent data block service)

FRP用于防止不受信任的重置。简单来说，当FRP启用时，通过Recovery或FastBoot恢复出厂设置后需要登录谷歌账号。

更多FRP相关知识请自行搜索

## 清除数据

::: danger

危险功能，谨慎使用

:::

选项：

- 清除外部存储
- 清除受保护的数据 **[Device owner]**
- 清除eUICC
- 静默清除（不会向用户显示原因）

方法：

- WipeData **[Device admin]**
- **[API34]** WipeDevice **[Device owner] [工作资料（组织）]**

恢复出厂原因：需要API28或以上，只有WipeData能用

如果在受管理用户中使用，会清除那个用户的数据并跳转到主用户，但不会删除受管理用户

如果在工作资料中使用，会删除工作资料

API34或以上将不能在系统用户中使用WipeData，如果要恢复出厂设置，请使用WipeDevice

在AVD(API34)中使用WipeDevice没有任何效果

