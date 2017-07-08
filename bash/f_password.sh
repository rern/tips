#!/bin/bash

# password promt funtion
# set password variable as '$pwd1'

info=$( echo $(tput setab 3; tput setaf 0) i $(tput setab 0; tput setaf 7) )

setpwd() {
	echo
	echo 'Password: '
	read -s pwd1
	echo
	echo 'Retype password: '
	read -s pwd2
	echo
	if [[ $pwd1 != $pwd2 ]]; then
		echo
		echo "$info Passwords not matched. Try again."
		setpwd
	fi
}
