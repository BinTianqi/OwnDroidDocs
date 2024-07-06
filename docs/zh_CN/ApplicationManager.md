# 应用管理

如果是工作资料，只能管理工作资料中的应用

如果是受管理的用户，只能管理受管理用户中的应用

除了安装应用，所有的操作都需要应用的包名，你可以通过ADB命令查看所有已安装应用的包名

```shell
pm list packages
```

## 应用详情

跳转到应用详情，不需要任何权限

## 挂起

**[Device owner] [Profile owner]**

**[API24]**

挂起的应用无法被打开，通知会被隐藏，不会在最近任务中显示，不能弹窗，不能发送Toast

有些应用无法被挂起，比如Device admin、启动器和默认拨号应用

## 隐藏

**[Device owner] [Profile owner]**

应用被隐藏后无法使用，但是数据会保留

::: warning

一定要记住你隐藏的应用的包名！取消隐藏的时候要用到

::: info
你无法通过任何方式找到隐藏的应用，`pm list packages`命令都无法列出隐藏的应用

:::

## VPN保持打开

**[Device owner] [Profile owner]**

**[API24]**

通过一个指定的app，为当前用户设置一个保持打开的VPN连接。自动授权连接并在重启后保留

选项：

- 启用锁定：如果VPN未连接，则禁止使用网络

## 防卸载

**[Device owner] [Profile owner]**

设置用户是否能卸载某个应用

::: info

如果你为某个应用启用了防卸载，你不能通过adb和shell命令卸载它

:::

::: tip

全局防卸载：[用户限制->应用](UserRestriction#应用)

:::

## 禁止用户控制

**[Device owner(API30)] [Profile owner(API33)]**

用户无法清除这些应用的存储空间，也无法强制停止应用

::: tip

全局禁止用户控制：[用户限制 -> 应用](UserRestriction#应用)

:::

## 权限管理

**[Device owner] [Profile owner]**

给一个应用的某个运行时权限设置授权状态

权限有三种状态：

- 允许
- 拒绝
- 默认

设为允许或拒绝后用户无法在设置中修改权限

从允许或拒绝改为由用户决定会保持当前的授权状态

在API31或以上，Profile owner不能修改传感器相关权限

::: info

如果一个权限的状态为允许或拒绝，你不能通过`pm grant`或`pm revoke`命令修改它

:::

::: tip

使用这个命令列出你的设备中系统支持的所有权限

```shell
pm list permissions
```

:::

## 跨资料应用

**[工作资料]**

**[API30]**

设置允许申请跨资料通信权限的应用

::: info

把目标应用加入此白名单后，如果应用没有主动申请权限，你需要在应用详情中手动打开跨资料通信

很少应用支持这个功能。除了GBoard，我不知道还有什么应用支持这个功能

:::

## 跨资料微件

**[工作资料]**

你可以在主用户中使用工作资料应用提供的桌面小组件

## 凭据管理策略

**[Device owner] [工作资料]**

**[API34]**

模式：

- 白名单
- 白名单和系统
- 黑名单

决定哪些应用可以使用[CredentialManager](https://developer.android.google.cn/reference/kotlin/android/credentials/CredentialManager.html)类。一般用不着

## 许可的无障碍服务&输入法

**[Device owner] [Profile owner]**

模式：

- 允许所有
- 只允许系统应用
- 允许系统和指定应用

无论如何，系统的无障碍服务和输入法都是允许的

## 卸载后保留的应用

**[Device owner]**

**[API28]**

这个列表中的应用的APK将会一直保留，即使没有任何用户安装这个应用

## 清除应用存储

**[Device owner] [Profile owner]**

**[API28]**

清除应用的存储空间

::: info 

一个应用可能会在外部存储空间中存储它的数据，这个功能不会清除这些数据

:::

## 默认拨号应用

**[Device owner] [工作资料（组织）]**

**[API34]**

把一个应用设为默认拨号应用

## 卸载应用

- 静默卸载 **[Device owner]**
- 请求卸载

## 安装应用

- 静默安装 **[Device owner]**
- 请求安装
