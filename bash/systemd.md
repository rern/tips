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
reload automatically
```sh
# drop-in file (partial): /etc/systemd/system/unit.d/override.conf
systemctl edit unit

# override file : /etc/systemd/system/unit.service
systemctl edit --full unit

# revert back
systemctl revert unit
```

**manual edit**
cp /lib/systemd/system/unit.service /etc/systemd/system
nano /lib/systemd/system/unit.service
systemctl daemon-reload
```
