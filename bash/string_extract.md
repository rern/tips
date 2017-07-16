String extract
---

```sh
string='1234567890'
length=${#string}      # 10

# convert 'sytring' to 'array' of individual characters
read -a array <<< echo $string | sed 's/./& /g'
extract=${array[1]}    # b

extract=${string:1:3}  # 23
extract=${string:0:3}  # 123
extract=${string::3}   # 123
extract=${string: 3}   # 4567890
extract=${string:3}    # 4567890
extract=${string::-3}  # 1234567
extract=${string:0:-3} # 1234567
extract=${string: -3}  # 890
extract=${string:-3}   # 1234567890 not applicable!!!

string='123456789012345'
length=${#string}           # 15
newstring=${string/123/abc} # abc456789012345 - replace '123' with 'abc'
extract=${string#3*5}       # 12678901234567890 - delete shortest match '3 to 5'
extract=${string##3*5}      # 1267890 - delete longest match '3 to 5'
extract=${string%3*5}       # 12345678901267890 - delete shortest match '3 to 5' from end
extract=${string%%3*5}      # 1267890 - delete longest match '3 to 5' from end

numstring=1.23ab
extract=${numstring//[^0-9.]/} # 1.23 - '//'delete all characters '^'not match '[...]'any of '0 to 9'
extract=${numstring//[0-9.]/} # ab - '//'delete all characters match '[...]'any of '0 to 9'

float=1.23
extract=${float%.*}   # 1 (round down) - '%'delete from end '*'all characters to 1st '.' matched
extract=${float#.*}   # 23 - '#'delete from start '*'all characters to 1st '.' matched

extract=$( awk '{print $4}' <<<'column1 column2 column3 column4' )     # column4
```
