variable, argument
---

`$var` : simplified `${var}`  
`var=` `var=''` : empty variable

`command a b c`  

`$#` : number of argument = 3  
`$@` : all arguments      = a b c  
`$0` : command itself     = command  
`$1` : Nth argument       = a  
`$_` : last argument      = c  

`$?` : last exit code  

`$@` `$*` : all arguments as separated words  
`"$@"` : all arguments as each words  
`"$*"` : all arguments as a single word  

`"${array[@]}"` : all value as separated words  
`"${array[*]}"` : all arguments as a single word  

**previous command with arguments**
```sh
trap 'previouscmd=$thiscmd; thiscmd=$BASH_COMMAND' DEBUG
command arg1 arg2
prev=$previouscmd   # prev='command arg1 arg2'
```
