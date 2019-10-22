## VirtualBox Debian Guest Additions
- Fix - Guest Additions error.
```sh
apt install build-essential module-assistant
m-a prepare

# menu > Devices > Insert Guest Additions CD Image > close dialog
sh /media/cdrom0/VBoxLinuxAdditions.run
```
- Reboot
