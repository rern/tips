// *** sorttable.js by rern ***
/* 
fixed header, scrollable body, screen rotate responsive

usage: 
	$('tableid').sortTable(); 	// without options
	
	$('tableid').sortTable({
		locale: 'code',					// default: 'en' - locale code
		divAboveTable: 'divid'	// default: (none) - div above table, enclosed in single div
	});
	
custom css for table: 
	edit in sorttable.css
*/

(function($) {

$.fn.sortTable = function(options) {
	
	var settings = $.extend({ // defaults
		locale: 'en',
		divAboveTable: ''
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
			$thead2.show();
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
		($window.height() < shortvport) && $thead2.css('z-index', (scrltop > abovetblH) ? 1 : 0);
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


// get scrollbar width
var scrollDiv = document.createElement("div");
var scrollCss = 'width: 100px; height: 100px; overflow: scroll; position: absolute; top: -9999px;'
scrollDiv.style.cssText = scrollCss;
document.body.appendChild(scrollDiv);
var scrollWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
document.body.removeChild(scrollDiv);

// main function
function sorttable(table, nonTableHight, locale) { // '#tableid' [, non-table height, locale])
	var minfixedH = 415; // min height to apply fixed thead
	var nontblH = (nonTableHight == null) ? 0 : nonTableHight;
	var loc = (locale == null) ? 'en' : locale; // default locale
	// convert 'tbody' to array [ ['a', 'b', 'c'], ['d', 'e', 'f'] ]
	var arr = Array.prototype.map.call(document.querySelectorAll(table +' tbody tr'), function(tr){
		return Array.prototype.map.call(tr.querySelectorAll('td'), function(td){
			var cell = td.innerHTML;
			return cell
		});
	});
	
	// #0 - add class
	$(table).addClass('sorttable');
	var tblH = $(table).outerHeight();
	var thH = $('.sorttable thead').outerHeight();
	var tbH = tblH- thH; // initial height
	
	// #1 - scroll 'tbody'
	function scrollbody() {
		setTimeout(function() {
			// before get window height without table (which may has horizontal scrollbar)
			$(table).hide(); // should 'display: none' to avoid table flash on load
			var tbodyH = $(window).height() - nontblH - thH;
			// reset to normal height from 'noscrollbody()'
			$('body').css('height', '100%');
			$(table +' tbody').height(tbodyH);
			// unhide table
			$(table).fadeIn(100).css('display', 'flex');
			$(window).scrollTop(0);
		}, 200);
	}
	scrollbody();

	// #2 - add l/r 'td' pads to keep table center
	var tbW = 0;
	$(table +' tbody tr').eq(0).find('td').each(function(i) {
		if ($(this).is(':visible')) tbW = tbW + $(this).width();
	});
	// sum width of 'td' padding
	var tdpadW = $(table +' td').eq(0).outerWidth() - $(table +' td').eq(0).width();
	var padW = Math.round( ($(window).innerWidth() - tbW - scrollWidth) / 2)  + tdpadW;
	var pad = '<td class="pad" style="width:'+ padW +'px"></td>';
	$(table +' tr').prepend(pad).append(pad);
	
	// #3 - align 'thead td' to 'tbody td'
	function tdalign() {
		setTimeout(function() { // wait for table rendering
			$(table +' thead tr').eq(0).children().each(function(i) {
				var tdW = $(table +' tbody td').eq(i).outerWidth(); // include padding
				$(this).css('width', tdW);
			});
		}, 100);
	}
	tdalign();

	// #4 - add empty 'tr' to bottom
	var tbltr = $(table +' tbody tr').eq(0).clone().find('td').empty().end(); // 'end()' - back to parent 'tr' after find
		$(table +' tbody').append('<tr><td></td></tr>');
	
	// #5 - zebra stripe 'tr'
	$(table +' tbody tr:odd').addClass('zebra');
	
	// #6 - click 'thead' to sort
	$(table +' thead tr').eq(0).children().click(function() {
		var col = $(this).index() - 1; // no pad 'td' in array 'tbltr' / 'sorted'
		var order = $(this).hasClass('asc') ? 'desc' : 'asc';
		// sort array (multi-dimensional)
		var sorted = arr.sort(function(a, b) {
				if (order == 'asc') {
					return a[col].localeCompare(b[col], loc, {numeric: true});
				} else {
					return b[col].localeCompare(a[col], loc, {numeric: true});
				}
		});
		// get empty 'tr' template
		var tbltr = $(table +' tbody tr').eq(0).clone().find('td').empty().end();
		// empty and refill 'tbody'
		$(table +' tbody').empty();
		$.each(sorted, function(i, ar) {
			tbltr.find('td').each(function(j) {
				if (j) $(this).html(ar[j-1]);
			});
			$(table +' tbody').append(tbltr[0].outerHTML);
		});
		// add empty 'tr' to bottom
		$(table +' tbody').append('<tr><td></td></tr>');
		// zebra stripe 'tr'
		$(table +' tbody tr:odd').addClass('zebra');
		// switch sort icon in thead td
		$(this).siblings().addBack().removeClass('asc desc');
		$(this).addClass(order);
	});
	
	// #7 - screen rotate
	window.addEventListener('orientationchange', function() {
		$(table).hide(); // suppress table flash
		setTimeout(function() { // wait rendering
			var padW = Math.round( ($(window).innerWidth() - tbW - scrollWidth) / 2)  + tdpadW;
			$('.pad').css('width', padW);
			// realign to fit media query 'td' width
			tdalign();
			scrollbody()
			$(table).fadeIn(100)
		}, 100);
	});
}
