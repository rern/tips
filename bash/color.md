Terminal colors
---

```sh
# foreground '38;5;N'
echo -e "\\033[38;5;10mSTRING\\033[0m"

# background '48;5;N'
echo -e "\\033[48;5;10mSTRING\\033[0m"

# foreground + background
echo -e "\\033[38;5;1;48;5;10mSTRING\\033[0m"
```
