let btn = document.querySelector('.button-top');

function buttonTop(){
	if (window.pageYOffset > 20){
		btn.style.opacity = '1'
	} else { btn.style.opacity = '0'}
}

btn.onclick = function () {
	window.scrollTo(0,0)
}

window.onscroll = buttonTop;

/*
window.onload = function(){
	let scrolled, timer;
	let btn = document.querySelector('.button-top');

	btn.onclick = function(){
		scrolled = window.pageYOffset;
		
		scrollToTop();
	}
	function scrollToTop(){
		if (scrolled > 0) {
			window.scrollTo(0, scrolled);
			scrolled = scrolled - 50;
			timer = setTimeout(scrollToTop, 100);
		}
		else{
			clearTimeout(timer);
			window.scrollTo(0, 0);
		}
	}
}
*/
