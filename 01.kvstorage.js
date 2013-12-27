$.fn.KVSTORAGE = function() {
	var $me = $( this).first();
	$me.ioover( true).append( 'creating <strong>.kvstorage</strong>');
	$me.kvstorage( function( a) { 
		$me.ioover( true).append( 'object creation OK');
		var h = { one: 10, two: 'some string', three: [ 'arrayelem1', 11, 'arrayelem3']}
		$me.ioover( true).append( 'storing: <strong>' + $.h2json( h) + '</strong>');
		a.set( h);
		$me.ioover( true).append( 'store OK');
		a.get( 'one', function( h) { 
			$me.ioover( true).append( 'get <strong>one</strong>: <strong>' + $.h2json( h) + '</strong>');
			a.get( $.ttl( 'one,two,three'), function( h) { 
				$me.ioover( true).append( 'get <strong>one,two,three</strong>: ' + $.h2json( h) + '</strong>');
				$me.ioover( true).append( 'test over');
			})
			
		})
		
	}) 
	
}
TESTERS[ 'KVSTORAGE'] = $.fn.KVSTORAGE;

