// // $(document).ready(
// // 	function () {
// // 		$(".background").css("height", $("body").height());
// // 		$(".background").css("width", $("body").width());
// // 	}
// // 	);
// var views = document.querySelectorAll("[data-view]");
// function handleSwipeUp() {
// 	// ELEMENT POSITION IN MANAGER ARRAY

// 	if ($(this).attr("data-view") < ($("[data-view]").length)) {
// 		console.log($(this));
// 		console.log("data-view " + $(this).attr("data-view")); 
// 		Velocity(
// 			this,
// 			{ maxHeight: "0%"},
// 			{ duration:600 }
// 			);
// 		// nextView = document.querySelectorAll
// 		nextView = $(this).attr("data-view");
// 		++nextView;
// 		console.log("Next view: " + nextView)
// 		Velocity(document.querySelectorAll('[data-view="' + nextView + '"]'),
// 			{ maxHeight: "100%"},
// 			{ duration:600 }
// 			);
// 	}
// 	// $("[data-view]").attr("[data-view]")
// }
// function handleSwipeDown() {
// 	if ($(this).attr("data-view") > 1) {
// 		console.log($(this));
// 		console.log("data-view " + $(this).attr("data-view")); 
// 		Velocity(
// 			this,
// 			{ maxHeight: "0%"},
// 			{ duration:600 }
// 			);
// 		// nextView = document.querySelectorAll
// 		previousView = $(this).attr("data-view");
// 		--previousView;
// 		console.log("Previous view: " + previousView)
// 		Velocity(document.querySelectorAll('[data-view="' + previousView + '"]'),
// 			{ maxHeight: "100%"},
// 			{ duration:600 }
// 			);
// 	}
// }
// 	// $("[data-view]").attr("[data-view]")

// $('[data-view]').each(function(){
// 	$(this)
// 		.hammer({
// 			recognizers: [
// 				// RecognizerClass, [options], [recognizeWith, ...], [requireFailure, ...]
// 				[Hammer.Swipe,{ direction: Hammer.DIRECTION_ALL }]
// 		]})
// 		.bind("swipeup", handleSwipeUp);
// 	$(this)
// 		.hammer({
// 			recognizers: [
// 				// RecognizerClass, [options], [recognizeWith, ...], [requireFailure, ...]
// 				[Hammer.Swipe,{ direction: Hammer.DIRECTION_ALL }]
// 		]})
// 		.bind("swipedown", handleSwipeDown);
// });

// function swipeUp() {

// }

// // manager.add( new Hammer.Swipe({ direction: Hammer.DIRECTION_ALL }));

// // manager.on("swipeup", swipeUp);

