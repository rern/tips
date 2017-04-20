sortTable.js 
---
a jquery plugin for `table` with `thead` and `tbody`
- sortable
- fixed header
- scrollable body
- screen rotate responsive  
  
**usage:**  
```html
<link rel="stylesheet" href="/path/sorttable.css">
...
<script src="/path/sorttable.js"></script>
...
$('tableid').sortTable(); 	// without options

$('tableid').sortTable({
	locale: 'code',		// default: 'en' - locale code
	divAboveTable: 'divid'	// default: (none) - div above table, enclosed in single div
});
```
**custom css for table:**  
  edit in `sorttable.css`    
  
[**locale code**](https://r12a.github.io/app-subtags/)
