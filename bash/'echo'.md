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
