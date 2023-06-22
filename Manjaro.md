### Hide GRUB
```sh
sed -i -e 's/\(set timeout_style=\).*/\1hidden/
' -e '/GRUB_DISABLE_OS_PROBER/ i\
exit
' /etc/grub.d/30_os-prober

update-grub
```

### Snap
- All Applications > Add/Remove Software
- snapd - install > select all options
- Fixes:
	- Path - `echo export PATH=$PATH:/var/lib/snapd/snap/bin >> /root/.bashrc`
	- Errors - `systemctl restart snapd.seeded snapd snapd.socket`
