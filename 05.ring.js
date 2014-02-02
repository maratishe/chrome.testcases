$.fn.RING = function() {
	var $me = $( this).first();
	$me.css({ height: '300px'})
	var getter = $me.ringGetterDUMMY();
	$me.ring( 'label', getter)
}
TESTERS[ 'RING'] = $.fn.RING;

