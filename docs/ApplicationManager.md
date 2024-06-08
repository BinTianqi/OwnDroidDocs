# Application manager

A Profile owner of a managed profile can only manage apps in work profile

A Profile owner of a managed user can only manage apps in the managed user

All actions require a package name except install app

Get all installed packages via this command

```shell
pm list packages
```

## App detail

Jump to detail of this app

## Suspend

Require Device owner or Profile owner

Require API24 or above

Suspend an app. This app's icon will become gray, and you cannot launch it.

## Hide

Require Device owner or Profile owner

Completely hide this app. You cannot find this app in any way, `pm list packages` won't list this app as well.

## Always-on VPN

Require Device owner or Profile owner

Require API24 or above

The target app must support this feature.

## Disable uninstall

Require Device owner or Profile owner

You are not able to uninstall this app in any way.

Disable uninstall globally: [UserRestriction->Application](UserRestriction#Application)

## Disable user control

Require Device owner or Profile owner

Require API30 or above if OwnDroid is a Device owner, require API33 or above if OwnDroid is a Profile owner

You cannot clear this app's storage or force stop this app in app details.

## Permission manage

Require Device owner or Profile owner

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

Require Profile owner in work profile

Require API30 or above

Allow an app interact across profiles. The target app must support it (GBoard supports it). 

## Cross profile widget provider

Require Profile owner of work profile

Use widget that provided by work profile apps is main user

## Credential manage policy

Require Device owner

Require API34 or above

TODO

## Permitted accessibility service & IME

Require Device owner or Profile owner

Modes: 

- Allow all
- Allow only system apps
- Allow system apps and 3rd party apps in a list 

System accessibility service and IME is always permitted

## Keep uninstalled app

Require Device owner

Require API28 or above

Android system will keep APKs of apps in this list after they uninstalled 

## Clear app storage

Require Device owner or Profile owner

Require API28 or above

Clear an app's storage and cache

## Default dialer app

Require Device owner or Profile owner

Require API34 or above

Set an app as the default dialer

## Uninstall app

- Silent uninstall (Require Device owner)
- Request uninstall

## Install app

- Silent install (Require Device owner)
- Request install
