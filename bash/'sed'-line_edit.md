sed
---

`-i` : in-place edit input file  
`-e` : sequence edit  

`s/` : substitute delimiter can be any symbol or character (single byte)  
`$'...\'...\'...'` : `$` + escaped `'` inside single quote  
`"...\"...\"..."` : escaped `"` inside double quote  
`"...$var..."` : variable must be inside double quote  

`\|...|` : line search (left one only escaped delimiter other than `/`)  
`/1st.../, /last.../` : line range search  
`0, /.../` : line range search from line 0  
`0, /.../ {// d}` : delete only 1st line matched `...`  
`1 i\\...` : 1st line prepend  
`$ a\\...` : last line append

`s/a.../b.../` : substitute `a...` with `b...`  
`s/a.../&b.../` : append `b...` to `a...`  

`.` : single character wildcard  
`.*` : multiple character wildcard  
`^` : at start  
`$` : at end  
`^...` : start with `...`  
`^[...]` : start with any characters in `[...]`  
`...$` : end with ...  
`[...]$` : end with any characters in `[...]`  
`[^ ]*` : zero or more characters that `^` are not space  
`[^...]` : `[^` not any characters in `...]`  
`[^...\{...\}]` : `[^` not any characters in `...` or pattern in `\{...\}]`  
`\s` : space or tab  
`\+` : multiple characters  

`a\ ...` : append line  
`i\ ...` : insert(prepend) line  
`/.../ d` : delete line  
`-n '/.../p'` : get line  

`...\` : escaped split line at line end  
`...\\` : escaped split line within double quote  
`$ . * [ \ ] ^` : escape characters to force literal  
