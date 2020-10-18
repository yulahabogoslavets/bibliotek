window.onload = function(){
	document.querySelector('.tabs-header').addEventListener('click', fTabs);

	function fTabs(event){
		console.log(event);
		if (event.target.className == 'tab-h')
		//console.log(event.target.getAttribute('data-tab'));
		// dataTab - nomer vkladki kotoroynyschno otobrazit
		var dataTab = event.target.getAttribute('data-tab');
		//otklychay klass active
		var tabH = document.getElementsByClassName('tab-h');
		for(var i=0; i<tabH.length; i++){
			tabH[i].classList.remove('active');
		}
		event.target.classList.add('active');

		//vse vkladki s soderschimim
		var tabBody = document.getElementsByClassName('tab-b');
		for (var i=0; i < tabBody.length; i++){
			if (dataTab==i){
				tabBody[i].style.display = 'block';
			}
			else{
				tabBody[i].style.display = 'none';
			}
		}
	}
}