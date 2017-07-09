systemd
---

`unit.service`  

**start / stop**
```sh
systemctl start unit
systemctl stop unit
```

**enable / disable**
```sh
systemctl enable unit
systemctl disable unit
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

**environment and commands before, after**  
`file.service`  
```sh
...
[Service]
...
Environment=<VAR=value>
ExecStartPre=<command1>
ExecStartPre=<command2>
ExecStart=<command>      # allow only 1 command
ExecStartPost=<command3>
ExecStartPost=<command4>
...
```

**list all enabled**
```sh
systemctl list-unit-files | grep enabled
```

**bind to another unit**
```sh
[Unit]
Description=[string]
BindsTo=unit2.service
...
```
