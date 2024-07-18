# 自动化API

## 开始使用

首先，你需要在OwnDroid设置中添加自动化密钥，密钥长度不得小于6

大部分自动化app可以发送Intent，你可以使用他们自动执行任务或添加桌面快捷方式

## Intent

- Key: `key`, Value: *`自动化密钥`* (必须)
- Key: `operation`, Value: *`操作`* (必须)
- Key: `app`, Value: *`目标app包名`* (可选)
- Key: `restriction`, Value: *`用户限制`* (可选)

如果你的自动化app可以广播Intent，把Intent广播给 `com.bintianqi.owndroid/com.bintianqi.owndroid.AutomationReceiver`

如果你的自动化app只能用Intent启动Activity，用Intent启动 `com.bintianqi.owndroid/com.bintianqi.owndroid.AutomationActivity`

## 操作

OwnDroid不会捕获执行自动化任务时的错误，你应该确保你的系统支持这个操作，并且OwnDroid有足够的权限

- suspend - [挂起](ApplicationManager#挂起), 需要 `app` extra
- unsuspend - [挂起](ApplicationManager#挂起), 需要 `app` extra
- hide - [隐藏](ApplicationManager#隐藏), 需要 `app` extra
- unhide - [隐藏](ApplicationManager#隐藏), 需要 `app` extra
- reboot - [重启](SystemManager#重启)
- lock - [Lock screen now](SystemManager#立即锁屏)
- addUserRestriction - [User restriction](UserRestriction), 需要 `restriction` extra, [在这里](https://developer.android.google.cn/reference/kotlin/android/os/UserManager#constants)查看所有用户限制的列表
- clearUserRestriction - [User restriction](UserRestriction), 需要 `restriction` extra, [在这里](https://developer.android.google.cn/reference/kotlin/android/os/UserManager#constants)查看所有用户限制的列表

## 调试模式

当调试模式启用时，如果你使用Intent启动 `AutomationActivity`, OwnDroid会弹出一个对话框以显示操作结果
