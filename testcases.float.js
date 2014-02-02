$.ioutils.nolog = false;
$.ioutils.nostats = true;
var $body = $( 'body').css({ 'font-size': $.io.defs.fonts.big})
var action = null; action = chrome.browserAction;  
var runtime = null; runtime = chrome.runtime;  // onMessage
var storage = null; storage = chrome.storage.local; // QUOTA_BYTES, getBytesInUse(), get(), set(), remove(), clear()
$body.css({ width: '750px', height: 'auto', 'background-color': '#eee', color: '#555', padding: '3px', 'font-size': $.io.defs.fonts.big, 'text-align': 'right'})
var $status = $body.ioover( true)
var msgs = $body.ioover( true).css({ color: '#000'}).ioground( '#5AF', 0.6).ioover( true).css({ margin: '5px 0px 5px 1%', width: '98%', height: 'auto', color: '#000', padding: '5px 2px'}).ioatomsMsgs({ linger: '1s', timeout: '5s'})
$body.ioover( true).append( 'Testers for various components');
$body.ioover( true).css({ height: '7px'})	// spacer
var $box = $body.ioover( true).append( 'Testers: ');
for ( var k in TESTERS) $box.append( ' -- <strong>' + k + '</strong>');
var $box2 = $body.ioover( true).ioground( '#000', 0.1).ioover( true).css({ margin: '5px 1%', width: '98%', height: 'auto', 'font-size': $.io.defs.fonts.big})
$box.find( 'strong').iotextbutton( function( k) { $box2.ioanimoutemptyin( 'fast', function() { $box2[ k](); })})
$body.ioover( true).css({ height: '7px'})	// spacer

