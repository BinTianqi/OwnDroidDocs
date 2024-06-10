# System manager

## Options

### Disable camera

**[Device owner] [Profile owner]**

### Disable screenshot

**[Device owner] [Profile owner]**

This will also disable screen record

### Hide status bar

**[Device owner] [Profile owner(Affiliated)]**

**[API34]**

All icons on the status bar will be hided, and you cannot pull down the status bar

### Auto time

**[Device owner] [Work profile(Org)]**

**[API30]**

### Auto timezone

**[Device owner] [Work profile(Org)]**

**[API30]**

### Auto time (Deprecated)

**[Device owner] [Profile owner]**

Deprecated from API 30

From API31, OwnDroid won't show this feature

### Master mute

**[Device owner] [Profile owner]**

### Backup service

**[Device owner] [Profile owner]**

**[API26]**

### Disable bluetooth contacts sharing

**[Device owner] [Profile owner]**

**[API23]**

### Common criteria mode

**[Device owner] [Profile owner]**

**[API30]**

### USB signal

**[Device owner] [Profile owner]**

**[API31]**

Some device Don't support this feature

## Lock screen

**[Device owner] [Profile owner]**

**[API28]**

Disable or enable lock screen

## Lock now

**[Device admin]**

Option: 

- Require re-enter password (Require API26 or above)

You are always required to enter your password to unlock your device if you lock your device use this function

## Request bug report

**[Device owner]**

**[API24]**

## Reboot

**[Device owner]**

**[API24]**

## Edit time

**[Device owner] [Work profile(Org)]**

Input milliseconds from Epoch(1970/1/1 00:00:00 UTC) to your target time

## Edit timezone

**[Device owner] [Profile owner]**

You can view all available timezone ID in OwnDroid

Turn off [Auto timezone](#Auto timezone) before use this function

## Permission policy

**[Device owner] [Profile owner]**

When an app ask for a runtime permission

- Default (Decided by user)
- Auto grant
- Auto deny

## MTE policy

**[Device owner] [Profile owner]**

**[API34]**

Require ARMv9 SoC

[MTE](https://developer.android.com/ndk/guides/arm-mte): Memory Tagging Extension

Modes:

- Decided by user
- Enabled
- Disabled

## Nearby streaming policy

**[Device owner] [Profile owner]**

**[API31]**

Modes:

- Decided by user
- Enabled
- Disabled
- Same managed account only

App streaming is when the device starts an app on a virtual display and sends a video stream of the app to nearby devices.

Notification streaming is sending notification data from pre-installed apps to nearby devices.

TODO: update strings in app

## Lock task mode

**[Device owner]**

**[API28]**

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

**[Device owner] [Profile owner]**

Select a CA cert, then
  - View if the certificate is installed
  - Install this certificate
  - Uninstall this certificate

- Clear all user certificates

## Security logs

This function is not available now

**[Device owner] [Work profile(Org)]**

**[API24]**

If a Device owner use this function, all users should be affiliated

Security logs contain various information intended for security auditing purposes

Not all devices support pre-reboot security logs

TODO

## System update policy

**[Device owner]**

View if there is a pending system update

System update policy:

- Automatic
- Windowed
- Postpone 30 days
- Default (Decided by user)

## Install system update

**[Device owner] [Work profile(Org)]**

A `DeadSystemException` may appear

## FRP policy

FRP: Factory reset protection

**[Device owner] [Work profile(Org)]**

To enable this feature, the device must support persistent data block service

FRP can protect the device after untrusted factory reset (in recovery or fastboot)

## Wipe data

::: danger

Use with extreme caution

:::

Options:

- Wipe external storage
- Wipe protected data (Require Device owner)
- Wipe eUICC (eSIM)
- Wipe silently

Actions:

- WipeData. **[Device admin]**
- WipeDevice. **[API34]** **[Device owner] [Work profil(Org)]**

Reason: Require API28 or above, should be used with WipeData

If you use this function in a managed user, all data of that user will be wiped, but that user won't be removed

If you use this function in a work profile, the work profile will be removed

From API334, you can't use WipeData in main user, please use WipeDevice instead

::: info AVD

There won't be any effect when you use WipeDevice in AVD (API34)

:::
