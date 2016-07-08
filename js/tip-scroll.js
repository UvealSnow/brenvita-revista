$(document).ready(function () {
	// $('.bg').imagefill();
	$('.img-container').imagefill();
	$('#fullpage').fullpage({
		anchors: ['cover','firstPage', 'secondPage', '3rdPage'],
	});
});