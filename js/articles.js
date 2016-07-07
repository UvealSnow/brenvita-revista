$(document).ready(function () {
	
	function animate () {
		$("div[data-view='1']").addClass('animation');
		setTimeout(function () { $("div[data-view='2']").addClass('animation'); }, 3000);
		setTimeout(function () { $("div[data-view='1']").removeClass('animation'); }, 4000);
		setTimeout(function () { $("div[data-view='3']").addClass('animation'); }, 6000);
		setTimeout(function () { $("div[data-view='2']").removeClass('animation'); }, 7000);
		setTimeout(function () { $("div[data-view='3']").removeClass('animation'); }, 10000);
		setTimeout(animate, 9000);
		
	};

	animate();

});