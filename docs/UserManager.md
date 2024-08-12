# User manager

This command will return a list of all users on your device. The number before username is UserID.

```shell
pm list users
```

TODO: add this command to Shizuku

## User info

- Is User unlocked
- Support multiple users
- `API23` System user
- Admin user. An admin user can create and remove users, there can be more than 1 admin user on your device
- `API31` Headless system user. System services run in headless system user, but this user isn't assign to anyone.
- User can log out. TODO: remove from user info, create a SwitchItem
- `API28` Ephemeral user. An ephemeral user will be removed after log out or reboot
- Affiliated user. Please view [Affiliated ID](#Affiliated-ID)
- UserID. UserID is not UID. The UserID of system user is 0
- User serial number. The user serial number of system user is 0

## User operation

It is recommended to specify a user with serial number, you can also use UID, the UID should be any of the apps in the target user

- Log out current user `Profile owner(managed user)`

You should input a valid user serial number or UID before use these functions

`Device owner`

- `API28` Start user in background
- Switch to user
- `API28` Stop user
- Remove user

## Create user

`Device owner`

`API24`

Create a managed user

Options:

- Skip wizard
- `API28` Ephemeral user
- Enable all system apps (Some system apps are disabled by default, such as YouTube)

Android system will install another OwnDroid in the managed user while creating it

::: info WearOS

You can create a managed user on WearOS, but do not switch to it, or you will get a soft brick. (WearOS4 AVD)

:::

## Affiliated ID

`Device owner` / `Profile owner`

You can set multiple IDs in the affiliated ID list

When Device owner create a managed user, the managed user isn't affiliated. In order to make the managed user affiliated with the Device owner, you should set  same affiliated IDs in main user and managed user

Device owner is always affiliated with the device

Go to [User info](#User-Info) to see if the current user is affiliated

TODO: set affiliated ID automatically

## Edit username

`Device owner` / `Profile owner`

## Change user icon

`Device owner` / `Profile owner`

`API23`

Select a picture and set the picture as icon of current user

## User session message

`Device owner`

Start user session message: this message will show when you switch to other user

End user session message: this message will show when you switch to system user

The message should be limited to a short statement or it may be truncated.

