#!/bin/bash

# heading variables and functions

# 0 - black
# 1 - red
# 2 - green
# 3 - yellow
# 4 - blue
# 5 - magenta
# 6 - cyan
# 7 - gray (default)

# usage: linecolor <string> [color]
linecolor() {
	if [[ -z $2 ]] || (( $2 > 6 )); then
		color='%*s\n'
	else
		color='\e[0;3'$2'm%*s\e[m\n'
	fi
	printf $color "${COLUMNS:-$(tput cols)}" '' | tr ' ' "$1"
}
# usage: textcolor <string> [color] [background]
textcolor() { 
	[[ $2 ]] && fg=$2 || fg=7
	[[ $3 ]] && bg=$3 || bg=0
	echo $(tput setaf "$fg"; tput setab "$bg")"$1"$(tput setaf 7; tput setab 0)
}

line2=$( linecolor = 6 )       # =         (cyan)
line=$( linecolor - 6 )        # -         (cyan)
linered=$( linecolor - 1 )     # -         (red)
bar=$( textcolor '   ' 7 6 )   # [   ]     (cyan)
info=$( textcolor ' i ' 0 6 )  # [ i ]     (black on cyan)
warn=$( textcolor ' ! ' 7 1 )  # [ ! ]     (gray on red)

# usage: title2 "<string>"
# =============================================>> (width)
#
# [   ] string
#
# =============================================>> (width)
title2() {
	echo $line2
	echo -e "$bar $1"
	echo $line2
}
# usage: title "<string>"
# -------------------------------------------->> (width)
# string
# -------------------------------------------->> (width)
title() {
	echo $line
	echo -e "$1"
	echo $line
}
# usage: titleend "<string>"
# string
# -------------------------------------------->> (width)
titleend() {
	echo -e "\n$1"
	echo $line
}
# usage: title "<string>"
# (red) -------------------------------------->> (width)
# [ ! ] string
# (red) -------------------------------------->> (width)
error() {
	echo $linered
	echo $warn $1
	echo $linered
}
# usage: title "<string>"
# string
# (red) -------------------------------------->> (width)
errorend() {
	echo -e "\n$warn $1"
	echo $linered
}

