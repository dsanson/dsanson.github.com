function menutoggle() {
    $('.old-post').toggle();
    $('#expand-switch').toggle();
    $('#collapse-switch').toggle();
}
function collapsePostIndex() {
	$("#postindex li:nth-child(-n+5)").removeClass("old-post");
	if ( $('#postindex li').length > 5 ) {
        $('#postindex').append('<li><a href="javascript:menutoggle();" id="expand-switch">↓Show all↓</a><a href="javascript:menutoggle();" id="collapse-switch">↑Show recent↑</a></li>')
    }
}

$(document).ready( function () {
	collapsePostIndex();
	if ( $.cookie('off-campus') ) {
		proxify();
		proxifybuttontoggle();
	}
});
function proxify() {
	for (var i=0; i<document.links.length; i++) {
  		document.links[i].href = document.links[i].href.replace("jstor.org", "jstor.org.proxy.lib.ohio-state.edu");
  		document.links[i].href = document.links[i].href.replace("springerlink.com", "springerlink.com.proxy.lib.ohio-state.edu");
		document.links[i].href = document.links[i].href.replace("wiley.com", "wiley.com.proxy.lib.ohio-state.edu")
	}
	$.cookie('off-campus', 'true', {expires: 21});
}
function deproxify() {
	for (var i=0; i<document.links.length; i++) {
  		document.links[i].href = document.links[i].href.replace(".proxy.lib.ohio-state.edu", "");
	}
	$.cookie('off-campus', false, {expires: 21});
}
function proxifybuttontoggle() {
	$('#proxifybutton').toggle();
	$('#deproxifybutton').toggle();
}