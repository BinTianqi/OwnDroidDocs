# Password and keyguard

::: danger

Use with caution !!!

:::

::: warning WearOS

You can only use numeric PIN on WearOS platform. Don't set an alphabetic password, or you can no longer unlock your watch!

:::

## Password info

- Current password complexity. Please view [Required password complexity](#Required password complexity). (Require API29 or above)

- Is password complexity sufficient. If the current password complexity match the required password complexity

- Password failed attempts. If you can see it, the value should be 0

- Unified password. true if the work profile and main user use a same password (Require API28 or above)

## Reset password token

Require Device owner or Profile owner

Require API26 or above

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

- Reset password with token (Require API26 or above)
- Reset password (Deprecated) (Before API24, Device admin can use it anytime. From API24, Device admin can set a password if no password it set, Device owner and Profile owner can reset password if the device is unlocked. Deprecated from API26)

## Screen timeout

Require Device owner

You can only set a shorter screen timeout in Settings. 

0 means no restriction

## Password timeout

Require Device owner

If you never change your password during this limit, you will be asked to set a new password

0 means no restriction

## Max failed passwords for wipe

Require Device owner

If you attempt wrong password that reach this limit, all data on your device will be wiped

0 means use system default setting

## Password history length

Require Device owner

TODO

## Required strong auth timeout

TODO

You must use strong auth (password, PIN or pattern) to unlock your device if you didn't use them in this timeout

Minimum 1 hour, maximum 72 hours

0 means use system default timeout

## Required password complexity

Require Device owner or Profile owner

Require API31 or above

There are 4 levels of password complexity: 

1. None. No password is required
2. Low. Allow pattern and weak password
3. Medium. Weak password is not allowed, the password must be at least 4 digits
4. High. Weak password is not allowed, the password must be at least 6 digits

Weak password: passwords such as 1234, 6666

You can jump to Settings to set a new password by click _Request to set a new password_

## Keyguard features

Require Device owner

TODO

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
- Disable face unlock (Require API28 or above)
- Disable iris unlock (Require API28 or above)
- Disable biometric unlock (Require API28 or above)
- Disable shortcuts (Require API34 or above)

## Require password quality

Require Device owner or Profile owner

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
