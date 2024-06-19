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

- Password failed attempts. **[Device admin]**

- **[API28]** Unified password. true if the work profile and main user use a same password

## Reset password token

**[Device owner] [Profile owner]**

**[API26]**

Actions:

- Clear token
- Set token (If no password is set, the token will be activated automatically)
- Activate token (Jump to Settings, type your password to activate this token)

The token will remain effective even if the user changes or clears the lockscreen password.

::: warning

~~This token is highly sensitive and should be treated at the same level as user credentials. In particular, NEVER store this token on device in plaintext.~~

The token is hardcoded. It is *114514191981011451419198101145141919810*

TODO: input token manually

:::

## Reset password

Set a new lockscreen password. The length of this password must be at least 4 digits. Keep it empty to remove password

If you set a numeric password that length is 6 or lower, it will set as PIN

Options: 

- Do not ask credentials on boot **[Device owner]**
- Require entry. Don't allow other admins to change the password again until the user has entered it.

Actions: 

- **[API26]** Reset password with token **[Device owner] [Profile owner]**
- Reset password (Deprecated) (Before API24, Device admin can use it anytime. From API24, Device admin can set a password if no password it set, Device owner and Profile owner can reset password if the device is unlocked. Deprecated from API26)

## Screen timeout

**[Device admin]**

Set the maximum time for user activity until the device will lock. This limits the length that the user can set.

0 means there is no restriction

TODO: update permission

## Password expiration timeout

**[Device admin]**

Restart the countdown for password expiration

0 means there is no restriction

TODO: update permission

## Max failed passwords for wipe

**[Device admin]**

Setting this to a value greater than zero enables a policy that will perform a device or profile wipe after too many incorrect device-unlock passwords have been entered.

When this policy is set on the system or the main user, the device will be factory reset after too many incorrect password attempts. When set on any other user, only the corresponding user or profile will be wiped.

TODO: update permission

## Password history length

**[Device admin]**

Set the length of the password history.
After setting this, the user will not be able to enter a new password that is the same as any password in the history. Note that the current password will remain until the user has set a new one, so the change does not take place immediately.

0 means there is no restriction

TODO: update permission

## Required strong auth timeout

**[Device owner] [Profile owner]**

**[API26]**

Determine for how long the user will be able to use secondary, non strong auth for authentication, since last strong method authentication (password, pin or pattern) was used. After the returned timeout the user is required to use strong authentication method.

A value of 0 means the admin is not participating in controlling the timeout. The minimum and maximum timeouts are platform-defined and are typically 1 hour and 72 hours, respectively.

<h2 id="RequiredPasswordComplexity">Required password complexity</h2>

**[Device owner] [Profile owner]**

**[API31]**

Sets a minimum password complexity requirement for the user's screen lock. The user is unable to set a password with a lower complexity level.

There are 4 levels of password complexity: 

1. None. No password is required
2. Low. Allow pattern and PIN with repeating or ordered sequences
3. Medium. PIN with no repeating or ordered sequences, length at least 4
4. High. PIN with no repeating or ordered sequences, length at least 8. Alphabetic and alphanumeric, length at least 6

You can jump to Settings to set a new password by click _Request to set a new password_

## Keyguard features

**[Device admin]**

TODO: update permission

Disable keyguard customizations, such as widgets. After setting this, keyguard features will be disabled according to the provided feature list.

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

**Deprecated from API31.** Please use [Required password complexity](#RequiredPasswordComplexity)

Quality levels:

- None
- Must set a password or pattern
- Alphabetic
- Numeric
- Alphanumeric
- Biometrics (weak)
- Numeric (Complex)
- Custom (won't support)

