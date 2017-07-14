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

# '\e[0m' - reset to default
# foreground '\e[30..37m'
echo -e "\e[3NmSTRING\e[0m"
# background '\e[40..47m' - basic 8 colors
echo -e "\e[4NmSTRING\e[0m"
# foreground + background '\e[3N;4Nm'
echo -e "\e[3N;4NmSTRING\e[0m"
``` 

**256 colors**
```sh
# 'N' - color code
# '\e[0m' - reset to default

# foreground '\e[38;5;Nm'
echo -e "\e[38;5;NmSTRING\e[0m"

# background '\e[48;5;Nm'
echo -e "\e[48;5;NmSTRING\e[0m"

# foreground + background '\e[38;5;Nm\e[48;5;Nm'
echo -e "\e[38;5;Nm\e[48;5;NmSTRING\e[0m"
```
![color](https://github.com/rern/tips/blob/master/bash/color_chart.png)  
image from:[Wikipedis](https://en.wikipedia.org/wiki/ANSI_escape_code#Colors)

**Print color chart**
```sh
for i in {0..255}; do
	code=$( printf %03d $i )
	printf "\e[48;05;${i}m   \e[0m \e[38;05;${i}m$code\e[0m  "
	(( i == 7 )) || (( i == 243 )) || (( i == 255 )) && echo
	( (( i == 15 )) || (( i > 15 )) && (( i < 232 )) && (( (i-15) % 6 == 0 )) ) && echo
done
```