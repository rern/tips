```sh
string='abc'
# convert 'sytring' to 'array' of individual characters
for (( i=0 ; i < ${#string} ; i++ )); do array[i]=${string:i:1}; done

array=('a' 'b' 'c')
echo ${array[*]}  # a b c
echo ${#array[@]} # 3
echo ${array[1]}  # b
array+=('d')
echo ${array[*]}  # a b c d
array[2]=2
echo ${array[*]}  # a 2 c d
```
