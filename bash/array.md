Array
---

```sh
# convert 'string' to 'array' of individual characters
string='abc'
for (( i=0; i < ${#string}; i++ )); do
    array[i]=${string:i:1}
done   # array=(a b c)

# split 'string' to 'array' by a delimiter
string='abc|def|ghi'
array=(${string//|/ })   # array=(abc def ghi)
# or
IFS='|' read -ra array <<< "$string"   # array=(abc def ghi)

# insert a character every N interval
echo "abcdefghijklmn" | sed 's/.\{4\}/&|/g'  # abcd|efgh|ijkl|mn

# extract
array=(a b c)
echo ${array[*]}  # a b c   (all)
echo ${#array[@]} # 3       (length)
echo ${array[1]}  # b       (index 1)
array+=('d')      # array=(a b c d)
array[2]=x        # array=(a b x d)

# delete all values in array
array=()
```
