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
extract=${numstring//[^0-9.]/} # 1.23

float=1.23
extract=${float%.*}   # 1 (round down)

awk '{print $4}' <<<'column1 column2 column3 column4' # column4
```
