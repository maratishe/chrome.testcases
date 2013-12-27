$.fn.STRINGEX = function() {
	var $me = $( this).first();
	$me.ioover( true).append( 'creating <strong>.cloudstorage</strong>');
	$me.cloudstorage({ appkey: 'zowlkn1e8wio1kd', appsecret: 'wuibsyyvg8m59lj', reqauth: { token:"Y5EOhosTMLaterXt", tokensecret:"5yinu000VD7BaGZf"}, accauth: { token:"smhjytfcbjtijjj4", tokensecret:"aekdqdq6v4begdp", uid:"200306293"}}, function( a) { 
		$me.ioover( true).append( 'object creation OK');
		var v = 'some test string'; var filename = 'test.txt';
		$me.ioover( true).append( 'storing v:<strong>' + v + '</strong>, filename:<strong>' + filename + '</strong>');
		a.write( v, filename, function( status) { 
			$me.ioover( true).append( 'write status:<strong>' + status + '</strong>');
			a.read( filename, function( status, v2) { 
				$me.ioover( true).append( 'read status:<strong>' + status + '</strong>, v2:<strong>' + v2 + '</strong>');
			})
			
		})
		
	}) 
	
}
TESTERS[ 'STRINGEX'] = $.fn.STRINGEX;

