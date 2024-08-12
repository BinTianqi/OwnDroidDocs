# FAQ

## Activating

### Accounts restriction

> java.lang.IllegalStateException: Not allowed to set the device owner because there are already some accounts on the device

You should remove all accounts on your device

### Users restriction

> java.lang.IllegalStateException: Not allowed to set the device owner because there are already several users on the device

You should remove all users on your device

::: info Clone app, children space etc.

They are actually users, remove it

:::

### MIUI restriction

> java.lang.SecurityException: Neither user 2000 nor current process has android.permission.MANAGE_DEVICE_ADMINS.

You should open `USB debugging (Security setting)` in developer options.
Execute activating command with superuser can bypass this limitation

### HookDPM

If you have root privilege, why not bypass these restrictions?

[HookDPM](https://github.com/BinTianqi/HookDPM) is a LSPosed module that modifies `DevicePolicyManagerService` to bypass these restrictions.

Note that this module may not work on most of non-AOSP ROMs. Feedbacks are welcome if you encounter this issue.

### ColorOS restriction

> java.lang.IllegalStateException: Unexpected @ProvisioningPreCondition

Use testkey version of OwnDroid

## Get support

**Telegram:**
- Channel: [OwnDroid](https://t.me/owndroid_channel)
- Discussion group: [OwnDroid discussion](https://t.me/owndroid_discussion)
- CI Builds: [OwnDroid CI](https://t.me/owndroid_ci)
