Terminal colors
---

```sh
# foreground '38;5;N'
echo -e "\\033[38;5;NmSTRING\\033[0m"

# background '48;5;N'
echo -e "\\033[48;5;NmSTRING\\033[0m"

# foreground + background
echo -e "\\033[38;5;N;48;5;NmSTRING\\033[0m"
```
![color](https://github.com/rern/tips/blob/master/bash/color_table.png)  
