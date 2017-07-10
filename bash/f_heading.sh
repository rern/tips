#!/bin/bash

# heading variables and functions

# linecolor <character> [color]

# textcolor '<string>' [color] [background]

# title2 "<string>"
# =============================================>> (fill width)
# [   ] string
# =============================================>> (fill width)

# titlebar "<string>"
# -------------------------------------------->> (fill width)
# [   ] string
# -------------------------------------------->> (fill width)

# titleinfo "<string>"
# -------------------------------------------->> (fill width)
# [ i ] string
# -------------------------------------------->> (fill width)

# title "<string>"
# -------------------------------------------->> (fill width)
# string
# -------------------------------------------->> (fill width)

# titleend "<string>"
# string
# -------------------------------------------->> (fill width)

# error "<string>"
# (red) -------------------------------------->> (fill width)
# [ ! ] string
# (red) -------------------------------------->> (fill width)

# errorend "<string>"
# string
# (red) -------------------------------------->> (fill width)

# 0 - black
# 1 - red
# 2 - green
# 3 - yellow
# 4 - blue
# 5 - magenta
# 6 - cyan
# 7 - gray (default)

linecolor() {
	if [[ -z $2 ]] || (( $2 > 6 )); then
		color='\e[0;36m%*s\e[m\n'
	else
		color='\e[0;3'$2'm%*s\e[m\n'
	fi
	printf $color "${COLUMNS:-$(tput cols)}" '' | tr ' ' "$1"
}
textcolor() { 
	[[ $2 ]] && color=$2 || color=6
	[[ $3 ]] && back=$3 || back=0
	echo $(tput setaf "$color"; tput setab "$back")"$1"$(tput setaf 7; tput setab 0)
}

line2=$( linecolor = )         # =         (cyan - default)
line=$( linecolor - )          # -         (cyan - default)
linered=$( linecolor - 1 )     # -         (red)
bar=$( textcolor '   ' 7 6 )   # [   ]     (gray on cyan)    - double quoted to keep spaces
info=$( textcolor ' i ' 0 3 )  # [ i ]     (black on yellow) - double quoted to keep spaces
warn=$( textcolor ' ! ' 7 1 )  # [ ! ]     (gray on red)     - double quoted to keep spaces

title2() {
	echo $line2
	echo -e "$bar $1"
	echo $line2
	echo
}

title() {
	if [[ $# > 1 ]]; then
		local symbol=$1' ' # with a trailing space ' '
		shift        # shift out called '$1'
		local string=$@    # all the rest '$n'
	else
		local symbol=''
		local string=$@
	fi
	echo $line
	echo -e "${symbol}$string"
	echo $line
}
titlebar() {
	title "$bar" $@
	echo
}
titleinfo() {
	title "$info" $@
	echo
}

titleend() {
	echo -e "\n$1"
	echo $line
	echo
}
error() {
	echo $linered
	echo $warn $1
	echo $linered
}
errorend() {
	echo -e "\n$warn $1"
	echo $linered
	echo
}

