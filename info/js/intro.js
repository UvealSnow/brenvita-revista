var tl = new TimelineMax; 
var $image = $("#image");
var imageTween =  
	TweenMax.fromTo($image, 1,
			{
				x: 50,
				opacity:0,
				immediateRender: false
			},{
				x: 0,
				opacity:1,
				delay:.25
			}
		);
var introTween = 
	TweenMax.fromTo(
			$('#intro'),
			.5,
			{
				y:50,
				opacity: 0,
				immediateRender: false
			},{
				y:0,
				opacity: 1,
				delay:.25
			}
		);

tl.add([imageTween, introTween], "-=.25");
window.addEventListener("focus", function() { 
	// var $intro
	tl.play();
});
window.addEventListener("blur", function() { 
	// var $intro
	tl.reverse();
});