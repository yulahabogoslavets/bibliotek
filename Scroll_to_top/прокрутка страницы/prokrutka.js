/*
window.onload = function(){
	//window.scrollTo(x,y)
	document.getElementById('top').onclick = function(){
		window.scrollTo(0,0);
	}
}
*/

window.onload = function(){
	//window.scrollTo(x,y)
	var scrolled;
	var timer;

	document.getElementById('top').onclick = function(){
		//console.log(window.pageYOffset);
		scrolled = window.pageYOffset;
		//window.scrollTo(0,0);
		scrollToTop();
	}

	function scrollToTop(){
		if (scrolled > 0) {
			window.scrollTo(0, scrolled);
			scrolled = scrolled - 100; //100 - skorost prokrutku
			timer = setTimeout(scrollToTop, 100);
		}
		else{
			clearTimeout(timer);
			window.scrollTo(0,0);
		}
	}
}