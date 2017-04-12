// *** sorttable by rern ***
//	fixed header, scrollable body, screen rotate responsive
//
//	usage: sorttable('#tableid' [, nonTableH , 'locale']);  (default: [, 0, 'en'])

// get scrollbar width
var scrollDiv = document.createElement("div");
var scrollCss = 'width: 100px; height: 100px; overflow: scroll; position: absolute; top: -9999px;'
scrollDiv.style.cssText = scrollCss;
document.body.appendChild(scrollDiv);
var scrollWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
document.body.removeChild(scrollDiv);

// main function
function sorttable(table, nonTableH, locale) {
	var nonTableHight = (nonTableH == null) ? 0 : nonTableH;
	var loc = (locale == null) ? 'en' : locale; // default locale
	var tbh = $(table +' tbody').outerHeight();	// initial height
	// convert 'tbody' to array [ ['a', 'b', 'c'], ['d', 'e', 'f'] ]
	var arr = Array.prototype.map.call(document.querySelectorAll(table +' tbody tr'), function(tr){
		return Array.prototype.map.call(tr.querySelectorAll('td'), function(td){
			var cell = td.innerHTML;
			return cell
		});
	});
	
	// #0 - add class
	$(table).addClass('sorttable');

	// #1 - scroll 'tbody'
	function scrollbody() {
		setTimeout(function() {
			// before get window height, exclude table which may has horizontal scrollbar
			$(table).hide(); // should 'display: none' to avoid default table flash on load
			var tbodyh = $(window).height() - nonTableHight - $(table +' thead').outerHeight();
			$(table +' tbody').height(tbodyh);
			$(table).fadeIn(100).css('display', 'flex'); // unhide table
			$(document).scrollTop(0);
		}, 200);
	}
	scrollbody();

	// #2 - add l/r pad 'td' - set width to keep table center
	var tbw = 0;
	$(table +' tbody tr').eq(0).find('td').each(function(i) {
		if ($(this).is(':visible')) tbw = tbw + $(this).width();
	});
	var padlrw = $(table +' td').eq(0).outerWidth() - $(table +' td').eq(0).width(); // width for both l/r pads
	var padw = Math.round( ($(window).innerWidth() - tbw - scrollWidth) / 2)  + padlrw;
	var pad = '<td class="pad" style="width:'+ padw +'px"></td>';
	$(table +' tr').prepend(pad).append(pad);
	
	// #3 - align 'thead td' to 'tbody td'
	function tdalign() {
		setTimeout(function() { // wait for table rendering
			$(table +' thead tr').eq(0).children().each(function(i) {
				var tdw = $(table +' tbody td').eq(i).outerWidth(); // 'outerWidth()'
				$(this).css('width', tdw);
			});
		}, 100);
	}
	tdalign();

	// #4 - add at bottom an empty 'tr'
	var tbltr = $(table +' tbody tr').eq(0).clone().find('td').empty().end(); // 'end()' - back to parent 'tr' after find
		$(table +' tbody').append('<tr><td></td></tr>');
	
	// #5 - zebra stripe 'tr'
	$(table +' tbody tr:odd').addClass('zebra');
	
	// #6 - click to sort 'tr'
	$(table +' thead tr').eq(0).children().click(function() {
		var col = $(this).index() - 1; // no l/r pad in array 'tbltr' / 'sorted'
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
		// add at bottom an empty 'tr'
		$(table +' tbody').append('<tr><td></td></tr>');
		// zebra stripe 'tr'
		$(table +' tbody tr:odd').addClass('zebra');
		// switch sort icon in thead td
		$(this).siblings().addBack().removeClass('asc desc');
		$(this).addClass(order);

	});
	
	// #7 - on screen rotate
	window.addEventListener('orientationchange', function() {
		$(table).hide()
		setTimeout(function() { // wait for table rendering
			var padw = Math.round( ($(window).innerWidth() - tbw - scrollWidth) / 2)  + padlrw;
			$('.pad').css('width', padw);
			tdalign(); // realign to fit media query 'td' width
			scrollbody()
			$(table).fadeIn(100)
		}, 100);
	});
}
