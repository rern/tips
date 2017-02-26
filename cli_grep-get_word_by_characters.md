Get a word by characters
```sh
echo 'key1="value1" key2="value2" key3="value3" key4="value4" ' | grep -o 'key3[^ ]*'
# key3="value3"
```
