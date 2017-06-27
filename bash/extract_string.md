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

numstring=1.23ab
extract=${numstring//[^0-9.]/} # 1.23 - '//'delete all characters '^'not match '[...]'any of '0 to 9'
extract=${numstring//[0-9.]/} # ab - '//'delete all characters match '[...]'any of '0 to 9'

float=1.23
extract=${float%.*}   # 1 (round down) - '%'delete from end '*'all characters to 1st '.' matched
extract=${float#.*}   # 23 - '#'delete from start '*'all characters to 1st '.' matched

awk '{print $4}' <<<'column1 column2 column3 column4' # column4
```
