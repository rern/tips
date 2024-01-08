### WSL2

**Powershell** as Administrator
- List
```sh
wmic diskdrive list brief
# Caption                         DeviceID            Model                           Partitions  Size
# WD My Passport 0730 USB Device  \\.\PHYSICALDRIVE3  WD My Passport 0730 USB Device  1           1000169372160
# Samsung SSD 850 EVO 120GB       \\.\PHYSICALDRIVE0  Samsung SSD 850 EVO 120GB       3           120031511040
# OCZ-AGILITY3                    \\.\PHYSICALDRIVE1  OCZ-AGILITY3                    2           60019868160
# HGST HTS545050A7E680            \\.\PHYSICALDRIVE2  HGST HTS545050A7E680            1           500105249280
```

- Mount
```sh
# WD My Passport 0730 USB Device
wsl --mount \\.\PHYSICALDRIVE3 --partition 1 
```

- Read
  - File Explorer: `Linux\DISTRO\mnt\wsl\PHYSICALDRIVE3p1`

- Unmount
```sh
wsl --unmount \\.\PHYSICALDRIVE3 --partition 1 
```
