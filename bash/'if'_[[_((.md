**number** or **string** or **file**
```sh
if [[ $num -eq 123 || $str = abc && -e $file ]]; then
  ...
else
  ...
fi

[[ $num -eq 123 || $var = abc && -e $file ]] && ... || ...
```

**number**
```sh
if (( $num > 0 && $num == 123 )); then
  ...
else
  ...
fi

(( $num > 0 && $num == 123 )) && ... || ...
```
