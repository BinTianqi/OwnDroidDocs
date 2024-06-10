# Application manager

A Profile owner of a managed profile can only manage apps in work profile

A Profile owner of a managed user can only manage apps in the managed user

All actions except install app require a package name

You can get all installed packages via this command

```shell
pm list packages
```

## App detail

Jump to detail of this app

## Suspend

**[Device owner] [Profile owner]**

**[API24]**

Suspend an app. This app's icon will become gray, and you cannot launch it.

## Hide

**[Device owner] [Profile owner]**

Completely hide this app. You cannot find this app in any way, `pm list packages` won't list this app as well.

## Always-on VPN

**[Device owner] [Profile owner]**

**[API24]**

The target app must support this feature.

TODO: open another page for this feature in app

## Disable uninstall

**[Device owner] [Profile owner]**

You are not able to uninstall this app in any way.

Disable uninstall globally: [UserRestriction->Application](UserRestriction#Application)

## Disable user control

**[Device owner(API30)] [Profile owner(API33)]**

You cannot clear this app's storage or force stop this app in app details.

## Permission manage

**[Device owner] [Profile owner]**

List all supported permissions via this command

```shell
pm list permissions
```

There are 3 statuses of a permission:

- Granted
- Denied
- Decided by user

If the status is granted or denied, you cannot change this permission of this app via `pm grant` or `pm revoke` or in Settings.

Change the status from granted or denied to decided by user, the actual permission status will not change

This can only modify runtime permissions

From API31，Profile owner can no longer modify sensor permissions

## Cross profile apps

**[Work profile]**

**[API30]**

Allow an app interact across profiles. The target app must support it (GBoard supports it). 

## Cross profile widget provider

**[Work profile]**

Use widget that provided by work profile apps is main user

## Credential manage policy

**[Device owner] [Work profile]**

Require API34 or above

Modes:

- Allowlist
- Allowlist and system
- Blocklist

This policy controls which apps can use [CredentialManager](https://developer.android.com/reference/kotlin/android/credentials/CredentialManager.html) class. Useless for most people

TODO: update strings in app

## Permitted accessibility service & IME

**[Device owner] [Profile owner]**

Modes: 

- Allow all
- Allow only system apps
- Allow system apps and 3rd party apps in a list 

System accessibility service and IME is always permitted

## Keep uninstalled app

**[Device owner]**

**[API28]**

Android system will keep APKs of apps in this list after they uninstalled 

## Clear app storage

**[Device owner] [Profile owner]**

**[API28]**

Clear an app's storage and cache

## Default dialer app

**[Device owner] [Profile owner]**

**[API34]**

Set an app as the default dialer

## Uninstall app

- Silent uninstall **[Device owner]**
- Request uninstall

## Install app

- Silent install **[Device owner]**
- Request install
