**textcolor.sh**
```sh
#!/bin/bash

# getopts OPTSTRING VARNAME [ARGS...]

# OPTSTRING - :ab:c 
# check for options -a, -b, -c - silences errors
# :  - hide errors (leading ':')
# a  - option -a no parameter
# b: - option -b with parameter (trailing ':')
# a  - option -c no parameter


usage() { echo "Usage: $0 [-c <color>] [-b <background>] <string>" 1>&2; exit 1; }

color=6   # default no -c option
back=0    # default no -b option

while getopts ":c:b:" arg; do # leading ':' - hide errors; trailing ':' - with parameter
    case $arg in
        c) color=${OPTARG};;
        b) back=${OPTARG};;
        *) usage;;
    esac
done

shift $((OPTIND-1)) # move to unlooped(not in ':c:b:') argument, '<string>'

t=$@                # all space separated arguments

echo $(tput setaf "$color"; tput setab "$back")${t}$(tput setaf 7; tput setab 0)
```
