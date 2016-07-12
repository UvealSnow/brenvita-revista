
function introSwipeUp(ev) {
	$(".recipe")
		.velocity("scroll", 
			{
				offset:0, 
				duration:450
			});
}
function recipeSwipeDown(ev) {
	console.log("swipe down: " + ev.gesture.velocityY);
	console.log("r scroll top: " + ($(".recipe").offset().top - $(window).scrollTop()));
	if( ev.gesture.velocity > 1.4 ) {
		// console.log("lalalala");
		$(".recipe")
			.velocity("scroll", {
				offset: 0,
				duration:250
			});
	}
	if( ($(".recipe").offset().top - $(window).scrollTop()) == 0 ) {
		$(".recipe-intro")
			.velocity("scroll", {
				offset:0, duration:250
			});
	}
}
function recipeSwipeUp(ev) {
	console.log("swipe up: " + ev.gesture.velocityY);
	if( ev.gesture.velocityY >= 10 ) {
		$(".recipe")
			.velocity("scroll", {
				offset:0, duration:100
			});
	}

}
function recipePan(ev) {
	console.log("pan");

}
$(document).ready(function() {

	$(".recipe-intro")
		.hammer({
			recognizers: [
				[Hammer.Swipe,{direction: Hammer.DIRECTION_ALL}],
				[Hammer.Pan,{direction: Hammer.DIRECTION_VERTICAL}, ['swipe']]
			]
		})
		.bind("swipeup", introSwipeUp);
	$(".recipe")
		.hammer({
			// touchAction: "pan-y",
			recognizers: [
				[Hammer.Swipe,{direction: Hammer.DIRECTION_ALL}],
				[Hammer.Pan,{direction: Hammer.DIRECTION_VERTICAL}, ['swipe']]
			]
		})
		.bind("swipeup", recipeSwipeUp)
		.bind("swipedown", recipeSwipeDown)
		.bind("pan", recipePan);

});