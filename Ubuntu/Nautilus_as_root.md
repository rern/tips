File Browser (Nautilus) as root
---

```sh
sudo apt update
sudo apt install gksu

echo '
[Desktop Entry]
Name=File Browser as root
Exec=gksudo nautilus
Icon=system-file-manager
Terminal=false
Type=Application
Categories=Application;System;
' > ~/.local/share/applications/nautilus-root.desktop

# to remove
rm ~/.local/share/applications/nautilus-root.desktop
```
