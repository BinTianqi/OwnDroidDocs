# Automation

::: info

This feature is developing

:::

## Get started

First, you should set an automation key in OwnDroid settings, the length of the key can't shorter than 6

Most of the automation apps can sending Intent, you can use them with OwnDroid to execute automation tasks or add a launcher shortcut.

## The intent

You should add the following extra
- Key: `key`, Value: *`Your automation key`* (required)
- Key: `operation`, Value: *`Your operation`* (required)
- Key: `app`, Value: *`The target app`* (optional)

If your automation app can broadcast this Intent, you should broadcast it to `com.bintianqi.owndroid/com.bintianqi.owndroid.AutomationReceiver`

If your automation app can only use this Intent to start a Activity, send it to `com.bintianqi.owndroid/com.bintianqi.owndroid.AutomationActivity`

## Operation

OwnDroid won't catch error when execute automation tasks, you should make sure that your device support the operation and OwnDroid's permission is enough

- suspend - [Suspend](ApplicationManager#Suspend), require `app` extra
- unsuspend - [Suspend](ApplicationManager#Suspend), require `app` extra
- hide - [Hide](ApplicationManager#Hide), require `app` extra
- unhide - [Hide](ApplicationManager#Hide), require `app` extra
- reboot - [Reboot](SystemManager#Reboot)
- lock - [Lock screen now](SystemManager#LockNow)

## Debug mode

When you send the Intent to start the `AutomationActivity` and debug mode is enabled in OwnDroid automation settings, the `AutomationActivity` will show the returned message
