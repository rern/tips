**if**  

```sh
if [[ $num -eq 123 ]] || [[ $str = abc && -e $file ]]; then
  ...
else
  ...
fi
# or
[[ $num -eq 123 ]] || [[ $var = abc && -e $file ]] && ... || ...


if (($num > 0 && $num == 123)); then
  ...
else
  ...
fi
# or
(($num > 0 && $num == 123)) && ... || ...
```
