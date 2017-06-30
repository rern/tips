systemd
---

`unit.service`  

**start / stop**
```sh
systemctl start unit
systemctl stop unit
```

**view**
```sh
systemctl cat unit
```

**override some value**  
reload automatically on save
```sh
# drop-in file (partial) as /etc/systemd/system/unit.d/override.conf
systemctl edit unit

# override file as /etc/systemd/system/unit.service
systemctl edit --full unit

# revert back
systemctl revert unit
```

**override with new file**
```sh
cp /lib/systemd/system/unit.service /etc/systemd/system
systemctl daemon-reload
```
