# User manager

This command will return a list of all users on your device. The number before username is UserID.

```shell
pm list users
```

## User info

- Is User unlocked
- Support multiple users
- System user (Require API23 or above)
- Admin user. An admin user can create and remove users, there can be more than 1 admin user on your device
- Headless system user. System services run in headless system user, but this user isn't assign to anyone. (Require API31 or above)
- User can log out. TODO
- Ephemeral user. An ephemeral user will be removed after log out or reboot (Require API28)
- Affiliated user. Please view [Affiliated ID](#Affiliated ID)
- UserID. UserID is not UID. The UserID of system user is 0
- User serial number. The user serial number of system user is 0

## User operation

It is recommended to specify a user with serial number, you can also use UID, the UID should be any of the apps in the target user

- Log out current user (Require Profile owner of a managed user)

You should input a valid user serial number or UID before use these functions

Require Device owner

- Start user in background (Require API28 or above)
- Switch to user
- Stop user
- Remove user

## Create user

Require Device owner

Require API24 or above

Create a managed user

Options:

- Skip wizard
- Ephemeral user (Require API28 or above)
- Enable all system apps (Some system apps are disabled by default, such as YouTube)

Android system will install another OwnDroid in the managed user while creating it

::: info WearOS

You can create a managed user on WearOS, but do not switch to it, or you will get a soft brick. (WearOS4 AVD)

:::

## Affiliated ID

Require Device owner or Profile owner

You can set multiple IDs in the affiliated ID set

When Device owner create a managed user, the managed user isn't affiliated. In order to make the managed user affiliated with the Device owner, you should set  same affiliated IDs in main user and managed user

Device owner is always affiliated with the device

Go to [User info](#User info) to see if the current user is affiliated

## Edit username

Require Device owner or Profile owner

## Change user icon

Select a picture and set the icon of current user

Require Device owner or Profile owner

Require API23 or above

## User session message

Start user session message: this message will show when you switch to other user

End user session message: this message will show when you switch to system user

