var adjustDeltaY = 0;
var currentDeltaY = null;

function introSwipeUp(ev) {
	$(".recipe-intro")
		.velocity(
				{ translateY:"-100%", translateZ: 0} ,
				{ duration: 250, easing: "linear", complete: function(){
					$(".recipe")
						.css("position", "relative");
				} }
			); 
}

function recipeSwipeDown(ev) {
	console.log("swipe down: " + ev.gesture.velocityY);
	console.log("r scroll top: " + ($(".recipe").offset().top - $(window).scrollTop()));
	if ( ($(".recipe").offset().top - $(window).scrollTop()) == 0 && ev.gesture.velocityY > 1.2) {
		$(".recipe-intro")
			.velocity(
					{ translateY:"0%", translateZ: 0} ,
					{ duration: 250, easing: "linear", complete: function(){
						$(".recipe")
							.css("position", "fixed");
					} }
				); 
		
	}
	// if( ev.gesture.velocity > 1.4) {
	// 	// console.log("lalalala");
	// 	$(".recipe")
	// 		.velocity("scroll", {
	// 			offset: 0,
	// 			duration:250
	// 		});
	// }
	// if( ($(".recipe").offset().top - $(window).scrollTop()) == 0 ) {
	// 	$(".recipe-intro")
	// 		.velocity("scroll", {
	// 			offset:0, duration:250
	// 		});
	// }
}
function recipePanDown(ev) {
	if(ev.gesture.velocityY < 1.2) {
		$(".recipe-intro")
			.velocity(
					{ translateY: "+=" + (300/ev.gesture.deltaY) },
					{ duration: 0 }
				);
	}
}
function recipePanDownEnd(ev) {
	if(ev.gesture.velocityY < 1.2) {
		$(".recipe-intro").velocity("stop");

		$(".recipe-intro")
			.velocity(
				{ translateY: "-100%" },
				{ duration:200 }
				);
	}

}
function recipeSwipeUp(ev) {
	console.log("swipe up: " + ev.gesture.velocityY);
}
function recipePanStart(ev) {
}
function recipePan(ev) {
}
function recipePanUp(ev) {

}



$(document).ready(function() {

	$(".recipe-intro")
		.hammer({
			touchAction: "initial",
			recognizers: [
				[Hammer.Swipe,{direction: Hammer.DIRECTION_ALL}]
			]
		})
		.bind("swipeup", introSwipeUp);
	$(".recipe")
		.hammer({
			touchAction: "initial",
			recognizers: [
				[Hammer.Swipe,{direction: Hammer.DIRECTION_ALL}],
				[Hammer.Pan,{direction: Hammer.DIRECTION_VERTICAL}, ['swipe']]
			]
		})
		.bind("swipeup", recipeSwipeUp)
		.bind("swipedown", recipeSwipeDown)
		.bind("pandown", recipePanDown)
		.bind("panend", recipePanDownEnd)
});
