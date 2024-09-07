# Network

All functions there require Device owner or Profile owner. If not, OnwDroid will hide the entry

## Wi-Fi Mac address

`Device owner` / `Work profile(org)`

`API24`

This will show you the actual Wi-Fi Mac address of your device, not the randomized Mac

## Options

### Preferential network service

`Device owner(API33)` / `Work profile(API31)`

TODO: show entrance when work profile, move this function to a separate page, see DevicePolicyManager#setpreferentialnetworkserviceconfigs

### Lockdown admin configured network

`Device owner` / `Work profile(org)`

`API30`

Control whether the user can change networks configured by the admin.
When this lockdown is enabled, the user can still configure and connect to other Wi-Fi networks, or use other Wi-Fi capabilities such as tethering.

## Minimum Wi-Fi security level

`Device owner` / `Work profile(org)`

`API33`

Specify the minimum security level required for Wi-Fi networks.
The device may not connect to networks that do not meet the minimum security level. If the current network does not meet the minimum security level set, it will be disconnected. 

Security levels:

- Open
- WEP, WPA(2)-PSK
- WPA-EAP
- WPA3-192bit

## Wi-Fi SSID policy

`Device owner` / `Work profile(org)`

`API33`

Wi-Fi SSID policy specifies the SSID restriction the network must satisfy in order to be eligible for a connection.

Modes:

- None
- Blacklist
- Whitelist

## Private DNS

`Device owner`

`API29`

You can set private DNS mode to auto

### Sets the Private DNS mode to opportunistic

In this mode, the DNS subsystem will attempt a TLS handshake to the network-supplied resolver prior to attempting name resolution in cleartext.

### Sets the Private DNS host

It will perform a connectivity check to the resolver, to ensure it is valid.

In case a VPN is used in conjunction with Private DNS resolver, the Private DNS resolver must be reachable both from within and outside the VPN. Otherwise, the device may lose the ability to resolve hostnames as system traffic to the resolver may not go through the VPN.

TODO: set host in coroutine

## Recommended global proxy

`Device owner`

Types:
- No proxy
- PAC proxy
- Direct proxy

This proxy is only a recommendation and it is possible that some apps will ignore it.

## Network log

`Device owner` / `Work profile`

`API26`

Use this function in work profile will only retrieve network logs in work profile

There shouldn't be unaffiliated user on this device if used by Device owner

Network logs contain DNS lookup and connect() library call events.

You can export network logs to a JSON file

::: details NetworkLogs.json

```json
[
    // DNS lookup event
    {
        "id": "1", // (Long)
        // id of the event, where the id monotonically increases for each event.
        // The id is reset when the device reboots, and when network logging is enabled.
        "timestamp": "12345678", // (Long) Timestamp in millisecond
        "type": "dns",
        "host_name": "example.com", // Hostname to resolve
        "count": 1, // Total resolved addresses count
        "addresses": ["127.0.0.1"] // Resolved addresses
    },
    // connect() library call event
    {
        "id": "2",
        "timestamp": "12345678",
        "type": "connect",
        "address": "127.0.0.1", // The host connected to
        "port": "443"
    }
]
```

:::

## Wi-Fi keypair

`Device owner` / `Profile owner`

`API33`

Add Wi-Fi authenticating keypair

Useless for most people

TODO: catch IllegalArgumentException

## Override APN settings

`Device owner`

`API28`

I know nothing about APN and carrier settings, so I can't test this function. If you can use it or you can't use it, open a issue to tell me

