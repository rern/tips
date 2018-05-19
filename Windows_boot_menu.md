Windows Boot Menu Edit
---
Elevated command prompt: `Windows key` > `Commamnd Prompt` > `right-click` > `Run as administrator`
```
bcdedit /set {b2cdc1bd-5b34-11e8-9b8f-c1850323d3c6} description "Pan's Windows 10"
bcdedit /displayorder {current} {b2cdc1bd-5b34-11e8-9b8f-c1850323d3c6}
```
