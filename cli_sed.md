sed
---

**-i** : in-place edit input file  
**-e** : sequence edit  
**-n '/.../p'** : get only line  

**s/** : substitute delimiter can be any symbol / character (single byte)  
**$**'...\\'...' : for escaped 'single quote' in pattern  
**"**...$var...**"** : variable must be inside double quote  

**\\|**...**|** : line search (left one only escaped delimiter other than '/')  
**/**1st...**/, /**last...**/** : line range search  
**0, /**...**/** : line range search from line 0  
**0, /**...**/** {// d} : delete only 1st line matched '...'  
**1 i\\**... : 1st line prepend  
**$ a\\**... : last line append

**s/**a...**/**b...**/** : substitute a... with b...  
**s/**a...**/&**b...**/** : append b... to a...  

**\.** : single character wildcard  
\* : multiple character wildcard  
**\\s** : space or tab  
**\\+** : multiple characters  

**a\\** : append line  
**i\\** : insert(prepend) line  
**d** : delete line  

**^** : at start  
**$** : at end  
**^**... : start with ...  
...**$** : end with ...  

...**\\** : ... escaped newline  
**$ . \* [ \\ ] ^** : escape characters to force literal  
