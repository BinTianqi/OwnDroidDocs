## 应用管理

如果是工作资料，只能管理工作资料中的应用

如果是受管理的用户，只能管理受管理用户中的应用

除了安装应用，所有的操作都需要应用的包名，你可以通过ADB命令查看所有已安装应用的包名

```shell
pm list packages
```

### 应用详情

跳转到应用详情，不需要任何权限

### 挂起

需要的权限：Device owner或Profile owner

需要API24或以上

挂起应用，应用图标变为灰色，打开时会提示被IT管理员限制

### 隐藏

需要的权限：Device owner或Profile owner

深度隐藏。`pm list packages`都看不到隐藏的应用。无法卸载隐藏的应用，因为找不到。你一定要记得隐藏的应用的包名，否则你只能去`/data/app`找被隐藏的应用

### VPN常开

需要的权限：Device owner或Profile owner

需要API24或以上

需要应用支持VPN常开

### 防卸载

需要的权限：Device owner或Profile owner

用户无法在应用详情卸载应用，也不能使用`adb uninstall`和`pm uninstall`命令卸载

参考：用户限制->应用->卸载应用

### 禁止用户控制

需要的权限： Device owner或Profile owner

如果是Device owner，需要API30或以上，如果是Profile owner，需要API33或以上
（谷歌并没有在文档中说明Profile owner调用此功能所需的API等级，但是，[MinoriceOWO](https://github.com/MinoriceOwO)发现Profile owner在API33以下调用这个功能会导致OwnDroid崩溃[(issue #12)](https://github.com/BinTianqi/OwnDroid/issues/12)。[commit d4e8473](https://github.com/BinTianqi/OwnDroid/commit/d4e8473218a6d91bf3608133061f8e636e48cdbb)中已对API33以下的Profile owner隐藏该功能入口）

用户无法清除这些应用的存储空间，也无法强制停止应用，OwnDroid中的[清除应用存储](#清除应用存储)不受影响

### 权限管理

需要的权限：Device owner或Profile owner

使用这个ADB命令查看系统支持的所有权限

```shell
pm list permissions
```

权限有三种状态：

- 允许
- 拒绝
- 由用户决定

设为允许或拒绝后用户无法在应用管理修改权限，用户也不能通过`pm grant`和`pm revoke`修改权限

从允许或拒绝改为由用户决定会保持当前的状态

只能修改运行时权限（可以通过对话框授权的权限）

在API31或以上，Profile owner不能再修改传感器相关权限，如果能修改传感器相关权限，说明这个设备是完全受管理设备（Device owner）

### 跨资料应用

需要的权限：工作资料的Profile owner

需要API30或以上

设置跨工作资料的应用，需要目标应用支持跨资料（比如GBoard）

### 跨资料微件

需要的权限：工作资料的Profile owner

设置跨工作资料的桌面小部件提供者

### 凭据管理策略

需要的权限：Device owner

需要API34或以上

作用未知

### 许可的无障碍服务&输入法

需要的权限：Device owner或Profile owner

- 允许所有
- 允许指定app

无论如何，系统的无障碍服务和输入法都是允许的

### 卸载后保留的应用

需要Device owner

需要API28或以上

这个列表中的应用的APK将会一直保留，即使没有任何用户安装这个应用

### 清除应用存储

需要的权限：Device owner或Profile owner

需要API28或以上

清除应用的存储空间

### 默认拨号应用

需要的权限：Device owner或Profile owner

需要API34或以上

没有测试过

### 卸载应用

- 静默卸载（需要Device owner，否则没反应）
- 请求卸载

### 安装应用

- 静默安装（需要Device owner，否则没反应）
- 请求安装

