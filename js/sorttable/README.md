sortTable.js 
---
a jquery plugin for `table` with `thead` and `tbody`
- sortable
- fixed header
- scrollable body
- maintain scroll position on screen rotate
- screen rotate responsive  
  
**usage:**  
```html
...
<link rel="stylesheet" href="/path/sorttable.css">
</head>
<body>

<div id="divid">
	(divAboveTable html)
</div>
<table id="tableid">
	<thead><tr><td></td></tr></thead>
	<tbody><tr><td></td></tr></tbody>
</table>

<script src="/path/jquery.min.js"></script>
<script src="/path/sorttable.js"></script>
<script>
...
$('tableid').sortTable(); 	// without options
// or
$('tableid').sortTable({
	locale: 'code',		// default: 'en' - locale code
	divAboveTable: 'divid'	// default: (none) - div above table, enclosed in single div
});
...
```
**custom css for table:**  
  edit in `sorttable.css`    
  
[**locale code**](https://r12a.github.io/app-subtags/)
