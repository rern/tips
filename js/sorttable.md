css
---
```css
/* *** sorttable ***
	fixed header, scrollable body, responsive layout */
table {
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	border-collapse: collapse;
	border-style: none;
	border-width: 0;
	border-spacing: 0;
	padding: 0;
	white-space: nowrap;
}
thead {
	height: 40px;
	line-height: 40px;
	background: #EFFBF8;
	border-bottom: 1px solid #eee;
	cursor: pointer;
	user-select: none;
}
thead td:empty {
	pointer-events: none;
}
tbody {
	overflow: auto;
	-webkit-overflow-scrolling: touch; /* ios momentum scroll */
}
td {
	box-sizing: border-box;
	margin: 0;
	padding: 0 0 0 5px;
	height: 30px;
}
.asc:after {
	content: '\2009\25b2';
	color: green;
}
.desc:after {
	content: '\2009\25bc';
	color: crimson;
}
.zebra {
	background: #f0f0f0 !important;
}
/* sorttable */
```

jquery
---
```js
// *** sorttable ***
//		fixed header, scrollable body, responsive layout

//		usage: tablesort('#tableid');

// get scrollbar width
var scrollDiv = document.createElement("div");
var scrollCss = 'width: 100px; height: 100px; overflow: scroll; position: absolute; top: -9999px;'
scrollDiv.style.cssText = scrollCss;
document.body.appendChild(scrollDiv);
var scrollWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
document.body.removeChild(scrollDiv);

// main function
function tablesort(tbl) {
	// force scroll body
	var nontableh = 190; // *** sum of other height  - change height on screen rotate***
	$('body').css('overflow', 'hidden'); // force hide desktop page scrollbar 
	var thh = $(tbl +' thead').height();
	var tableh = window.innerHeight - nontableh; 
	$(tbl +' tbody').height(tableh - thh);

	// add L/R paddings column
	var pad = '<td class="pad"></td>';
	$(tbl +' tr').prepend(pad).append(pad);
	// align header to body column
	$(tbl +' thead tr').eq(0).children().each(function(i) {
			var tdw = $(tbl +' tbody td').eq(i).outerWidth();
			$(this).css('width', tdw);
	});
	// set L/R paddings width
	var tbw = 0;
	$(tbl +' tbody tr').eq(0).find('td').each(function(i) {
		tbw = tbw + $(this).outerWidth();
	});
	var padw = Math.round( (window.innerWidth - tbw - scrollWidth) / 2);
	$('.pad').css('width', padw);
	// zebra stripe row
	$(tbl +' tbody tr:odd').addClass('zebra');
	// convert table to array <tbody><tr><td> to [ ['a', 'b', 'c'], ['d', 'e', 'f'] ] (multi-dimensional)
	var arr = Array.prototype.map.call(document.querySelectorAll(tbl +' tbody tr'), function(tr){
		return Array.prototype.map.call(tr.querySelectorAll('td'), function(td){
			var cell = td.innerHTML;
			return cell
		});
	});

	// click
	$(tbl +' thead tr').eq(0).children().click(function() {
		var col = $(this).index();
		var order = $(this).hasClass('asc') ? 'desc' : 'asc';
		// sort row array (multi-dimensional)
		var sorted = arr.sort(function(a, b) {
				if (order == 'asc') {
					return a[col].localeCompare(b[col], 'th', {numeric: true});
				} else {
					return b[col].localeCompare(a[col], 'th', {numeric: true});
				}
		});
		// get empty row template
		var tbltr = $(tbl +' tbody tr').eq(0).clone().find('td').empty().end(); // 'end()' - back to outer <tr> after find inside
		// empty body
		$(tbl +' tbody').empty();
		// refill body
		$.each(sorted, function(i, ar) {
			tbltr.find('td').each(function(j) {
				$(this).html(ar[j]);
			});
			$(tbl +' tbody').append(tbltr[0].outerHTML);
		});
		// zebra stripe row
		$(tbl +' tbody tr:odd').addClass('zebra');
		// switch sort icon
		$(this).siblings().addBack().removeClass('asc desc');
		$(this).addClass(order);
	});
	// screen rotate
	window.addEventListener('orientationchange', function() {
		// reset padding
		var padw = Math.round( (window.innerWidth - tbw - scrollWidth) / 2);
		$('.pad').css('width', padw);
		// reset body height
		var tableh = window.innerHeight - nontableh; 
		$(tbl +' tbody').height(tableh - thh);
	});
}
```
