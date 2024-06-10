# Permission

## Device admin

You can set unlimited Device admins. But device admin can do almost nothing

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

Has a medium-level permission

Profile owner can exist in main user, work profile and managed user

### Activate

- [Create work profile](ManagedProfile#Create work profile)
- [Create managed user](UserManager#Create user)

Activate a Profile owner in main user is not recommended.

### Deactivate

Main user: Deactivate in OwnDroid

Work profile: [Remove work profile](ManagedProfile#Remove work profile)

Managed user: Remove that user

## Device owner

Has the highest permission

### Activate

- Command
- Shizuku

Command:

```shell
dpm set-device-owner com.bintianqi.owndroid/com.bintianqi.owndroid.Receiver
```

You should remove all other users on your device before activate Device owner

This command will list all users on your device

```shell
pm list users
```

You should remove all accounts on your device before activate Device owner

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

- Factory reset
- Deactivate in OwnDroid

```shell
dpm remove-active-admin com.bintianqi.owndroid/com.bintianqi.owndroid.Receiver
```

Device admin permission of OwnDroid will be also removed when you deactivate Device owner

## Shizuku

[Rikka/Shizuku](https://github.com/RikkaApps/Shizuku)

Functions:

- Activate [Device admin](#device-admin)
- Activate [Profile owner](#profile-owner)
- Activate [Device owner](#device-owner)
- Activate [Organization owned profile](ManagedProfile#Organization owned profile)
- List Device owner and Profile owner

## Device info

### DPMRH

Device policy manager role holder

### Encryption status

There are 5 encryption statuses. Unsupported, inactive, active, active(default key), active(per user) 

### Support device ID attestation

true if the device supports attestation of device identifiers in addition to key attestation.

### Support unique device attestation

true if the StrongBox Keymaster implementation on the device was provisioned with an individual attestation certificate and can sign attestation records using it (only Keymaster with StrongBox security level can use an individual attestation certificate).

### Activated Device admin list

A list of activated Device admin

## Device specific ID

**[API31]**

[Organization ID](ManagedProfile#Organization ID) must be set in order to get device specific ID. Different organization ID has different device specific ID. Device specific ID won't reset when factory reset.

## Organization name

**[Device owner] [Profile owner]**

**[API26]**

Set the name of your company

## Disable account management

**[Device owner] [Profile owner]**

When account management is disabled for an account type, adding or removing an account of that type will not be possible.

TODO: update strings in app (this dosen't mean uncontrolled account types)

## Lock screen info

**[Device owner] [Profile owner]**

**[API24]**

Show a brief message on your lock screen

## Supported message

**[Device admin]**

**[API24]**

### Short support message

This will be displayed to the user in settings screens where functionality has been disabled by the admin.
If the message is longer than 200 characters it may be truncated

### Long support message

This will be displayed to the user in the device administrators settings screen.
If the message is longer than 20000 characters it may be truncated.

## Transform Ownership

**[Device owner] [Profile owner]**

**[API28]**

Transform Device owner or Profile owner privilege to another app

The target app must be Device admin and support transform ownership
