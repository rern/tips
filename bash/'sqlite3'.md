sqlite3 CLI
---

Kodi
```sh
# query: file 'addons' > table 'installed' > show columns (structure)
sqlite3 /home/osmc/.kodi/userdata/Database/Addons27.db "PRAGMA table_info(installed)"

# query: file 'addons' > table 'installed' > show all row '*'
sqlite3 /home/osmc/.kodi/userdata/Database/Addons27.db "select * from installed"


```
