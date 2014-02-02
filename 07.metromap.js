$.fn.METROMAP = function() {
	var $me = $( this).first();
	$me.css({ height: '450px'})
	var getter = $me.metromapGetterDUMMY();
	$me.metromap( getter)
}
TESTERS[ 'METROMAP'] = $.fn.METROMAP;

