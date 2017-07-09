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
	[[ $2 ]] && fg=$2 || fg=6
	[[ $3 ]] && bg=$3 || bg=0
	echo $(tput setaf "$fg"; tput setab "$bg")"$1"$(tput setaf 7; tput setab 0)
}

line2=$( linecolor = )         # =         (cyan - default)
line=$( linecolor - )          # -         (cyan - default)
linered=$( linecolor - 1 )     # -         (red)
bar=$( textcolor '   ' 7 6 )   # [   ]     (gray on cyan)
info=$( textcolor ' i ' 0 3 )  # [ i ]     (black on yellow)
warn=$( textcolor ' ! ' 7 1 )  # [ ! ]     (gray on red)

title2() {
	echo $line2
	echo -e "$bar $1"
	echo $line2
	echo
}
titlebar() {
	echo $line
	echo -e "$bar $1"
	echo $line
	echo
}
titleinfo() {
	echo $line
	echo -e "$info $1"
	echo $line
	echo
}
title() {
	echo $line
	echo -e "$1"
	echo $line
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

