Extract string
```sh
string='1234567890'

extract=${string:1:3}  # 23
extract=${string:0:3}  # 123
extract=${string::3}   # 123
extract=${string: 3}   # 4567890
extract=${string:3}    # 4567890
extract=${string::-3}  # 1234567
extract=${string:0:-3} # 1234567
extract=${string: -3}  # 890
extract=${string:-3}   # 1234567890 not applicable!!!
```
