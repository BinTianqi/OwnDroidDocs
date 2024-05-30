## 系统

### 禁用相机

需要的权限：Device owner或Profile owner

### 禁止截屏

需要的权限：Device owner或Profile owner

也会禁止AOSP自带的录屏

### 隐藏状态栏

需要的权限：Device owner或附属用户的Profile owner

需要API34或以上

状态栏仍会显示时间和系统图标，但是通知图标会隐藏，并且状态栏不能下拉

### 自动设置时间

需要的权限：Device owner或由组织拥有的工作资料的Profile owner

需要API30或以上

默认打开

### 自动设置时区

需要的权限：Device owner或由组织拥有的工作资料的Profile owner

需要API30或以上

默认打开

### 自动设置时间（弃用）

需要的权限：Device owner或Profile owner

自从API30开始弃用，在API30或以上的设备上，此功能不会显示

### 全局静音

需要的权限：Device owner或Profile owner

### 备份服务

需要的权限：Device owner或Profile owner

需要API26或以上

### 禁止蓝牙分享联系人

需要的权限：Device owner或Profile owner

需要API23或以上

### 通用标准模式

需要的权限：Device owner

需要API30或以上

### USB信号

需要的权限：Device owner或由组织拥有的工作资料的Profile owner

需要API31或以上

有的设备不支持

默认打开

### 锁屏方式

禁用和启用锁屏方式，需要无锁屏密码

需要的权限：Device owner或附属用户的Profile owner

需要API28或以上

### 立即锁屏

选项：重新输入密码（需API26或以上）

需要的权限：Device admin

无论勾不勾选这个选项，解锁时都需要重新输入密码

### 请求错误报告

需要API24或以上

需要的权限：Device owner

### 重启

需要API24或以上

需要的权限：Device owner

### 修改时间

输入从Epoch(1970/1/1 00:00:00 UTC)到你想设置的时间(毫秒)

需要的权限：Device owner或由组织拥有的工作资料的Profile owner

### 权限策略

当应用请求权限时执行的操作

- 默认（由用户决定）
- 自动允许
- 自动拒绝

需要的权限：Device owner或Profile owner

### MTE策略

MTE: Memory Tagging Extension（内存标记拓展）[安卓开发者：MTE](https://developer.android.google.cn/ndk/guides/arm-mte?hl=zh-cn)

需要安卓14和Armv9

需要的权限：Device owner

选项：

- 由用户决定
- 开启
- 关闭

### 附近App共享&附近通知共享

需要的权限：Device owner或Profile owner

需要API31或以上

选项：

- 由用户决定
- 启用
- 禁用
- 在足够安全时启用

### 锁定任务模式

需要的权限：Device owner

需要API28或以上

选项：

- 禁用全部
- 自定义
  - 允许状态栏信息
  - 允许通知
  - 允许返回主屏幕（启动器需在白名单内）
  - 允许打开后台应用概览
  - 允许全局行为（比如长按电源键的对话框）
  - 允许锁屏（如果不允许，即使有密码也不会锁屏）
  - 阻止启动未允许的应用（阻止白名单应用启动非白名单应用，需要API30）

### Ca证书

需要的权限：Device owner或Profile owner

- 选择一个证书（一般是*.0）

  - 查看这个证书是否已安装
  - 安装这个证书
  - 卸载这个证书（如果已安装）

- 清除所有用户证书

### 安全日志&&重启前安全日志

需要的权限：Device owner或由组织拥有的工作资料的Profile owner

如果被Device owner使用，设备上不能有非附属用户，否则不会有输出

需要API24或以上

这个功能正在开发中

### 系统更新策略

需要的权限：Device owner

查看待安装的更新是否安全补丁

系统更新策略：

- 准备好后立即更新
- 在某段时间里更新
- 延迟30天
- 默认（由用户决定）

### 安装系统更新

需要的权限：Device owner或由组织拥有的工作资料

可能会出现`DeadSystemException`

能否安装成功完全取决于系统

### 恢复出厂设置

**谨慎使用**

需要的权限：Device admin

选项：

- 清除外部存储
- 清除受保护的数据（仅Device owner）
- 清除eUICC
- 静默清除（不会向用户显示原因）

方法：

- WipeData
- WipeDevice（需要API34或以上，需要Device owner或由组织拥有的工作资料的Profile owner）

恢复出厂原因：需要API28或以上，只有WipeData能用

如果在受管理用户中使用，会清除那个用户的数据并跳转到主用户，但不会删除受管理用户

如果在工作资料中使用，会删除工作资料

API34或以上将不能在系统用户中使用WipeData，如果要恢复出厂设置，请使用WipeDevice

在AVD(API34)中使用WipeDevice没有任何效果

