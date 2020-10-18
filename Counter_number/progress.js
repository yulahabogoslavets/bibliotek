function designProgress(time){
	let start = 0;
	let progressElement = document.getElementById('design-progress');
	let intervalId = setInterval(function(){
		if(start>75){
			clearInterval(intervalId);
		}else{
			progressElement.value = start;
		}
		start++;
	}, time);
}


designProgress(100);

function webProgress(time){
	let start = 0;
	let progressElement = document.getElementById('web-progress');
	let intervalId = setInterval(function(){
		if(start>90){
			clearInterval(intervalId);
		}else{
			progressElement.value = start;
		}
		start++;
	}, time);
}

webProgress(100);

function markProgress(time){
	let start = 0;
	let progressElement = document.getElementById('mark-progress');
	let intervalId = setInterval(function(){
		if(start>65){
			clearInterval(intervalId);
		}else{
			progressElement.value = start;
		}
		start++;
	}, time);
}

markProgress(100);