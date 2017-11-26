Windows Console Font
---
```sh
REG ADD "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Console\TrueTypeFont" /v 000 /t REG_SZ /d "Inconsolata"
REG ADD HKCU\Console /v CodePage /t REG_DWORD /d 65001 /f
REG ADD HKCU\Console /v FaceName /t REG_SZ /d "Inconsolata" /f
REG ADD HKCU\Console /v FontSize /t REG_DWORD /d 20 /f
REG ADD HKCU\Console /v QuickEdit /t REG_DWORD /d 1 /f
```
