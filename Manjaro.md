### Hide GRUB
```sh
sed -i -e 's/\(set timeout_style=\).*/\1hidden/
' -e '/GRUB_DISABLE_OS_PROBER/ i\
exit
' /etc/grub.d/30_os-prober

update-grub
```

### Notepad++
- All Applications > Add/Remove Software
- snapd - install > select all options
- Install:
```sh
su
systemctl start snapd.seeded snapd snapd.socket # before run snap
snap install notepad-plus-plus

cd
echo "\
notepad() {
	systemctl snapd.socket
	/var/lib/snapd/snap/bin/notepad-plus-plus &> /dev/null &
}" >> .bashrc
```
- Run: `notepad`
