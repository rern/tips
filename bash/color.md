Terminal colors
---

**8 colors**
```sh
# 'N' - color code
# 'setaf 7', 'setab 0' - reset to default

# foreground 'setaf N'
echo "$(tput setaf N)STRING$(tput setaf 7)"

# background 'setab N'
echo "$(tput setab N)STRING$(tput setab 0)"

# foreground + background 'setaf N' 'setab N'
echo "$(tput setaf N; tput setab N)STRING$(tput setaf 7; tput setab 0)"
``` 

**256 colors**
```sh
# 'N' - color code
# '\\033[0m' - reset to default

# foreground '38;5;N'
echo -e "\\033[38;5;NmSTRING\\033[0m"

# background '48;5;N'
echo -e "\\033[48;5;NmSTRING\\033[0m"

# foreground + background '38;5;N;48;5;N'
echo -e "\\033[38;5;N;48;5;NmSTRING\\033[0m"
```
![color](https://github.com/rern/tips/blob/master/bash/color_chart.png)  

**Print 256 colors**
```sh
for i in {0..255} ; do
    printf "\x1b[48;5;%sm%3d\e[0m " "$i" "$i"
    if (( i == 15 )) || (( i > 15 )) && (( (i-15) % 6 == 0 )); then
        printf "\n";
    fi
done
```
