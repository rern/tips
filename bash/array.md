```sh
array=(a b c)
echo ${array[*]}  # a b c
echo ${array[1]}  # b
array[3]=d
echo ${array[*]}  # a b c d
```
