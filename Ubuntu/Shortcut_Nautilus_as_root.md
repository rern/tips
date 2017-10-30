Shortcut - Nautilus as root
---

### Ubuntu 17.10:  
open Nautilus > ctl+l > admin://

```sh
sudo apt update
sudo apt install gksu

sudo mkdir -p /root/.config/nautilus

echo '
[Desktop Entry]
Name=File Browser as root
Exec=gksudo nautilus
Icon=system-file-manager
Terminal=false
Type=Application
Categories=Application;System;
' > ~/.local/share/applications/nautilus-root.desktop
```

**remove**
```sh
rm ~/.local/share/applications/nautilus-root.desktop
rm -R /root/.config/nautilus
```
