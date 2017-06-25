Comparison
---

**Logic**  
`(( 0 ))` : false / exit 1  
`(( 1 ))` : true / exit 0  

**Integer**  
`(( $a == $b ))`  
`(( $a != $b ))`  
`(( $a > $b ))`  
`(( $a >= $b ))`  
`(( $a < $b ))`  
`(( $a <= $b ))`  

**String**  
`[[ $a == $b ]]`  
`[[ $a != $b ]]`  
`[[ $a > $b ]]`  
`[[ $a < $b ]]`  
`[[ -z $a ]]` : null / zero length  
`[[ -n $a ]]` : not null  

**File**  
`[[ -e filedirlink ]]` : exist  
`[[ -f file ]]` : 'file' exist  
`[[ -d directory ]]` : 'directory' exist  
`[[ -L link ]]` : 'link' exist  
