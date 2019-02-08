### Mi Router 3 Custom Firmware

**Prepare PC**
- Install `VMware Workstation Player`: [www.vmware.com](www.vmware.com)
- Download: [VMWARE-PROMETHEUS-64-UBUNTU-EN-RU.7z](https://disk.yandex.ru/d/6EpD2EpHmB82o)
- Extract and run in VMware Workstation Player

**Pre-compile**
- Select `Xiaomi (2)` > `mi3 (4)`
- Wait until compiling environment setup finished (>10 minutes)

**Compile**
- Select `Build Toolchain (3)` (>1 hours)
- Select `Firmware (4)`
    - Select `Apply skins (2)` > `(0)-(6)` > `(Q)uit`
    - Select `Build a firmware (3)` (>20 minutes)
    - Select `(Q)uit`
- Select `(Q)uit` or keep it running

**Prepare Mi Router**
- Download Mi's overwritable firmware: [miwifi_r3_all_55ac7_2.11.20.zip](https://www.dropbox.com/s/r09dl0or4z2iyxh/miwifi_r3_all_55ac7_2.11.20.zip?dl=1)
- Extract and flash to the router
- Finish initial setup

**Flash firmware**
- Reconnect PC to Router
- If `(Q)uit` > Run `./start.sh`
- Verify in heading:
    - `Toolchain: OK`
    - `Firmware: MI-3_X.X.X.X-XXX.trx`
- Select `SSH-hach of stock firmware (0)` > IP: 192.168.31.1
- Verify this list (0) disappear after succeed
- Select `Firmware (4)` > `Flash a firmware (4)`
- Reboot
- Done

**Setup new Mi Router**
- Connect WiFi: Asus
- WiFi password: 1234567890
- IP: 192.168.1.1
- ID: admin
- Password: admin
