# Network

All functions there require API24 or above, Device owner or Profile owner. If not, OnwDroid will hide the entry

## Wi-Fi Mac address

Require Device owner or profile owner of org-owned profile

Require API24 or above

This will show you the actual Wi-Fi Mac address of your device, not the randomized Mac

## Preferential network service

Require Device owner

Require API33 or above

TODO

## Wi-Fi lockdown

Require Device owner or Profile owner of org-owned profile

Require API30 or above

TODO

## Minimum Wi-Fi security level

Require Device owner or Profile owner of org-owned profile

Require API33 or above

Options:

- Open
- WEP、WPA(2)-PSK
- WPA-EAP
- WPA3-192bit

You can't connect Wi-Fis that security level is lower than it

## Wi-Fi SSID policy

Require Device owner or Profile owner of org-owned profile

Require API33 or above

Modes:

- None
- Blacklist
- Whitelist

You can set which Wi-Fi you can connect or which Wi-Fi you can't connect

## Private DNS

Require Device owner

Require API 29 or above

You can set private DNS mode to auto

You can also specify a DNS hostname

## Network log 

Require Device owner or Profile owner of work profile

Use this function in work profile will only retrieve network logs in work profile

There shouldn't be unaffiliated user on this device if used by Device owner

Require API26 or above

TODO

## Wi-Fi keypair

Require Device owner or Profile owner

Require API33 or above

Add or remove Wi-Fi keypair

[TODO]

## APN settings

Require Device owner

Require API28 or above

I know nothing about APN and carrier settings, so I can't test this function. If you can use it or you can't use it, open a issue to tell me
