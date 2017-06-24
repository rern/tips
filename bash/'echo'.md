**echo**  

`echo $var` : var only  
`echo "$var"` : var with spaces only  
`echo 'abc'` : string only  
`echo 'abc "def"'` : string with double quote  
`echo "$var \"abc\""` : double quote inside double quote  
`echo "$var abc"` : var and string  
`echo "${var}abc"` : var next to string without space  
`echo -n 'abc'` : '-n' = no new line  
`echo -e '\nabc\n'` : '-e' = enable translate backslash  
```
    \a          alert (bell)  
    \b          backspace
    \c          suppress trailing newline
    \e          escape 
    \f          form feed
    \n          new line
    \r          carriage return
    \t          horizontal tab
    \v          vertical tab
    \\          backslash
    \NNN        the character whose ASCII code is NNN (octal); if NNN is not a valid octal number, it is printed literally.
    \xnnn       the character whose ASCII code is the hexadecimal value nnn (one to three digits)
```
