var brenvita = new SplitText("#brenvita", {type:"chars"});
var chars = brenvita.chars;

TweenMax.set("#brenvita", {perspective:0} );

var image = $(".background img");
var body = $("body");
var title = $("#title");
var date = $("#date");
var title = new SplitText("#title", {type: "chars"});
var titleChars = title.chars;

var imageTL = new TimelineMax;
var dateTL = new TimelineMax;
var titleTL = new TimelineMax; 
var brenvitaTL = new TimelineMax;

TweenMax.to(image, 0, {
	x: (body.width()-image.width()+200),
	y:0
});

var dateTween = TweenMax.fromTo(date, 1, { y: -50, ease:Back.easeOut.config(1.7), opacity: 0, immediateRender: false  }, { y: 0, opacity: 1 });


var imageTween = TweenMax.fromTo(image, 50, 
		{
			y:0, immediateRender: false 
		}, 
		{
			x:0, 
			y:(body.height()-image.height()) 
		});


var titleTween = TweenMax
	.staggerFromTo(
		titleChars, 
		2, 
		{
			y: 45,
			opacity: 0,
			ease:Back.easeOut.config(2.7),
			immediateRender: false
		},{
			y: 0,
			opacity: 1
		}, 0.025, "+=0");
var brenvitaTween = TweenMax
	.staggerFromTo(
		chars, 
		1, 
		{
			opacity:0, 
			y:20, 
			rotationX:45,
			immediateRender:false,  
			// transformOrigin:"0% 50% -50",  
			// ease:Expo.easeOut, 
			ease:Back.easeOut.config(2.7),
			delay:.75
		},{
			opacity:1, 
			y:0, 
			rotationX:0, 
			// transformOrigin:"0% 50% -50",  
			// ease:Expo.easeOut, 
		}, 0.05, "+=0");	

	imageTL.add(imageTween);
	dateTL.add(dateTween);
	titleTL.add(titleTween);
	brenvitaTL.add(brenvitaTween);

window.addEventListener("focus", function() { 

	imageTL.play(); 
	dateTL.play(); 
	titleTL.play(); 
	brenvitaTL.play(); 
}); 

window.addEventListener("blur", function() {
	imageTL.reverse(0); 
	dateTL.reverse(0); 
	titleTL.reverse(0); 
	brenvitaTL.reverse(0); 
});

