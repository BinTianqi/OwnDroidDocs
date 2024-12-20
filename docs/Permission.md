# Permission

## Dhizuku API

https://github.com/iamr0s/Dhizuku

Dhizuku is a tool that can share Device owner permissions to other application.

::: info

Dhizuku restricts some DevicePolicyManager APIs, if you're using Dhizuku mode, OwnDroid may crash when you try to use certain functions. Please don't send feedback when you encounter this issue, unless you are sure it's caused by OwnDroid itself.

:::

::: info Transfer ownership to Dhizuku

If OwnDroid is Device owner, you can [transfer the ownership](#Transfer-Ownership) to Dhizuku

- Package name: `com.rosan.dhizuku`
- Class name: `com.rosan.dhizuku.server.DhizukuDAReceiver`

:::

## Device admin

You can activate Device admin easily, but Device admin can do almost nothing

### Activate

- Android Settings
- Command
- Shizuku

ADB command:
```shell
dpm set-active-admin com.bintianqi.owndroid/com.bintianqi.owndroid.Receiver
```

### Deactivate

- In OwnDroid
- Android Settings -> Security -> More -> Device admin apps

## Profile owner

A profile owner is a special device admin that has additional privileges within the profile.

Profile owner can exist in main user, work profile and managed user

### Activate

- [Create work profile](ManagedProfile#Create-Work-Profile)
- [Create managed user](UserManager#Create-User)

Activate a Profile owner in main user is not recommended.

### Deactivate

Main user: Deactivate in OwnDroid

Work profile: [Remove work profile](ManagedProfile#Remove-Work-Profile)

Managed user: Remove that user

## Device owner

A device owner app is a special device admin that cannot be deactivated in Settings. It also cannot be uninstalled.

### Activate

- Command
- Shizuku
- Dhizuku

Command:

```shell
dpm set-device-owner com.bintianqi.owndroid/com.bintianqi.owndroid.Receiver
```

Activation will fail if there are more than 1 user on your device.

This command will list all users on your device

```shell
pm list users
```

Activation will fail if there are any accounts on your device.

This command will list all accounts on your device

```shell
dumpsys account
```

::: info MIUI

Enable `USB debugging (security setting)` in developer options

:::

::: info ColorOS

Please use OwnDroid APK signed with testkey

:::

### Deactivate

Device admin permission of OwnDroid will be also removed when you deactivate Device owner

If you are using Dhizuku mode, this operation will deactivate both Dhizuku and OwnDroid

## Shizuku

https://github.com/RikkaApps/Shizuku

Functions:

- Activate [Device admin](#device-admin)
- Activate [Profile owner](#profile-owner)
- Activate [Device owner](#device-owner)
- Activate [Organization owned profile](ManagedProfile#Organization-Owned-Profile)
- List Device owner and Profile owner

TODO: list users, list accounts

## Device info

### DPMRH

`API33`

Device policy management role holder

### Encryption status

`Device admin`

There are 5 encryption statuses. Unsupported, inactive, active, active(default key), active(per user) 

### Support device ID attestation

`API28`

true if the device supports attestation of device identifiers in addition to key attestation.

### Support unique device attestation

`API30`

true if the StrongBox Keymaster implementation on the device was provisioned with an individual attestation certificate and can sign attestation records using it (only Keymaster with StrongBox security level can use an individual attestation certificate).

### Active admins list

A list of active Device admin

## Organization name

`Device owner` / `Profile owner`

`API26`

Set the name of your company

## Organization ID

`Device owner` / `Work profile`

`API31`

Sets the Enterprise ID. This is a requirement for generating an enrollment-specific ID for the device.

This ID can be only set once

## Enrollment specific ID

`Device owner` / `Work profile`

`API31`

The identifier would be consistent even if the work profile is removed and create again (to the same Organization ID), or the device is factory reset and re-enrolled.

## Organization name

`Device owner` / `Profile owner`

`API26`

Set the name of your company

## Disable account management

`Device owner` / `Profile owner`

When account management is disabled for an account type, adding or removing an account of that type will not be possible.

## Lock screen info

`Device owner`

`API24`

Show a brief message on your lock screen

Overrides any owner information manually set by the user and prevents the user from further changing it.

## Supported message

`Device admin`

`API24`

### Short support message

This will be displayed to the user in settings screens where functionality has been disabled by the admin.
If the message is longer than 200 characters it may be truncated

### Long support message

This will be displayed to the user in the device administrators settings screen.
If the message is longer than 20000 characters it may be truncated.

## Transfer Ownership

`Device owner` / `Profile owner`

`API28`

Changes the current administrator to another one. All policies from the current administrator are migrated to the new administrator.

The target app must support this feature
