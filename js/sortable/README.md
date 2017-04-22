sortable.js 
---
a jquery plugin for `table` with `thead` and `tbody`  
- เรียงลำดับภาษาไทยได้  
- sortable row
- highlight sorted column
- fixed header
- scrollable body
- maintain scroll position on screen rotate
- align center table
- screen rotate responsive 
- zebra stripe row
  
**usage:**  
```html
...
<link rel="stylesheet" href="/path/sortable.css">
</head>
<body>

<div id="divid">
	(divBeforeTable html)
</div>
<table id="tableid">
	<thead><tr><td></td></tr></thead>
	<tbody><tr><td></td></tr></tbody>
</table>

<script src="/path/jquery.min.js"></script>
<script src="/path/sortable.js"></script>
<script>
...
$('tableid').sortable(); 	// without options
// or
$('tableid').sortable({
	divAboveTable: 'divid',	// default: (none) - div above table, enclosed in single div
	locale: 'code'		// default: 'en' - locale code
});
...
```
**custom css for table:**  
  edit in `sortable.css`    
  
[**locale code**](https://r12a.github.io/app-subtags/)
