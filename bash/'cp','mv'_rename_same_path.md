`cp`, `mv` rename shorthand
---
with brace expansion
```sh
# /path/filename.ext

mv /path/filename.{ext,new}      # filename.new
mv /path/filename.new{,.bak}     # filename.new.bak
mv /path/filename.new.bak{.bak,} # filename.new
mv /path/file{name.n,xx.xx}ew    # filexx.xxew
```
