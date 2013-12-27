$.fn.QUEUE = function() {
	var $me = $( this).first();
	var $box1 = $me.ioover( true).append( 'queue status: <strong></strong>').find( 'strong').first();
	var $box2 = $me.ioover( true).append( 'events: <strong></strong>').find( 'strong').first();
	var amap = { 'basic': function( c, v) { $box2.empty().append( v); c(); }} 
	$me.kvstorage( function( kvstorage) { $box1.eventqueue( 3, amap, function( a) { 
		var i = 0;
		var one = function() { i++; if ( i > 10) return; a.push( 'basic', 'event' + i, one);}
		one();
	}, kvstorage, true)}) // use local storage, run verbosely
	
}
TESTERS[ 'QUEUE'] = $.fn.QUEUE;

