### Mi Router 3 Custom Firmware

**Prepare PC**
- Install `VMware Workstation Player`: [www.vmware.com](www.vmware.com)
- Download: [VMWARE-PROMETHEUS-64-UBUNTU-EN-RU.7z](https://disk.yandex.ru/d/6EpD2EpHmB82o)
- Extract and run in VMware Workstation Player

**Pre-compile**
- Type **2** `Xiaomi (2)` > **4** `mi3 (4)`
- Wait until compiling environment setup finished (>10 minutes)

**Compile**  

![1](https://github.com/rern/tips/blob/master/Mi_Router3/01.jpg)
- Type **3** `Build Toolchain (3)` (>1 hours)
- Type **4** `Firmware (4)`
    - Type **2** `Apply skins (2)` > **0** - **6** `(0)-(6)` > **Q** `(Q)uit`
    - Type **3** `Build a firmware (3)` (>20 minutes)
    - Type **Q** `(Q)uit`
- Type **Q** `(Q)uit` or keep it running

**Prepare Mi Router**   
(For Chinese language, use thses for guessing)  
- Download Mi's overwritable firmware: [miwifi_r3_all_55ac7_2.11.20.zip](https://www.dropbox.com/s/r09dl0or4z2iyxh/miwifi_r3_all_55ac7_2.11.20.zip?dl=1)
- Extract and flash to the router  
![2](https://github.com/rern/tips/blob/master/Mi_Router3/02.jpg)  
![3](https://github.com/rern/tips/blob/master/Mi_Router3/03.jpg)  
![4](https://github.com/rern/tips/blob/master/Mi_Router3/04.jpg)  
![5](https://github.com/rern/tips/blob/master/Mi_Router3/05.jpg)  

- Disconnect all LAN
- Connect to the router through WiFi **Xiaomi_xxxxxx** > pop-up Setup page
- Finish initial setup - remember **admin password**

**Flash firmware**
- Set PC network adapter:
	- Write down current settings
	- Set IP: 192.168.31.2
	- Set subnet: 255.255.255.0
- Reconnect PC to Router
- If `(Q)uit` > Run `./start.sh`
- Verify in heading:
    - `Toolchain: OK`
    - `Firmware: MI-3_X.X.X.X-XXX.trx`
- Type **0** `SSH-hach of stock firmware (0)` > **enter** (default IP: 192.168.31.1) > type **addmin password**
- Wait until SSH-hack succeeded
- Type **4** `Firmware (4)` > **4** `Flash a firmware (4)` > type **n** no backup partition to save time
- Wait until finished > type **y** to reboot the router
- Done
- Restore PC network adapter settings

**Setup new Mi Router**  
Connect to the router
- LAN or WiFi: **ASUS** password: **1234567890**
- IP: 192.168.1.1
- ID: admin
- Password: admin

