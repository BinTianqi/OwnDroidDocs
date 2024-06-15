# System manager

## Options

### Disable camera

**[Device owner] [Profile owner]**

After setting this, no applications running as this user will be able to access any cameras on the device.

### Disable screen capture

**[Device owner] [Profile owner]**

Disabling screen capture prevents the content from being shown on display devices that do not have a secure video output.

TODO: screenshot to screen capture in app

### Hide status bar

**[Device owner] [Profile owner(Affiliated)]**

**[API34]**

Disabling the status bar blocks notifications and quick settings.

::: info

This method has no effect for LockTask mode. 

:::

<h2 id="AutoTime">Auto time</h2>

**[Device owner] [Work profile(Org)]**

**[API30]**

::: tip

Enable [Configure date or time](UserRestriction#Other) in User restriction to prevent the user from changing this setting.

:::

<h2 id="AutoTimezone">Auto timezone</h2>

**[Device owner] [Work profile(Org)]**

**[API30]**

::: tip

Enable [Configure date or time](UserRestriction#Other) in User restriction to prevent the user from changing this setting.

:::

### Auto time (Deprecated)

**[Device owner] [Profile owner]**

Deprecated from API 30. From API31, OwnDroid won't show this feature

If auto time is required, no user will be able set the date and time and network date and time will be used.

::: info

If auto time is required the user can still manually set the time zone. Staring from Android 11, if auto time is required, the user cannot manually set the time zone.

:::

TODO: change auto time to require auto time in app

### Master volume mute

**[Device owner] [Profile owner]**

Set the global volume mute on or off. This has no effect when set on a managed profile.

TODO: update string in app

### Backup service

**[Device owner] [Profile owner]**

**[API26]**

Each user has its own backup service which manages the backup and restore mechanisms in that user. Disabling the backup service will prevent data from being backed up or restored.

For a managed user its backup functionality is only enabled if both the device owner and the profile owner have enabled the backup service.

### Disable bluetooth contacts sharing

**[Work profile]**

**[API23]**

TODO: update permission

### Common criteria mode

**[Device owner] [Profile owner]**

**[API30]**

When the device is in Common Criteria mode, certain device functionalities are tuned to meet the higher security level required by Common Criteria certification. For example:

- Bluetooth long term key material is additionally integrity-protected with AES-GCM.
- WiFi configuration store is additionally integrity-protected with AES-GCM.

::: info

If Common Critera mode is turned off after being enabled previously, all existing WiFi configurations will be lost.

:::

### USB signal

**[Device owner] [Profile owner]**

**[API31]**

Enable or disable USB data signaling for the device. When disabled, USB data connections (except from charging functions) are prohibited.

This function is not supported on all devices

## Keyguard

**[Device owner] [Profile owner(Affiliated)]**

**[API28]**

Setting the keyguard to disabled has the same effect as choosing "None" as the screen lock type. However, this call has no effect if a password, pin or pattern is currently set. If a password, pin or pattern is set after the keyguard was disabled, the keyguard stops being disabled.

TODO: update strings

## Lock now

**[Device admin]**

This method secures the device in response to an urgent situation, such as a lost or stolen device. After this method is called, the device must be unlocked using strong authentication (PIN, pattern, or password).

If there's no lock type set, this method forces the device to go to sleep but doesn't lock the device.

### [API26] Evict credential encryption key

Evict the user's credential encryption key from the keyring. The user's credential will need to be entered again in order to derive the credential encryption key that will be stored back in the keyring for future use.

In order to secure user data, the user will be stopped and restarted so apps should wait until they are next run to perform further actions.

TODO: update this option's label in app

## Request bug report

**[Device owner]**

**[API24]**

## Reboot

**[Device owner]**

**[API24]**

You can't use this function if there is an ongoing call on the device

## Edit time

**[Device owner] [Work profile(Org)]**

Input time in milliseconds since the Epoch(1970/1/1 00:00:00 UTC)

[Auto time](#AutoTime) should be disabled before use this function

## Edit timezone

**[Device owner] [Profile owner]**

You can view all available timezone ID in OwnDroid

[Auto timezone](#AutoTimezone) should be disabled before use this function

## Permission policy

**[Device owner] [Profile owner]**

Set the default response for future runtime permission requests by applications.

- Default (Decided by user)
- Auto grant
- Auto deny

## MTE policy

**[Device owner] [Profile owner]**

**[API34]**

Require ARMv9 SoC

Set the Memory Tagging Extension (MTE) policy. MTE is a CPU extension that allows to protect against certain classes of security problems at a small runtime performance cost overhead.

Modes:

- Decided by user
- Enabled
- Disabled

The device needs to be rebooted to apply changes to the MTE policy.

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
  - Block activity start in task (whitelisted app can't launch other apps, Require API30)

TODO: enter lock task mode

## Ca certificate

**[Device owner] [Profile owner]**

Select a CA cert, then
  - View if the certificate is installed
  - Install this certificate
  - Uninstall this certificate

- Clear all user certificates

::: info

Inserted user CAs aren't automatically trusted by apps in API24 and higher.

:::

## Security logs

This function is not available now

**[Device owner] [Work profile(Org)]**

**[API24]**

If a Device owner use this function, all users should be affiliated

Security logs contain various information intended for security auditing purposes

Not all devices support pre-reboot security logs

TODO

## System update policy

**[Device owner] [Work profile(Org)]**

View if there is a pending system update

System update policy:

- Automatic
- Windowed
- Postpone 30 days
- Default (Decided by user)

## Install system update

**[Device owner] [Work profile(Org)]**

A `DeadSystemException` may appear

TODO: Context.getMainExecutor()

## FRP policy

FRP: Factory reset protection

**[Device owner] [Work profile(Org)]**

To enable this feature, the device must support persistent data block service

FRP can protect the device after untrusted factory reset (in recovery or fastboot)

<h2 id="WipeData">Wipe data</h2>

::: danger

Use with extreme caution

:::

Options:

- Wipe external storage
- Wipe protected data **[Device owner]**
- Wipe eUICC (eSIM)
- Wipe silently

Actions:

- WipeData. **[Device admin]**
- **[API34]** WipeDevice. **[Device owner] [Work profil(Org)]**

**[API28]** Reason: should be only used with WipeData

If you use this function in a managed user, all data of that user will be wiped, but that user won't be removed

If you use this function in a work profile, the work profile will be removed

From API34, you can't use WipeData in main user, please use WipeDevice instead

::: info AVD

There won't be any effect when you use WipeDevice in AVD (API34)

:::
