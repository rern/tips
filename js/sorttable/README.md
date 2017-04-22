sorttable.js 
---
a jquery plugin for `table` with `thead` and `tbody`  
- เรียงลำดับภาษาไทยได้  
- sortable row
- fixed header
- scrollable body
- maintain scroll position on screen rotate
- align center table
- screen rotate responsive 
- zebra stripe row
  
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
	divAboveTable: 'divid',	// default: (none) - div above table, enclosed in single div
	locale: 'code'		// default: 'en' - locale code
});
...
```
**custom css for table:**  
  edit in `sorttable.css`    
  
[**locale code**](https://r12a.github.io/app-subtags/)
