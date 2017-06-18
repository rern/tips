**ext4 partiton - disable journal**

```bash
# format partition
mkfs.ext4 /dev/sda1

# label
e4label /dev/sda1 labelname

# disable journal
tune2fs -O ^has_journal /dev/sda1

# mount no access time
mount /dev/sda1 /path -o noatime
```
