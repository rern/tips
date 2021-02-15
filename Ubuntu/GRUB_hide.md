```sh
sed -i 's/\(set timeout_style=\).*/\1hidden' /etc/grub.d/30_os-prober

update-grub
```
