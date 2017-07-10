#!/bin/bash

# Draw colored string with top-bottom lines

linecolor() {
	if [[ -z $2 ]] || (( $2 > 6 )); then
		local color='\e[0;36m%*s\e[m\n'
	else
		local color='\e[0;3'$2'm%*s\e[m\n'
	fi
	printf $color "${COLUMNS:-$(tput cols)}" '' | tr ' ' "$1"
}
textcolor() { 
	local color=6   # default
	local back=0  # default
	[[ $2 ]] && local color=$2
	[[ $3 ]] && local back=$3
	echo "$(tput setaf $color; tput setab $back)${1}$(tput setaf 7; tput setab 0)"
}

bar=$( textcolor ' . ' 6 6 )   # [   ]     (gray on cyan)    - double quoted to keep spaces
info=$( textcolor ' i ' 0 3 )  # [ i ]     (black on yellow)
warn=$( textcolor ' ! ' 7 1 )  # [ ! ]     (gray on red)

title() {
	
	local color=6
	local line='-'
	local notop=0
	local nobottom=0
	
	usage() {
		echo 'Draw colored' $( textcolor STRING ) 'with top-bottom lines'
		linecolor -
		echo "$info      Usage:  $0 [OPTION]... STRING"
		linecolor -
		echo 'colored STRING:  $( textcolor STRING [color] [background] )'
		echo
		echo 'OPTION:'
		echo '    -c N   N - line color'
		echo '    -l C   C - line character'
		echo '    -nt    no top line'
		echo '    -nb    no bottom line'
		echo 'Badge:'
		echo '    '$bar'    $bar'   
		echo '    '$info'    $info'   
		echo '    '$warn'    $warn'   
		echo 'Color code N:'
		echo '    '$( textcolor '0 -' 7 ) 'black'
		echo '    '$( textcolor '1 -' 1 ) 'red'
		echo '    '$( textcolor '2 -' 2 ) 'green'
		echo '    '$( textcolor '3 -' 3 ) 'yellow'
		echo '    '$( textcolor '4 -' 4 ) 'blue'
		echo '    '$( textcolor '5 -' 5 ) 'magenta'
		echo '    '$( textcolor '6 -' 6 ) 'cyan (default)1'
		echo '    '$( textcolor '7 -' 7 ) 'gray'
	}
	while :; do
		case $1 in
			-h|-\?|--help) usage; exit 1;;
			-c) local color=$2; shift;;
			-l) local line=$2; shift;;
			-nt) local notop=1;; # no 'shift' for non-argument option
			-nb) local nobottom=1;;
			-?*) printf 'WARN: unknown option: %s\n' "$1" >&2;;
			*) break
		esac
		shift
	done

	[[ $notop == 0 ]] && echo $( linecolor $line $color )
	echo -e "${@}" # $@ > "${@}" - preserve spaces 
	[[ $nobottom == 0 ]] && echo $( linecolor $line $color )
}

title2() {
	title -l = $bar $@
}
titlebar() {
	title $bar $@
	echo
}
titleinfo() {
	title $info $@
	echo
}
titleend() {
	title -nt $@
	echo
}
error() {
	title -c 1 $warn $@
	echo
}
errorend() {
	title -nt -c 1 $warn $@
	echo
}
