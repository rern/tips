regex
---

```sh
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
