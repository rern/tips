sed
---

`-i` : in-place edit input file  
`-e` : sequence edit  

`s/` : substitute delimiter can be any symbol or character (single byte)  
`$'...\'...\'...'` : `$` + escaped `'` inside single quote  
`"...\"...\"..."` : escaped `"` inside double quote  
`"...$var..."` : variable must be inside double quote  
`'...'"$var"'...'` : double quoted variable inside single quote   

`\|...|` : line search (left one only escaped delimiter other than `/`)  
`/1st.../, /last.../` : line range search  
`0, /.../` : line range search from line 0  
`0, /.../ {// d}` : delete only 1st line matched `...`  
`1 i\\...` : 1st line prepend  
`n i\\...` : #n line prepend  
`n a\\...` : #n line append  
`$ a\\...` : last line append  

`s/a.../b.../` : substitute `a...` with `b...`  
- `var="abcde"; echo ${var/de/12}` : abc12  
- `var="abcde"; echo ${var%d*}` : abc  

`s/a.../&b.../` : append `b...` to `a...`  
`/^a.../ s/^/b.../` : prepend `b...` to the begining of line start with `a...`  
`/^a.../ s/$/b.../` : append `b...` to the end of line start with `a...`  

`.` : single character wildcard  
`.*` : multiple character wildcard  
`\?` : 0 or 1 of preceding character  
`\+` : 1 or more of preceding character  
`*` : 0 or more of preceding character  

`[...]` : any characters in `[...]`  
`[^...]` : `[^` not any characters in `...]`  
`[^ ]*` : `*` zero or more characters that `^` are not space  

`^...` `^[...]` : start with  
`...$` `[...]$` : end with  

`/a...\|b.../` : pattern `a...` or `b...`  
`/[...]\|.../` : any characters in `[...]` or pattern `...`  
`[^...\{...\}]$` : `[^` not `$` end with any characters in `[...` or pattern in `\{...\}`

`\s` : space or tab  
`\t` : tab (GNU sed only)  
`\n` : new line  
`\r` : return  
`$'...\t...\n\r'` : `$` fix `\t` `\n` `\r` character result as `t` `n` `r`  

`a\ ...` : append line  
`i\ ...` : insert(prepend) line  
`/.../ d` : delete line  
`/^\s*$/d` : delete blank lines  
`n1, n2 d` : delete range of lines  
`-n '/.../p'` : print line  
`-n '/.../{=}'` : print line number  

`...\` : escaped split line at line end  
`...\\` : escaped split line within double quote  
`$ . * [ \ ] ^` : escape characters to force literal  
