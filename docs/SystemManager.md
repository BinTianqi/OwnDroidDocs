# System manager

## Options

### Disable camera

Require Device owner or Profile owner

### Disable screenshot

Require Device owner or Profile owner

This will also disable screen record

### Hide status bar

Require Device owner or Profile owner of an affiliated

Require API34 or above

All icons on the status bar will be hided, and you cannot pull down 

### Auto time

Require Device owner or Profile owner of org-owned profile

Require API30 or above

### Auto timezone

Require Device owner or Profile owner of org-owned profile

Require API30 or above

### Auto time (Deprecated)

Require Device owner or Profile owner

Deprecated from API 30

From API31, OwnDroid won't show this feature

### Master mute

Require Device owner or Profile owner

### Backup service

Require Device owner or Profile owner

Require API26 or above

### Disable bluetooth contacts sharing

Require Device owner or Profile owner

Require API23 or above

### Common criteria mode

Require Device owner

Require API30 or above

### USB signal

Require Device owner or Profile owner

Require API31 or above

Some device Don't support this feature

## Lock screen

Disable or enable lock screen

Require Device owner or Profile owner

Require API28 or above

## Lock now

Require Device admin

Option: 

- Require re-enter password (Require API26 or above)

You are always required to enter your password to unlock your device if you lock your device use this function

## Request bug report

Require API24 or above

Require Device owner

## Reboot

Require API24 or above

Require Device owner

## Edit time

Input milliseconds from Epoch(1970/1/1 00:00:00 UTC) to your target time

Require Device owner or Profile owner of org-owned profile

## Edit timezone

Require Device owner or Profile owner

You can view all available timezone ID in OwnDroid

Turn off [Auto timezone](#Auto timezone) before use this function

## Permission policy

Require Device owner or Profile owner

When an app ask for a runtime permission

- Default (Decided by user)
- Auto grant
- Auto deny

## MTE policy

[MTE](https://developer.android.com/ndk/guides/arm-mte): Memory Tagging Extension

Require API34 and a ARMv9 SoC

Require Device owner

Modes:

- Decided by user
- Enabled
- Disabled

## Nearby share policy

Require Device owner or Profile owner

Require API31 or above

Modes:

- Decided by user
- Enabled
- Disabled
- Same managed account only

TODO

## Lock task mode

Require Device owner

Require API28 or above

Modes:

- Disable all
- Custom
  - Allow status bar info
  - Allow notification
  - Allow home screen (launcher should be in whitelist)
  - Allow Overview
  - Allow global actions (for example, open power menu)
  - Allow lock screen
  - Block activity start in task (whitelisted app can't launch other apps, Require API30）

## Ca certificate

Require Device owner or Profile owner

Select a CA cert, then
  - View if the certificate is installed
  - Install this certificate
  - Uninstall this certificate

- Clear all user certificates

## Security logs

Require Device owner or Profile owner of org-owned profile

If a Device owner use this function, all users should be affiliated

Require API24 or above

TODO

## System update policy

Require Device owner

View if there is a pending system update

System update policy:

- Automatic
- Windowed
- Postpone 30 days
- Default (Decided by user)

## Install system update

Require Device owner or Profile owner of org-owned profile

A `DeadSystemException` may appear

## FRP policy

FRP: Factory reset protection

Require Device owner or Profile owner of org-owned profile

To enable this feature, the device must support persistent data block service

FRP can protect the device after untrusted factory reset (in recovery or fastboot)

## Wipe data

::: danger

Use with extreme caution

:::

Require Device admin

Options:

- Wipe external storage
- Wipe protected data (Require Device owner)
- Wipe eUICC (eSIM)
- Wipe silently

Actions:

- WipeData
- WipeDevice（Require API34 or above, require Device owner of Profile owner of org-owned profile）

Reason: Require API28 or above, should be used with WipeData

If you use this function in a managed user, all data of that user will be wiped, but that user won't be removed

If you use this function in a work profile, the work profile will be removed

From API334, you can't use WipeData in main user, please use WipeDevice instead

::: info AVD

There won't be any effect when you use WipeDevice in AVD (API34)

:::
