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

挂起应用，应用图标变为灰色，打开时会提示被IT管理员限制

## 隐藏

**[Device owner] [Profile owner]**

深度隐藏。`pm list packages`都看不到隐藏的应用。无法卸载隐藏的应用，因为找不到。

## VPN保持打开

**[Device owner] [Profile owner]**

**[API24]**

需要应用支持VPN保持打开

## 防卸载

**[Device owner] [Profile owner]**

用户无法在应用详情卸载应用，也不能使用`adb uninstall`和`pm uninstall`命令卸载

全局防卸载：[用户限制->应用](UserRestriction#应用)

## 禁止用户控制

**[Device owner(API30)] [Profile owner(API33)]**

用户无法清除这些应用的存储空间，也无法强制停止应用，OwnDroid中的[清除应用存储](#清除应用存储)不受影响

## 权限管理

**[Device owner] [Profile owner]**

使用这个ADB命令查看系统支持的所有权限

```shell
pm list permissions
```

权限有三种状态：

- 允许
- 拒绝
- 由用户决定

设为允许或拒绝后用户无法在系统设置中修改权限，用户也不能通过`pm grant`和`pm revoke`修改权限

从允许或拒绝改为由用户决定会保持当前的状态

只能修改运行时权限（可以通过对话框授权的权限）

在API31或以上，Profile owner不能修改传感器相关权限

## 跨资料应用

**[工作资料]**

**[API30]**

设置跨工作资料的应用，需要目标应用支持跨资料（比如GBoard）

## 跨资料微件

**[工作资料]**

设置跨工作资料的桌面小部件提供者

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

## 默认拨号应用

**[Device owner] [Profile owner]**

**[API34]**

没有测试过

## 卸载应用

- 静默卸载 **[Device owner]**
- 请求卸载

## 安装应用

- 静默安装 **[Device owner]**
- 请求安装
