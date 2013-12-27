$.fn.NICECOVERring = function() {
	var $me = $( this).first();
	$me.css({ height: '300px'})
	var getter = $me.nicecoverRingGetterDUMMY();
	$me.nicecoverRing( 'label', getter)
}
TESTERS[ 'NICECOVERring'] = $.fn.NICECOVERring;

