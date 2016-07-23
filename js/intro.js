var tl = new TimelineMax; 
var $image = $("#image");
var $intro
TweenMax.from($image, 1,
		{
			x: 50,
			opacity:0,
			delay:1
		}
	);

TweenMax.from(
		$('#intro'),
		.5,
		{
			y:50,
			opacity: 0,
			delay:1
		}
	);