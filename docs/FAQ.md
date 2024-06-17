# FAQ

## Activating

### Accounts limit

> java.lang.IllegalStateException: Not allowed to set the device owner because there are already some accounts on the device

You should remove all accounts on your device

### Users limit

> java.lang.IllegalStateException: Not allowed to set the device owner because there are already several users on the device

You should remove all users on your device

::: info Clone app, children space etc.

They are actually users, remove it

:::

### MIUI limit

> java.lang.SecurityException: Neither user 2000 nor current process has android.permission.MANAGE_DEVICE_ADMINS.

You should open `USB debugging (Security setting)` in developer options.
Execute activating command with superuser can bypass this limitation
