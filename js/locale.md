Sort Thai alphabetically
---

**Sort in array**
```sh
var arr = [ก, ง, เก];
var sorted = arr.sort(Intl.Collator().compare)
console.log(sorted); // [กม เก, ง]
```

**Sort multi-dimensional array**
```sh
var arr = [ [1, a, ก], [2, b, ง], [3, c, เก] ];
var sorted = arr.sort(function(a, b) {
    return a[2].localeCompare(b[3]);
});
console.log(sorted); // [ [1, a, ก], [3, c, เก], [2, b, ง] ] 
```
