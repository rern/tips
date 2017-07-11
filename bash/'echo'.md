**echo**  

`# * ; ( ) < > | \ &` : reserved charaters in `echo`  
`echo ...` : non quote - reserve characters must be escaped, `'&'` must use single quoted   
`echo "..."` : soft quote - translate variables, no escapes required  
`echo '...'` : strong quote - all literal  

`echo` : blank line  
`echo $var` : var value without spaces  
`echo "$var"` : var value with spaces  
`echo '$var'` : $var literal  
`echo $var abc` : var and string  
`echo 'abc "def"'` : double quote literal  
`echo "$var \"abc\""` : double quote literal inside double quote  
`echo ${var}abc` or `echo -e "$var \babc"` : var next to string without space  
`echo -n 'abc'` : '-n' = no new line  
`echo -e '\nabc\n'` : '-e' = enable translate backslash characters  
```
    \a          alert (bell)  
    \b          backspace
    \c          suppress trailing new line
    \e          escape 
    \f          form feed
    \n          new line
    \r          carriage return
    \t          horizontal tab
    \v          vertical tab
    \\          backslash
    \NNN        character - ASCII code in octal
    \xnnn       character - ASCII code in hexadecimal
```
`echo abc > file`  : create new file or **replace** if file exist with 'abc' content  
`echo abc >> file` : create new file or **append**  if file exist with 'abc' content    
