var title = $(".recipe-intro h4");

var tl = new TimelineMax; 

TweenMax.from(title, 1.2, {
	x: 72,
	y: 4,
	ease: Power3.easeOut
});