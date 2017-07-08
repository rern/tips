sqlite3 CLI
---

**Kodi addons**  

**syntax**
"<query>" must be quoted
```sh
sqlite3 <db file> "<query>"
```

**list tables**
```sh
sqlite3 /home/osmc/.kodi/userdata/Database/Addons27.db ".tables"
# addonlinkrepo  blacklist      installed      repo
# addons         broken         package        version
```

**show columns structure**
```sh
sqlite3 /home/osmc/.kodi/userdata/Database/Addons27.db "PRAGMA table_info(installed)"
# 0|id|INTEGER|0||1
# 1|addonID|TEXT|0||0
# 2|enabled|BOOLEAN|0||0
# 3|installDate|TEXT|0||0
# 4|lastUpdated|TEXT|0||0
# 5|lastUsed|TEXT|0||0
# 6|origin|TEXT|1|''|0
```

**show all rows `*`**
```sh
sqlite3 /home/osmc/.kodi/userdata/Database/Addons27.db "SELECT * FROM installed"
# ...
# 159|script.module.simplejson|1|2017-07-06 13:51:55|||
# 160|script.module.unidecode|1|2017-07-06 13:51:55|||
# 161|script.skinshortcuts|1|2017-07-06 13:51:55|||
```

**get row `addonID`** (TEXT `value` must be quoted)
```sh
sqlite3 /home/osmc/.kodi/userdata/Database/Addons27.db "SELECT * FROM installed WHERE addonID = 'script.skinshortcuts'"
# 161|script.skinshortcuts|1|2017-07-06 13:51:55|||
```

**update column `enabled` in row `addonID`**
```sh
sqlite3 /home/osmc/.kodi/userdata/Database/Addons27.db "UPDATE installed SET enabled = 0 WHERE addonID = 'script.skinshortcuts'"
#
# 'enabled' of 'script.skinshortcuts' updated:
# 161|script.skinshortcuts|0|2017-07-06 13:51:55|||
```
