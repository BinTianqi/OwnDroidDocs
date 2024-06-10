# Password and keyguard

::: danger

Use with caution !!!

:::

::: warning WearOS

You can only use numeric PIN on WearOS platform. Don't set an alphabetic password, or you can no longer unlock your watch!

:::

<h2 id="PasswordInfo">Password info</h2>

- **[API29]** Current password complexity. Please view [Required password complexity](#RequiredPasswordComplexity)

- Is password complexity sufficient. If the current password complexity match the required password complexity

- Password failed attempts. **[Device admin]** TODO: update permission in app

- **[API28]** Unified password. true if the work profile and main user use a same password

## Reset password token

**[Device owner] [Profile owner]**

**[API26]**

Actions:

- Clear token
- Set token (If no password is set, the token will be activated automatically)
- Activate token (Jump to Settings, type your password to activate this token)

The token is hardcoded. It is *114514191981011451419198101145141919810*

## Reset password

Set a new lockscreen password. The length of this password must be at least 4 digits. Keep it empty to remove password

If you set a numeric password that length is 6 or lower, it will set as PIN

Options: 

- Do not ask credentials on boot (Only affect Full-disk-encryption devices)
- Require entry. Other Device admins are not able to reset password until you use the new password to unlock your device

Actions: 

- **[API26]** Reset password with token **[Device owner] [Profile owner]**
- Reset password (Deprecated) (Before API24, Device admin can use it anytime. From API24, Device admin can set a password if no password it set, Device owner and Profile owner can reset password if the device is unlocked. Deprecated from API26)

## Screen timeout

**[Device owner]**

You can only set a shorter screen timeout in Settings. 

0 means no restriction

## Password timeout

**[Device owner]**

If you never change your password during this limit, you will be asked to set a new password

0 means no restriction

## Max failed passwords for wipe

**[Device owner]**

If you attempt wrong password that reach this limit, all data on your device will be wiped

0 means use system default setting

## Password history length

**[Device admin]**

The user will not be able to enter a new password that is the same as any password in the history. 

TODO: update permission in app

## Required strong auth timeout

**[Device owner] [Profile owner]**

**[API26]**

Determine for how long the user will be able to use secondary, non strong auth for authentication, since last strong method authentication (password, pin or pattern) was used. After the returned timeout the user is required to use strong authentication method.

A value of 0 means the admin is not participating in controlling the timeout. The minimum and maximum timeouts are platform-defined and are typically 1 hour and 72 hours, respectively.

<h2 id="RequiredPasswordComplexity">Required password complexity</h2>

**[Device owner] [Profile owner]**

**[API31]**

There are 4 levels of password complexity: 

1. None. No password is required
2. Low. Allow pattern and weak password
3. Medium. Weak password is not allowed, the password must be at least 4 digits
4. High. Weak password is not allowed, the password must be at least 6 digits

Weak password: passwords such as 1234, 6666

You can jump to Settings to set a new password by click _Request to set a new password_

## Disable keyguard feature

**[Device admin]**

TODO: update strings in app, show entrance when device admin

Modes: 

- Enable all
- Disable all
- Disable custom features

Custom features:

- Disable widgets (Deprecated)
- Disable camera
- Disable notifications
- Disable un-redacted notifications
- Disable trust agents
- Disable fingerprint unlock
- Disable remote input (Deprecated)
- **[API28]** Disable face unlock
- **[API28]** Disable iris unlock
- **[API28]** Disable biometric unlock
- **[API34]** Disable shortcuts

## Require password quality

**[Device owner] [Profile owner]**

Deprecated from API31. Please use [Required password complexity](#Required password complexity)

Quality levels:

- None
- Must set a password or pattern
- Alphabetic
- Numeric
- Alphanumeric
- Biometrics (weak)
- Numeric (Complex)
- Custom (won't support)
