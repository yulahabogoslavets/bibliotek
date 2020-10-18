let popup = document.getElementById('popup'),
	popupToggle = document.getElementById('popup-Btn'),
	popupClose = document.querySelector('.close');

popupToggle.onclick = function(){
	popup.style.display = "block";
};

popupClose.onclick = function(){
	popup.style.display = "none";
};

window.onclick = function (event) {
	if(event.target == popup) {
		popup.style.display = "none";
	}
}