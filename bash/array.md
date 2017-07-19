Array
---

```sh
# convert 'string' to 'array' of individual characters
string='abc'
for (( i=0 ; i < ${#string} ; i++ )); do array[i]=${string:i:1}; done # array=(a b c)

# split 'string' to 'array' by a delimiter
string='abc|def|ghi'
IFS='|' read -ra array <<< "$string" # array=(abc def ghi)

array=('a' 'b' 'c')

echo ${array[*]}  # a b c
echo ${#array[@]} # 3 (length)
echo ${array[1]}  # b
array+=('d')
echo ${array[*]}  # a b c d
array[2]=2
echo ${array[*]}  # a 2 c d

# delete all values in array
unset array       # without '$'
echo ${#array[@]} # (nill)
```
