**string**
```sh
if [[ $var = srting ]]; then
  ...
else
  ...
fi

[[ $var = string ]] && ... || ...
```

**number**
```sh
if (( $var == 1 )); then
  ...
else
  ...
fi

(( $var == 1 )) && ... || ...
```
