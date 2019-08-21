var theWindow = $(window);
var winHeight = theWindow.height();
var animDuration = winHeight * 4;
var animData = {
        container: document.getElementById('container'),
        renderer: 'svg',
        loop: false,
        prerender: true,
        autoplay: false,
        path: 'https://raw.githubusercontent.com/ardavenp/testing/master/data.json'
    };
var anim = bodymovin.loadAnimation(animData);

$( window ).scroll(function() {
	animatebodymovin(animDuration, anim);
});

function animatebodymovin(duration, animObject) {
	
	var scrollPosition = theWindow.scrollTop();
	var maxFrames = animObject.totalFrames;
	var frame = (maxFrames / 100) * (scrollPosition / (duration / 100));
	
	animObject.goToAndStop(frame, true);
	
}