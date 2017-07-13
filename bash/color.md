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
# '\e[0m' - reset to default

# foreground '38;5;N'
echo -e "\e[38;5;NmSTRING\e[0m"

# background '48;5;N'
echo -e "\e[48;5;NmSTRING\e[0m"

# foreground + background '38;5;N;48;5;N'
echo -e "\e[38;5;N;48;5;NmSTRING\e[0m"
```
![color](https://github.com/rern/tips/blob/master/bash/color_chart.png)  

**Print color chart**
```sh
for i in {0..255}; do
	code=$( printf %03d $i )
	printf "\e[48;05;${i}m   \e[0m \e[38;05;${i}m$code\e[0m "
	if (( i >= 15 )) && (( (i-15) % 6 == 0 )); then
	printf "\n";
	fi
done
```
