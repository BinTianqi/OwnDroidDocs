# 系统

## 选项

### 禁用相机

`Device owner` / `Profile owner`

打开后，会为当前用户禁用所有摄像头

### 禁止截屏

`Device owner` / `Profile owner`

相当于全局的FLAG_SECURE

### 隐藏状态栏

`Device owner` / `Profile owner（附属）`

`API34`

禁用通知和快速设置

::: info

在锁定任务模式下，此功能无效

:::

### 自动设置时间

`Device owner` / `工作资料（组织）`

`API30`

::: tip

在用户限制中启用[修改日期和时间](UserRestriction#其他)以防止用户修改这个设置

:::

### 自动设置时区

`Device owner` / `工作资料（组织）`

`API30`

::: tip

在用户限制中启用[修改日期和时间](UserRestriction#其他)以防止用户修改这个设置

:::

### 要求自动时间

`Device owner` / `Profile owner`

自从API30开始弃用，在API30或以上的设备上，此功能不会显示

启用后，将会使用网络时间，并且不能修改时间

### 全局静音

`Device owner` / `Profile owner`

在工作资料中无效

### 备份服务

`Device owner` / `Profile owner`

`API26`

禁用后用户不能使用备份服务备份或恢复数据

在受管理用户中，需要Device owner和Profile owner同时打开此开关才能使用备份服务

### 禁止蓝牙分享联系人

`工作资料`

`API23`

### 通用标准模式

`Device owner`

`API30`

当设备处于通用标准模式时，某些设备功能会进行调整以满足通用标准模式所要求的安全级别。例如：

- 蓝牙长期密钥将通过AES-GCM进行完整性保护
- Wi-Fi配置存储将通过AES-GCM进行完整性保护

::: info

如果启用通用标准模式后将其关闭，所有现有 Wi-Fi 配置都将丢失

:::

### USB信号

`Device owner` / `工作资料（组织）`

`API31`

启用或禁用USB数据信号

并非所有设备都支持此功能

## 锁屏

`Device owner` / `Profile owner（附属）`

`API28`

禁用锁屏相当于把锁屏方式设置为“无”。在已设置密码或图案时使用这个功能无效。如果在锁屏禁用时设置密码或图案，锁屏将启用

## 立即锁屏

`Device admin`

此功能可确保设备安全，以应对紧急情况，例如设备丢失或被盗。调用此方法后，必须使用强身份验证（PIN、图案或密码）解锁设备。

如果没有设置锁定类型，此功能只会关闭屏幕

### [API26] 移除凭证加密密钥

从密钥环中移除用户的凭证加密密钥。用户需要再次输入凭证才能将密钥存储回密钥环中。

为了保护用户数据，用户将重新启动

## 请求错误报告

`Device owner`

`API24`

## 重启

`Device owner`

`API24`

打电话时不能使用此功能

## 修改时间

`Device owner` / `工作资料（组织）`

输入从Epoch(1970/1/1 00:00:00 UTC)到你想设置的时间(毫秒)

需要关闭[自动设置时间](#自动设置时间)

## 修改时区

`Device owner` / `Profile owner`

可以查看所有时区ID

需要关闭[自动设置时区](#自动设置时区)

## 权限策略

`Device owner` / `Profile owner`

设置应用申请运行时权限时的默认选择

- 默认（由用户决定）
- 自动允许
- 自动拒绝

## MTE策略

`Device owner`

`API34`

需要ARMv9的SoC

设置内存标记扩展(MTE)策略。MTE是一种CPU扩展，允许以较小的性能开销来防范某些类型的安全问题。

选项：

- 由用户决定
- 开启
- 关闭

修改MTE策略后需要重启才能生效

## 附近流式传输策略

`Device owner` / `Profile owner`

`API31`

选项：

- 由用户决定
- 启用
- 禁用
- 在足够安全时启用（有相同认证的受管理账号）

应用流式传输：当app在虚拟显示器上启动，传输这个app的视频流到附近的设备

通知流式传输：预安装的应用把通知数据传输到附近的设备

## 锁定任务模式

`Device owner`

`API28`

### 锁定任务功能

- 禁用全部
- 自定义
  - 允许状态栏信息
  - 允许通知
  - 允许返回主屏幕（启动器需在白名单内）
  - 允许打开后台应用概览
  - 允许全局行为（比如长按电源键的对话框）
  - 允许锁屏（如果不允许，即使有密码也不会锁屏）
  - `API30` 阻止启动未允许的应用（阻止白名单应用启动非白名单应用）

### 锁定任务应用

只有在列表中的应用才能开启锁定任务模式

### 启动锁定任务模式

输入应用包名，开启锁定任务模式

你可以指定一个Activity，或使用目标应用的默认Activity

成功启动锁定任务模式后，OwnDroid会弹出一条通知。如果你在[锁定任务功能](#锁定任务功能)中允许了通知，你可以点击那条通知以退出锁定任务模式。

## CA证书

`Device owner` / `Profile owner`

- 选择一个证书（.0文件）

  - 查看这个证书是否已安装
  - 安装这个证书
  - 卸载这个证书（如果已安装）

- 清除所有用户证书

::: info

从API24开始，用户安装的Ca证书不再默认被应用信任

:::

## 安全日志

`Device owner` / `工作资料（组织）`

`API24`

如果被Device owner使用，设备上不能有非附属用户，否则不会有输出

安全日志包含用于安全审计目的的各种信息

并非所有设备都支持重启前安全日志

::: details SecurityLogs.json

```json
[
    {
        "id": 1, // (Long) 事件id，每个事件递增。设备重启时或安全日志开启时重置
        "tag": 210002, // https://developer.android.google.cn/reference/android/app/admin/SecurityLog
        "time_nanos": 123456789, // (Long) 时间戳（纳秒）
        "log_level": 3, // https://developer.android.google.cn/reference/android/app/admin/SecurityLog
        "data": "Some data"
    }
]
```

:::

## 系统更新策略

`Device owner` / `工作资料（组织）`

查看待安装的更新是否安全补丁

系统更新策略：

- 准备好后立即更新
- 在某段时间里更新
- 延迟30天
- 默认（由用户决定）

## 安装系统更新

`Device owner` / `工作资料（组织）`

可能会出现`DeadSystemException`

能否安装成功完全取决于系统

## FRP策略

`Device owner` / `工作资料（组织）`

FRP: Factory reset protection

恢复出厂设置保护策略

需要设备支持持久数据块服务(persistent data block service)

FRP用于防止不受信任的重置。简单来说，当FRP启用时，通过Recovery或FastBoot恢复出厂设置后需要登录谷歌账号。

## 清除数据

::: danger

这是一个危险功能

:::

选项：

- 清除外部存储
- 清除受保护的数据 `Device owner`
- 清除eUICC(eSIM)
- 静默清除（不会向用户显示原因）

方法：

- WipeData `Device admin`
- `API34` WipeDevice `Device owner` / `工作资料（组织）`

`API28` 恢复出厂原因：配合WipeData使用

如果在受管理用户中使用，会清除那个用户的数据并跳转到主用户，但不会删除受管理用户

API34或以上将不能在系统用户中使用WipeData

::: info AVD

在API34的AVD中使用WipeDevice没有任何效果

:::

