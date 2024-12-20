# FAQ

## 激活Device owner

### 帐号数量限制

> java.lang.IllegalStateException: Not allowed to set the device owner because there are already some accounts on the device

你需要删除设备上的所有帐号

### 用户数量限制

> java.lang.IllegalStateException: Not allowed to set the device owner because there are already several users on the device

你需要删除设备上所有的用户

::: info 应用双开、应用克隆、儿童空间……

这些功能实际上是多用户，你需要删除它们

::: info MIUI的应用双开
设置->应用设置->应用双开->右上角的齿轮图标->移除双开账号

:::

### MIUI限制

> java.lang.SecurityException: Neither user 2000 nor current process has android.permission.MANAGE_DEVICE_ADMINS.

你需要在开发者选项中打开`USB调试（安全设置）`

使用root权限执行激活命令可以忽略这个限制

### ColorOS限制

> java.lang.IllegalStateException: Unexpected @ProvisioningPreCondition

使用testkey版本的OwnDroid

### HookDPM

如果你有root权限，可以试着绕过这些限制。

[HookDPM](https://github.com/BinTianqi/HookDPM)是一个LSPosed模块，它修改`DevicePolicyManagerService`以绕过这些限制。

注意，这个模块可能在非原生系统上不工作，如果你遇到了这个问题，欢迎提交反馈。

## 获取支持

- [讨论区(GitHub)](https://github.com/BinTianqi/OwnDroid/discussions)
- [OwnDroid频道(Telegram)](https://t.me/owndroid_channel)
- [OwnDroid讨论群(Telegram)](https://t.me/owndroid_discussion)
- [OwnDroid CI构建(Telegram)](https://t.me/owndroid_ci)
