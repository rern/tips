// *** sorttable.js ***

// https://github.com/rern/tips/tree/master/js/sorttable

/* 
usage: 
	$('tableid').sortTable(); 	// without options
	
	$('tableid').sortTable({
		divAboveTable: 'divid',	// default: (none) - div above table, enclosed in single div
		locale: 'code'			// default: 'en' - locale code
	});
	
custom css for table: 
	edit in sorttable.css
*/

(function($) {

$.fn.sortTable = function(options) {
	
	var settings = $.extend({ // defaults
		divAboveTable: '',
		locale: 'en'
	}, options );
	
	var abovetblH = settings.divAboveTable ? $(settings.divAboveTable).outerHeight() : 0;
	var shortvport = 415; // min height to apply fixed thead
	var initscrolltimeout = 300; // all 'setTimeout()' are crucial, less will break header and scroll position
	var scrolltimeout = 400;
	var th2aligntimeout = 300;
	
	var arr = Array.prototype.map.call(this[0].querySelectorAll('tbody tr'), function(tr){
		return Array.prototype.map.call(tr.querySelectorAll('td'), function(td){
			var cell = td.innerHTML;
			return cell
		});
	});
	
	var $window = $(window);
	var $table = this;
	var $thead = $table.find('thead');
	var $tbody = $table.find('tbody');
	var tblid = this[0].id;
	var tblH = $table.outerHeight();
	var thH = parseInt($('thead').css('height'))
	var tbH = tblH - thH; // initial height
	var tdpadW = $('td').outerWidth() - $('td').innerWidth(); // 'td' l+r padding
	var pad = '<td class="pad"></td>';
	var trempty = '<tr><td></td></tr>';
	var parentid = 'sorttable'+ tblid;
	
	$table.wrap('<div id="'+ parentid +'"></div>');
	$table.addClass('sorttable');
	// dynamic css - for abovetblHight underlay and fixed header
	var tdpadding = $table.find('td').css('padding');
	var thclass = $thead.css('height');
	$('head').append('<style>'+
		'#'+ parentid +'::before {'+
			'content: "";'+
			'display: block;'+
			'height: '+ abovetblH +'px;'+
		'}\n'+
		'@media(max-height: '+ shortvport +'px) {'+
			'#'+ parentid +'::before {display: block; height: 0;}'+
		'}\n'+
		'.sorttableth2 {top: '+ abovetblH +'px;}\n'+
		'.sorttableth2 a {padding: '+ tdpadding +';}\n'+
		'@media(max-height: '+ shortvport +'px) {'+
			settings.divAboveTable +' {position: relative;}'+
			'.sorttableth2 {top: 0; z-index: -1;}'+
			'.sorttable thead {visibility: visible;}'+
		'}'+
		'</style>'
	);

// #1 - functions
	// align 'thead td, sorttableth2 a' to 'tbody td' + zebra
	function th2align() {
		setTimeout(function() { // wait rendering
			$thead.children().children().each(function(i) {
				$thead2a.eq(i).css('width', $(this).outerWidth() +'px'); // include 'td' padding
			});
			$thead2.css('z-index', 1).show();
		}, th2aligntimeout);
	}
	
// #2 - add fixed header for short viewport
	var th2html = $thead.find('tr')
		.html()
		.replace(/td/g, 'a')
		.replace(/[\n\t]|style=".*"/g, '');
	var th2id = tblid +'th2';
	$('body').prepend('<div id="'+ th2id +'" class="sorttableth2" style="display: none"><a></a>'+ th2html +'</div>');
	var $thead2 = $('#'+ th2id);
	var $thead2a = $thead2.find('a');
	// delegate click to 'thead'
	$thead2.delegate('a', 'click', function() {
		$thead.children().children().eq($(this).index())
			.click();
	});

// #3 - add l/r 'td' pads to keep table center
	// 'detach' to avoid many dom traversings
	var $tblparent = $table.parent();
	var $tbl = $table.detach();
	$tbl.find('tr').each(function() {
		$(this).prepend(pad).append(pad);
	});
	$tblparent.append($tbl);

// #4 - get empty 'tr' template
	var tbltr = $tbody.find('tr:first')
		.clone().find('td')
		.empty()
		.end(); // 'end()' - back to parent 'tr' after find

// #5 - add empty 'tr' to bottom
	$tbody.append(trempty);
	
// #6 align 'thead td, thead2 a' to 'tbody td'
	th2align();
	
// #7 - scroll
	// reference for scrolling calculation
	fromshortv = ($window.height() < shortvport) ? 1 : 0;
	// get scroll position
	var scrltop = 0;
	$window.scroll(function () {
		scrltop = $window.scrollTop();
		// show / hide 'thead2' on scroll event
		($window.height() < shortvport) && $thead2.css('z-index', (scrltop > abovetblH) ? 1 : -1);
	});
	// show top part on short viewport initial load
	setTimeout(function() {
		$window.scrollTop(0);
	}, initscrolltimeout);

// #8 - click 'thead' to sort
	$thead.delegate('td', 'click', function() {
		var col = $(this).index() - 1; // no pad 'td' in array 'tbltr' / 'sorted'
		console.log(col);
		var order = $(this).hasClass('asc') ? 'desc' : 'asc';
		// sort array (multi-dimensional)
		var sorted = arr.sort(function(a, b) {
			if (order == 'asc') {
				return a[col].localeCompare(b[col], settings.locale, {numeric: true});
			} else {
				return b[col].localeCompare(a[col], settings.locale, {numeric: true});
			}
		});
		// empty and refill 'tbody'
		var tbhtml = '';
		$.each(sorted, function(i, ar) {
			tbltr.find('td').each(function(j) {
				if (j) $(this).html(ar[j-1]);
			});
			tbhtml += tbltr[0].outerHTML;
		});
		$tbody.html(tbhtml);
		// add empty 'tr' to bottom
		$tbody.append(trempty);
		// switch sort icon in thead td
		$thead2a.add(this).siblings().addBack()
			.removeClass('asc desc');
		$thead2a.eq(col + 1).add(this)
			.addClass(order);
	});

// #9 - screen rotate
	window.addEventListener('orientationchange', function() {
//		scrltop = $window.scrollTop(); // !!! detect incorrectly in fullscreen ios, chrome devtools 
		// maintain scroll position on rotate
		if ($window.height() < shortvport) {
			var scrltop0 = scrltop + abovetblH;
			fromshortv = 1;
		} else {
			var scrltop0 = scrltop - (fromshortv ? abovetblH : 0); // calc if from short viewport
			fromshortv = 0;
		}
		$thead2.hide();
		th2align(); // align thead2
		
		setTimeout(function() {
			$window.scrollTop(scrltop0);
		}, scrolltimeout);
	});
	
}
} (jQuery));
