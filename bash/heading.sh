#!/bin/bash

# heading variables and functions

linered=$( printf '\e[0;31m%*s\e[m\n' "${COLUMNS:-$(tput cols)}" '' | tr ' ' - )
line2=$( printf '\e[0;36m%*s\e[m\n' "${COLUMNS:-$(tput cols)}" '' | tr ' ' = )
line=$( printf '\e[0;36m%*s\e[m\n' "${COLUMNS:-$(tput cols)}" '' | tr ' ' - )
bar=$( echo -e "$(tput setab 6)   $(tput setab 0)" )
warn=$( echo $(tput setab 1) ! $(tput setab 0) )
info=$( echo $(tput setab 6; tput setaf 0) i $(tput setab 0; tput setaf 7) )

title2() {
	echo $line2
	echo -e "$bar $1"
	echo $line2
}
title() {
	echo $line
	echo -e "$1"
	echo $line
}
titleend() {
	echo -e "\n$1"
	echo $line
}
error() {
	echo $linered
	echo $warn $1
	echo $linered
}
errorend() {
	echo -e "\n$warn $1"
	echo $linered
}
