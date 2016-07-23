var timeline = new TimelineMax;

var $glyph = $("#glyph"); 
var $text = $("#text"); 
var $text_image = $("#text img");
var $info = $("#info");
var $info_paragraph = $("#info p");
var $info_paragraph_split = new SplitText("#info p", {type:"chars"});
var $info_paragraph_chars = $info_paragraph_split.chars;
	timeline.add( 
	TweenMax.from(
		$glyph, 
		1.7, 
		{
			y: 50,
			opacity: 0,
			delay: .25,
			// ease: Back.easeOut.config(5.7)
			ease: Elastic.easeOut.config(1.5, .3)
		}
	) 
);
console.log($text_image.css("width"));
timeline.add( 
	TweenMax.to(
		$text, 
		1, 
		{
			css: { maxWidth: parseInt($text_image.css("width")) + 24 },
			opacity: 1, 
			delay: .12,
			ease: Expo.easeOut
		}
	) 
);
timeline
	.staggerFrom(
			$info_paragraph_chars, 
			.5,
			{
				x: 12,
				y: 4,
				opacity:0, 
				ease: Circ.easeOut
			}, 
			.025, "+=0"
		); 
timeline.add( 
	TweenMax.from(
		$("#media a"), 
		1, 
		{
			y:45,
			opacity: 0, 
			delay: .12,
			ease: Expo.easeOut
		}
	) 
);

// timeline.add( 
// 	TweenMax.to(
// 		$info, 
// 		1, 
// 		{
// 			css: { maxWidth: parseInt($info_paragraph.css("width")) },
// 			// opacity: 1, 
// 			delay: .12,
// 			ease: Expo.easeOut
// 		}
// 	) 
// );