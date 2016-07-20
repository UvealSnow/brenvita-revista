$(document).ready(
	function () {

var brenvita = new SplitText("#brenvita", {type:"chars"});
var tl = new TimelineMax;
var chars = brenvita.chars;

TweenMax.set("#brenvita", {perspective:0} );

var image = $(".background img");
var body = $("body");
var title = $("#title");
var date = $("#date");

TweenMax.from(date, 1, { y: -50, ease:Back.easeOut.config(1.7) });

var imageAnimation = 
	TweenMax.fromTo(image, 50, 
		{
			x:(body.width()-image.width()+200), 
			y:0
		}, 
		{
			x:0, 
			y:(body.height()-image.height()) 
		});
var title = new SplitText("#title", {type: "chars"});
var titleChars = title.chars;

// var titleAnimation = 
// 	TweenMax.fromTo(title, 1,
// 		{
// 			x: +45, 
// 			y: +45,
// 			opacity: 0
// 		},

// 		{
// 			x: 0,
// 			y: 0,
// 			opacity: 1
// 		}
// 	);

var imageTL = new TimelineMax;
imageTL
	.staggerFrom(
		titleChars, 
		2, 
		{
			y: 45,
			opacity: 0,
			ease:Back.easeOut.config(2.7)
		}, 0.025, "+=0");
tl
	.staggerFrom(
		chars, 
		1, 
		{
			opacity:0, 
			y:20, 
			rotationX:45, 
			// transformOrigin:"0% 50% -50",  
			// ease:Expo.easeOut, 
			ease:Back.easeOut.config(2.7),
			delay:.75
		}, 0.05, "+=0");	




}); 



