```sh
sed -i -e 's/\(set timeout_style=\).*/\1hidden
' -e '/GRUB_DISABLE_OS_PROBER/ i\
exit
' /etc/grub.d/30_os-prober

update-grub
```
