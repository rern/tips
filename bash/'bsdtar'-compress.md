**Extract**  
`-x` extract
`-v` verbose  
`-p` keep files permissions  
`-f` file (must be right before compressed.file)
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
