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
