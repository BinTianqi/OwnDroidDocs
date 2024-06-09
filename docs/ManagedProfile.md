# Work profile

Work profile equals to Managed profile

Work profile is a kind of user, you will see your work profile when you `pm list users`

OwnDroid will hide this feature if Device owner is activated

::: tip

As default, [Install from unknown source](UserRestriction#Application) will be disabled in work profile

:::

## Create work profile

Require no Device owner or Profile owner is set

There can be up to 1 work profile in your device

Options:

- Skip encryption (Require API24 or above, no actual effect)

When creating work profile, Android system will install another OwnDroid to the work profile, that OwnDroid will become a Profile owner

::: info Work profile in WearOS

You can create a work profile on WearOS. But you need a 3rd party launcher to launch work profile apps.

:::

## Organization-owned profile

**[Work profile]**

**[API30]**

Use all work profile features with org-owned profile permission

It is recommended to activate org-owned profile with [Shizuku](Permission#Shizuku)

First, get the UserID of your work profile in [UserManager -> User info](UserManager#User info)

Then execute this command

```shell
#Replace the USER_ID with your actual UserID
dpm mark-profile-owner-on-organization-owned-device --user USER_ID com.bintianqi.owndroid/com.bintianqi.owndroid.Receiver
```

## Suspend personal apps

**[Work profile(Org)]**

All personal apps except system apps and OwnDroid will be suspended

## Profile maximum time off

**[Work profile]**

Personal apps will be suspended if work profile keep off in this time limit

This time limit cannot lower than 72 hours

## Cross profile intent filter

**[Work profile]**

As default, intents will be filtered if some app send it across profiles. Add exception rules to allow this intents

## Organization ID

**[Work profile]**

**[API31]**

The length of this ID should between 4 and 64

You can view [Specific ID](Permission#Specific ID) if you set organization ID

## Remove work profile

Go to [SystemManager -> Wipe Data](SystemManager#Wipe data) in OwnDroid of work profile

If org-owned profile is not activated, you can remove work profile in Android Settings -> Security -> More -> Device admin apps

You can remove your work profile via this command as well

```shell
#Replace the USER_ID with your actual UserID
pm remove-user USER_ID
```
