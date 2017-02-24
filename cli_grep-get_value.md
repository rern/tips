Get `zoom-level` value from `/root/.config/midori/config`  
( ^ = start with )

```sh
zoom=$(grep -Po '(?<=^zoom-level=).*' /root/.config/midori/config)
echo $zoom
```
