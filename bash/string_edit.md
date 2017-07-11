tr, ${...}
---
Edit string
```sh
var="abcde"
echo ${var/de/12}
# abc12` : replace 'de' with '12' 

echo ${var%d*}
# abc : truncate form 'd' to end '*'

tr -d '"=a' <<<'string="aaabcde"'
# stringbc
```
