$.fn.SidePaneStack = function() {
	var $me = $( this).first();
	$me.css({ height: '300px'})
	$.io.sidepanestack.panewidth = '200px';
	var panecounter = 0; var A; 
	var pane = function() { var L = 'Pane#' + panecounter++; A.paneadd( L, function( P) { 
		P.inner().append( 'This pane is for test purposes only and therefore has only one button for <strong>creating</strong> identical new panes.')
		.css({ 'font-size': $.io.defs.fonts.big})
		.find( 'strong')
		.iotextbutton( function() { A.cleanafter( L, pane)})
	}); } 
	$me.sidepanestack( function( a) {  A = a; pane();})
}
TESTERS[ 'SidePaneStack'] = $.fn.SidePaneStack;

