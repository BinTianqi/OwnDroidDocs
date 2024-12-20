# Work profile

Work profile equals to Managed profile

Work profile is a kind of user, you will see your work profile when you `pm list users`

::: info

[User restriction: Install from unknown source](UserRestriction#Application) is enabled by default

:::

## Create work profile

Require no Device owner or Profile owner is set

There can be up to 1 work profile in your device

Options:

- `API22` Migrate account
  - `API26` Keep account in main user
- `API24` Skip encryption
- `API33` Offline provisioning

When creating work profile, Android system will clone OwnDroid into the work profile and set it as Profile owner

::: info Work profile in WearOS

You can create a work profile on WearOS. But you need a 3rd party launcher to launch work profile apps.

:::

## Organization-owned profile

`Work profile`

`API30`

Use all work profile features with org-owned profile permission

It is recommended to activate org-owned profile with [Shizuku](Permission#Shizuku)

First, get the UserID of your work profile in [UserManager -> User info](UserManager#User-Info)

Then execute this command

```shell
#Replace the USER_ID with your actual UserID
dpm mark-profile-owner-on-organization-owned-device --user USER_ID com.bintianqi.owndroid/com.bintianqi.owndroid.Receiver
```

## Suspend personal apps

`Work profile(org)`

All personal apps except system apps and OwnDroid will be suspended

When personal apps are suspended the device can only be used for calls.

## Profile maximum time off

`Work profile(org)`

Set maximum time the profile is allowed to be turned off. If the profile is turned off for longer, personal apps are suspended on the device.

The minimum non-zero value corresponds to 72 hours. If an admin sets a smaller non-zero vaulue, 72 hours will be set instead.

## Cross profile intent filter

`Work profile`

Add cross profile intent filters so that some intents sent in the managed profile can also be resolved in the parent, or vice versa. Only activity intents are supported.

## Remove work profile

Go to [SystemManager -> Wipe Data](SystemManager#Wipe-Data) in OwnDroid in work profile

If org-owned profile is not activated, you can remove work profile in Android Settings -> Security -> More -> Device admin apps

