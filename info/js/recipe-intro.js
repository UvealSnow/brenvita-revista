// var interval = setInterval(function () {
//   if($('h4').is(':visible')) {
//     // visible, do something
// 	var title = $(".recipe-intro h4");

// 	var tl = new TimelineMax; 

// 	TweenMax.fromTo(title, 1.2, {
// 		x: 72,
// 		y: 4,
// 		opacity: 0,
// 		ease: Power3.easeOut
// 	},{
// 		x:0,
// 		y:0, 
// 		opacity:1
// 	});
//     clearInterval(interval);
//   }
// }, 200);

window.addEventListener("focus", function() { 
	var title = $(".recipe-intro h4");

	var tl = new TimelineMax; 

	TweenMax.fromTo(title, 1.2, {
		x: 72,
		y: 4,
		opacity: 0,
		ease: Power3.easeOut
	},{
		x:0,
		y:0, 
		opacity:1
	});	
});