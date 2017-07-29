regex
---

```
A1='  #  '
A2=' # # '
A3='#   #'
A4='#####'
A5='#   #'

Find what    : [A-Z]+5=(.*)  - '[A-Z]'range A-Z  '+'and  '5='string  '()'reference group  '.*'multiple characters
Replace with : \1\n\)        - '\1'group 1  '\n'new line  '\)'escaped parentheses

Result       : '#   #'
               )
```

**non greedy find**
```
abcdxyzabcd

Find what    : a.+c         - longest match
Replace with : 123
Result       : 123d

Find what    : a[^c]+c      - shortest match
Replace with : 123
Result       : 123dxyz123d
```
