**integer** or **string** or **file**  
`[[ ... ... ]]` (`[` or `[[` are commands so they must be followed by a white space)  
`((... ...))` (with or without spaces)  

integer `[[ ... ... ]]`  
`-eq` equal  
`-ne` not equal  
`-lt` less than  
`-gt`	greater than  
`-le` less than or equal  
`-ge` greater than or equal  

string `[[ ... ... ]]`  
`=` equal  
`!=` not equal  
`<` less than  
`>`	greater than  
`-z` null (zero length)  
`-n` not null  

file  
`-e` exist  
`-f` file exist  
`-d` directory exist  
`-L` link exist

```sh
if [[ $num -eq 123 || $str = abc && -e $file ]]; then
  ...
else
  ...
fi

[[ $num -eq 123 || $var = abc && -e $file ]] && ... || ...
```

**integer**  
`((... ...))` (with or without spaces)  
`<` less than  
`>`	greater than  
`<=` less than or equal  
`>=` greater than or equal  
`==` equal  
`!=` not equal  

```sh
if (($num > 0 && $num == 123)); then
  ...
else
  ...
fi

(($num > 0 && $num == 123)) && ... || ...
```
