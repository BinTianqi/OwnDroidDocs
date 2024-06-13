# Application manager

A Profile owner of a work profile can only manage apps in work profile

A Profile owner of a managed user can only manage apps in the managed user

All actions except install app require a package name

You can get all installed packages via this command

```shell
pm list packages
```

## App details

Jump to details of this app

## Suspend

**[Device owner] [Profile owner]**

**[API24]**

A suspended package will not be able to start activities. Its notifications will be hidden, it will not show up in recents, will not be able to show toasts or dialogs or ring the device.

Some apps cannot be suspended, such as device admins, the active launcher and the default dialer.

## Hide

**[Device owner] [Profile owner]**

When a package is hidden it is unavailable for use, but the data and actual package file remain.

::: warning 

Please keep the hidden apps' package name in your mind! You need them to unhide the hidden apps.

::: info
You can't list hidden apps in any way! You can't even list hidden packages with `pm list packages` command
TODO: how to find hidden apps

:::

## Always-on VPN

**[Device owner] [Profile owner]**

**[API24]**

Configure an always-on VPN connection through a specific application for the current user. This connection is automatically granted and persisted after a reboot.

TODO: open another page for this feature in app

## Block uninstall

**[Device owner] [Profile owner]**

Change whether a user can uninstall a package.

::: info

You cannot uninstall a uninstall-blocked app via adb or shell command

:::

::: tip

Block uninstall globally: [UserRestriction->Application](UserRestriction#Application)

:::

## Disable user control

**[Device owner(API30)] [Profile owner(API33)]**

User will not be able to clear app data or force-stop packages.

## Permission manage

**[Device owner] [Profile owner]**

Sets the grant state of a runtime permission for a specific application. 

There are 3 statuses of a permission:

- Granted
- Denied
- Default

If the status is granted or denied, you cannot change this permission of this app in Settings.

Setting the grant state to default does not revoke the permission. It retains the previous grant, if any.

From API31，Profile owner can no longer modify sensor permissions

::: info

If the status of a permission is granted or denied, you cannot grant or revoke it via `pm grant` and `pm revoke` command

:::

::: tip

Use this shell command to list all supported permissions on your device

```shell
pm list permissions
```
TODO: list only runtime permissions
:::

## Cross profile apps

**[Work profile]**

**[API30]**

Set the set of admin-allowlisted package names that are allowed to request user consent for cross-profile communication.

::: info

After you whitelist an app here, you need to enable cross-profile communication in app details if the app doesn't ask you for this permission.

Few apps support this function. As I only know, GBoard supports this function.

:::

## Cross profile widget provider

**[Work profile]**

You can use widgets that provided by work profile apps in main user

## Credential manage policy

**[Device owner] [Work profile]**

Require API34 or above

Modes:

- Allowlist
- Allowlist and system
- Blocklist

This policy controls which apps can use [CredentialManager](https://developer.android.com/reference/kotlin/android/credentials/CredentialManager.html) class. Useless for most people

## Permitted accessibility service & IME

**[Device owner] [Profile owner]**

Modes: 

- Allow all
- Allow only system apps
- Allow system apps and some specific apps

System accessibility services and IMEs are always available to the user and this method can't disable them.

## Keep uninstalled app

**[Device owner]**

**[API28]**

Set a list of apps to keep around as APKs even if no user has currently installed it. 

## Clear app storage

**[Device owner] [Profile owner]**

**[API28]**

Clear an app's storage and cache

::: info

An application can store data outside of its application data, e.g. external storage or user dictionary. This data will not be wiped by calling this API.

:::

## Default dialer app

**[Device owner] [Work profile(Org)]**

**[API34]**

Set an app as the default dialer

## Uninstall app

- Silent uninstall **[Device owner]**
- Request uninstall

## Install app

- Silent install **[Device owner]**
- Request install
