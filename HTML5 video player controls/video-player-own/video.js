const videoO = document.querySelector('.video');
const juice = document.querySelector('.orange-juice');
const progressBar = document.getElementById('progress-bar');
const btn = document.getElementById('play-pause');
const muteBtn = document.getElementById('muteBtn');
const soundVolume = document.getElementById('soundVolume');
const currentTime = document.getElementById('currentTime');
const durTime = document.getElementById('durTime');
const spUp = document.getElementById('speedUp');
const spDown = document.getElementById('speedDown');
const fullScreenBtn = document.getElementById('fullScreenBtn');


/*
const changeNum = document.getElementById('changeNum');

function changeNumm(){

	console.log(changeNum.value);
}

changeNum.addEventListener('change', changeNumm);*/

/*const shadowPicture = videoO.querySelector('-webkit-media-controls');
let shadow = document.querySelector('video::shadow -webkit-media-controls');

console.log(shadowPicture);
console.log(shadow);*/


function togglePlayPause(){
	if(videoO.paused){
		btn.className= 'pause';
		videoO.play();
		videoO.playbackRate = 1;
	} else {
		btn.className = 'play';
		videoO.pause();
	}
}

btn.onclick = function(){
	togglePlayPause();
}

function timeUpdate(){
	let juicePos = videoO.currentTime / videoO.duration;
	juice.style.width = juicePos * 100 + '%';
	if(videoO.ended){
		btn.className = "play";
	}

	/*currentTime/durationTime*/
	let curMins = Math.floor(videoO.currentTime / 60);
	let curSecs = Math.floor(videoO.currentTime - curMins * 60);
	let durMins = Math.floor(videoO.duration / 60);
	let durSecs = Math.floor(videoO.duration - durMins * 60);
	//console.log(durSecs);
	if(curSecs < 10) {
		curSecs = "0" + curSecs;
	}
	if(durSecs < 10) {
		 durSecs = "0" + durSecs;
	}
	if(curMins < 10) {
		curMins = "0" + curMins;
	}
	if(durMins < 10) {
		durMins = "0" + durMins;
	}
	currentTime.innerHTML = curMins+":"+curSecs + " / ";
	durTime.innerHTML = durMins+":"+durSecs;
}

function videoMute(){
	if (videoO.muted){
		videoO.muted = false;
		muteBtn.innerHTML = "Mute";
	} else {
		videoO.muted = true;
		muteBtn.innerHTML = "Unmute";
	}
}

function setVolume(){
	/*console.log(soundVolume.value)*/
	let sound = soundVolume.value / 100;
	let setV = videoO.volume = sound;
	return setV;
}


function openFullscreen() {
	if (videoO.requestFullscreen) {
		videoO.requestFullscreen();
	} else if (videoO.webkitRequestFullscreen) {
		videoO.webkitRequestFullscreen();
	} else if (videoO.msRequestFullscreen) {
		videoO.msRequestFullscreen();
	}
}

function speedUp(){
	videoO.play();
	videoO.playbackRate = 2;
}
function speedDown(){
	videoO.play();
	videoO.playbackRate = 0.5;
}

function seek(e) {
	let percent = e.offsetX / this.offsetWidth;
	videoO.currentTime = percent * videoO.duration;
}

videoO.addEventListener('timeupdate', timeUpdate);
videoO.addEventListener('click', togglePlayPause);
muteBtn.addEventListener('click', videoMute);
soundVolume.addEventListener('change', setVolume);
spUp.addEventListener('click', speedUp);
spDown.addEventListener('click', speedDown);
fullScreenBtn.addEventListener('click', openFullscreen);
progressBar.addEventListener("click", seek, false);





/*
let block = document.getElementById('block-img_play');

block.addEventListener('click', ()=>{
	if (videoO.style.display === "none"){
		videoO.style.display = "block";

	} else {
		videoO.style.display = "none";
	}
	
})*/
