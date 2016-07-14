var title = new SplitText("#title", {type:"chars"});
var tl = new TimelineMax;
var chars = title.chars;
TweenMax.set("#title", {perspective:0} );

tl.staggerFrom(chars, 1, {opacity:0, y:20, rotationX:45, transformOrigin:"0% 50% -50",  ease:Expo.easeOut, delay:.5}, 0.05, "+=0");

