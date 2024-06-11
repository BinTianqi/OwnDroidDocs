# Network

All functions there require API24 or above, Device owner or Profile owner. If not, OnwDroid will hide the entry

## Wi-Fi Mac address

**[Device owner] [Work profile(Org)]**

**[API24]**

This will show you the actual Wi-Fi Mac address of your device, not the randomized Mac

## Options

### Preferential network service

**[Device owner(API33)] [Work profile(API31)]**

TODO: show entrance when work profile

### Lockdown admin configured network

**[Device owner] [Work profile(Org)]**

**[API30]**

Determine whether the user is prevented from modifying networks configured by the admin.

## Minimum Wi-Fi security level

**[Device owner] [Work profile(Org)]**

**[API33]**

Options:

- Open
- WEP, WPA(2)-PSK
- WPA-EAP
- WPA3-192bit

You can't connect Wi-Fis that security level is lower than it

## Wi-Fi SSID policy

**[Device owner] [Work profile(Org)]**

**[API33]**

Modes:

- None
- Blacklist
- Whitelist

You can set which Wi-Fi you can connect or which Wi-Fi you can't connect

## Private DNS

**[Device owner]**

**[API29]**

You can set private DNS mode to auto

You can also specify a DNS hostname

## Network log

This function is not available now

**[Device owner] [Work profile]**

**[API26]**

Use this function in work profile will only retrieve network logs in work profile

There shouldn't be unaffiliated user on this device if used by Device owner

Network logs contain DNS lookup and connect() library call events.

TODO

## Wi-Fi keypair

**[Device owner] [Profile owner]**

**[API33]**

Add Wi-Fi authenticating keypair

Useless for most people

TODO: catch IllegalArgumentException

## APN settings

**[Device owner]**

Require API28 or above

I know nothing about APN and carrier settings, so I can't test this function. If you can use it or you can't use it, open a issue to tell me
