sorttable.js 
---
a jquery function + css for `table` with `thead` and `tbody`  
- fixed header
- scrollable body
- screen rotate responsive
  
usage: sorttable('#tableid', nonTableHeight [, locale]);  (default locale: 'en')  
  
[locale code](http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry)  


css
---
```css
/* *** sorttable by rern ***
	fixed header, scrollable body, screen rotate responsive
*/
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
	border-bottom: 1px solid #eee;
	cursor: pointer;
	user-select: none;
}
thead td:empty, thead th:empty {
	pointer-events: none;
}
tbody {
	overflow: auto;
	-webkit-overflow-scrolling: touch; /* ios momentum scroll */
}
td, th {
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
```

jquery
---
```js
// *** sorttable by rern ***
//	fixed header, scrollable body, screen rotate responsive
//
//	usage: sorttable('#tableid', nonTableHeight [, locale]);  (default locale: 'en')

// get scrollbar width
var scrollDiv = document.createElement("div");
var scrollCss = 'width: 100px; height: 100px; overflow: scroll; position: absolute; top: -9999px;'
scrollDiv.style.cssText = scrollCss;
document.body.appendChild(scrollDiv);
var scrollWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
document.body.removeChild(scrollDiv);

// main function
function sorttable(table, nonTableHight, locale) {
	// convert table body to array [ ['a', 'b', 'c'], ['d', 'e', 'f'] ]
	var arr = Array.prototype.map.call(document.querySelectorAll(table +' tbody tr'), function(tr){
		return Array.prototype.map.call(tr.querySelectorAll('td'), function(td){
			var cell = td.innerHTML;
			return cell
		});
	});
	// locale
	var loc = (locale == null) ? 'en' : locale;
	// force scroll body
	var thh = $(table +' thead').height();
	var tableh = window.innerHeight - nonTableHight; 
	$(table +' tbody').height(tableh - thh);
	$('body').css('overflow', 'hidden'); // force hide page scrollbar 

	// add l/r paddings column - set width to keep table center
	var pad = '<td class="pad"></td>';
	$(table +' tr').prepend(pad).append(pad);
	var tbw = 0;
	$(table +' tbody tr').eq(0).find('td').each(function(i) {
		tbw = tbw + $(this).outerWidth();
	});
	var padding = $(table +' td').eq(0).outerWidth() - $(table +' td').eq(0).width(); // l+r padding
	var padw = Math.round( (window.innerWidth - tbw - scrollWidth) / 2)  + padding;
	$('.pad').css('width', padw);
	// align header to body column
	$(table +' thead tr').eq(0).children().each(function(i) {
			var tdw = $(table +' tbody td').eq(i).outerWidth();
			$(this).css('width', tdw);
	});
	// get empty row template
	var tbltr = $(table +' tbody tr').eq(0).clone().find('td').empty().end(); // 'end()' - back to outer <tr> after find inside
	// add at bottom an empty row
	$(table +' tbody').append('<tr><td></td></tr>');
	// zebra stripe row
	$(table +' tbody tr:odd').addClass('zebra');

	// click
	$(table +' thead tr').eq(0).children().click(function() {
		var col = $(this).index() - 1; // no L/R padding in array 'tbltr' / 'sorted'
		var order = $(this).hasClass('asc') ? 'desc' : 'asc';
		// sort row array (multi-dimensional)
		var sorted = arr.sort(function(a, b) {
				if (order == 'asc') {
					return a[col].localeCompare(b[col], loc, {numeric: true});
				} else {
					return b[col].localeCompare(a[col], loc, {numeric: true});
				}
		});
		// get empty row template
		var tbltr = $(table +' tbody tr').eq(0).clone().find('td').empty().end();
		// empty body
		$(table +' tbody').empty();
		// refill body
		$.each(sorted, function(i, ar) {
			tbltr.find('td').each(function(j) {
				if (j) $(this).html(ar[j-1]);
			});
			$(table +' tbody').append(tbltr[0].outerHTML);
		});
		// add at bottom an empty row
		$(table +' tbody').append('<tr><td></td></tr>');
		// zebra stripe row
		$(table +' tbody tr:odd').addClass('zebra');
		// switch sort icon
		$(this).siblings().addBack().removeClass('asc desc');
		$(this).addClass(order);
	});
	// on screen rotate
	window.addEventListener('orientationchange', function() {
		// refresh padding
		var padw = Math.round( (window.innerWidth - tbw - scrollWidth) / 2)  + padding;
		$('.pad').css('width', padw);
		// refresh body height
		var tableh = window.innerHeight - nonTableHight; 
		$(table +' tbody').height(tableh - thh);
	});
}
```
