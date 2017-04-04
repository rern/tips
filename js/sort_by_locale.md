Sort Thai alphabetically
---

**Sort in array**
```sh
var arr = ['ก', 'ง', 'เก'];
var sorted = arr.sort(Intl.Collator().compare);
console.log(sorted); // ['ก', 'เก', 'ง']
console.log(sorted.reverse()); // ['ง', 'เก', 'ก']
```

**Sort multi-dimensional array**
```sh
var arr = [ [1, 'a', 'ก'], [2, 'b', 'ง'], [3, 'c', 'เก'] ];
var sorted = arr.sort(function(a, b) {
    return a[2].localeCompare(b[2]);
});
console.log(JSON.stringify(sorted)); // [ [1, 'a', 'ก'], [3, 'c', 'เก'], [2, 'b', 'ง'] ] 
```
