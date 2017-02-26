`cut` by use `-d` delimiter `"` at `-f6` field 6

```sh
echo 'key1="value1" key2="value2" key3="value3" key4="value4"' | cut -d '"' -f6
# value3
```
