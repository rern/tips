systemd
---

**start / stop**
```sh
systemctl start <unit>
systemctl stop <unit>
```

**enable / disable**
```sh
systemctl enable <unit>
systemctl disable <unit>
```

**view**
```sh
systemctl cat <unit>
```

**override some value**  
reload automatically on save
```sh
# drop-in file (partial) as /etc/systemd/system/unit.d/override.conf
systemctl edit <unit>

# override file as /etc/systemd/system/<unit>.service
systemctl edit --full <unit>

# revert back
systemctl revert <unit>
```

**override with new file**
```sh
cp /lib/systemd/system/<unit>.service /etc/systemd/system
systemctl daemon-reload
```

**environment and commands before, after**  
`<unit>.service`  
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

**list all unit**
```sh
systemctl list-unit-files
```

**list enabled**
```sh
systemctl list-unit-files | grep enabled
```

**list running**
```sh
systemctl | grep running
```

**interact with another unit**  
`<unit>.service`  
```sh
[Unit]
Description=...
Requires=<unit2>.service   # need
# Wants=<unit2>.service    # optional
Before=<unit2>.service     # start before
...
```
`<unit2>.service`  
```sh
[Unit]
Description=...
BindsTo=<unit>.service   # stop if unit2.service stopped
...
```
