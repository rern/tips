Get `zoom-level` value from `/root/.config/midori/config`  
( ^ = start with `zoom-level=` and remove `zoom-level=` from the line)

```sh
zoom=$(grep -Po '(?<=^zoom-level=).*' /root/.config/midori/config)
echo $zoom
#or
zoom=$(grep -e '^zoom-level=' /root/.config/midori/config | sed 's/zoom-level=//')
echo $zoom
```
