# Work profile

Work profile equals to Managed profile

Work profile is a kind of user, you will see your work profile when you `pm list users`

::: info

[User restriction: Install from unknown source](UserRestriction#Application) is enabled by default

:::

<h2 id="CreateWorkProfile">Create work profile</h2>

Require no Device owner or Profile owner is set

There can be up to 1 work profile in your device

Options:

- Skip encryption (Require API24 or above, no actual effect)

When creating work profile, Android system will install another OwnDroid to the work profile, that OwnDroid will become a Profile owner

::: info Work profile in WearOS

You can create a work profile on WearOS. But you need a 3rd party launcher to launch work profile apps.

:::

<h2 id="OrgOwnedProfile">Organization-owned profile</h2>

**[Work profile]**

**[API30]**

Use all work profile features with org-owned profile permission

It is recommended to activate org-owned profile with [Shizuku](Permission#Shizuku)

First, get the UserID of your work profile in [UserManager -> User info](UserManager#UserInfo)

Then execute this command

```shell
#Replace the USER_ID with your actual UserID
dpm mark-profile-owner-on-organization-owned-device --user USER_ID com.bintianqi.owndroid/com.bintianqi.owndroid.Receiver
```

## Suspend personal apps

**[Work profile(Org)]**

All personal apps except system apps and OwnDroid will be suspended

When personal apps are suspended the device can only be used for calls.

## Profile maximum time off

**[Work profile(Org)]**

Set maximum time the profile is allowed to be turned off. If the profile is turned off for longer, personal apps are suspended on the device.

The minimum non-zero value corresponds to 72 hours. If an admin sets a smaller non-zero vaulue, 72 hours will be set instead.

## Cross profile intent filter

**[Work profile]**

Add cross profile intent filters so that some intents sent in the managed profile can also be resolved in the parent, or vice versa. Only activity intents are supported.

<h2 id="RemoveWorkProfile">Remove work profile</h2>

Go to [SystemManager -> Wipe Data](SystemManager#WipeData) in OwnDroid in work profile

If org-owned profile is not activated, you can remove work profile in Android Settings -> Security -> More -> Device admin apps

