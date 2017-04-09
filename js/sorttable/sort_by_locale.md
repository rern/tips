Sort alphanumerically
--- 
เรียงลำดับอักษร  
by `Intl.Collator().compare` `localeCompare()`  

`{numeric: true}` sort numeric text as number  
`{sensitivity: 'base'}` sort base sensitive  

**Sort array**  
`sort` ascend  
`reverse` descend  
```js
var arr = ['ก', 'ง', 'เก', '1', '3', '๓', '๘'];

var ascend = arr.sort(Intl.Collator('th', {numeric: true}).compare);
console.log(ascend); // ["1", "3", "๓", "๘", "ก", "เก", "ง"]
```

**Sort multi-dimensional array**
`sort` ascend  
`reverse` descend  
```js
var arr = [ ['1', 'a', 'ก'], ['2', 'b', 'ง'], ['3', 'c', 'เก'], ['4', 'd', '๓'] ];

var ascend = arr.sort(function(a, b) {
    return a[2].localeCompare(b[2], 'th', {numeric: true});
});
console.log(JSON.stringify(ascend)); // [["4","d","๓"],["1","a","ก"],["3","c","เก"],["2","b","ง"]]
```
