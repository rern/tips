**Extract**
```sh
bsdtar -xf compressed.file
```

**Extract to directory**
```sh
bsdtar -xf compressed.file -C /destination/
```

**Extract not include root directory of compressed.file to destination**
```sh
bsdtar -xf compressed.file -s'|[^/]*/||' -C /destination/
```
