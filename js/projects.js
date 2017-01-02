(function init() {
	function changeImage(button, pictureFrame){
		var pictureName = button.id
		pictureFrame.style.backgroundImage = 'url(../media/pictures/' + pictureName + '.jpg)';
		if(pictureName == 'hdrive'){
			pictureFrame.style.backgroundPosition = 'right';
		} else pictureFrame.style.backgroundPosition = 'center';
	}
	function replaceTextContent1(number){
		var x = '#step1' + number;
		var step = document.querySelector(x);
		var allSteps = document.querySelectorAll('.steps1');
		for(var i = 0; i<allSteps.length; i++){
			allSteps[i].style.display = 'none';
		}
		step.style.display = 'block';
	}
	function replaceTextContent2(number){
		var x = '#step2' + number;
		var step = document.querySelector(x);
		var allSteps = document.querySelectorAll('.steps2');
		for(var i = 0; i<allSteps.length; i++){
			allSteps[i].style.display = 'none';
		}
		step.style.display = 'block';
	}
	function createSlider(){
		var listSlider = document.querySelector('#listSlider');
		var listItems = document.querySelectorAll('li');
		listSlider.style.backgroundImage = 'url(../media/pictures/case.jpg)';
		for(var i=0; i<listItems.length;i++){
			listItems[i].addEventListener('mouseover',function(){
				changeImage(this,listSlider);
			});}}
	function nextStep1(){
		var currentStepNumber = document.querySelector('#stepNum1').textContent;
		var backButton = document.querySelector('#back1');
		var nextButton = document.querySelector('#next1');
		var lastStepNumber = 3;
		backButton.addEventListener('click',function(){
			if(currentStepNumber == 1){
				currentStepNumber = lastStepNumber;
			} else currentStepNumber--;
			replaceTextContent1(currentStepNumber);
			document.querySelector('#stepNum1').textContent = currentStepNumber;
			var imageUrl = "url(../media/pictures/computer1" + currentStepNumber + ".jpg)";
			document.querySelector("#listSlider1").style.backgroundImage = imageUrl;
		});
		nextButton.addEventListener('click', function(){
			if(currentStepNumber == lastStepNumber){
				currentStepNumber = 1;
			} else currentStepNumber++;
			replaceTextContent1(currentStepNumber);
			document.querySelector('#stepNum1').textContent = currentStepNumber;
			var imageUrl = "url(../media/pictures/computer1" + currentStepNumber + ".jpg)";
			document.querySelector("#listSlider1").style.backgroundImage = imageUrl;
		});
	}
	function nextStep2(){
		var currentStepNumber = document.querySelector('#stepNum2').textContent;
		var backButton = document.querySelector('#back2');
		var nextButton = document.querySelector('#next2');
		var lastStepNumber = 5;
		backButton.addEventListener('click',function(){
			if(currentStepNumber == 1){
				currentStepNumber = lastStepNumber;
			} else currentStepNumber--;
			replaceTextContent2(currentStepNumber);
			document.querySelector('#stepNum2').textContent = currentStepNumber;
			var imageUrl = "url(../media/pictures/computer2" + currentStepNumber + ".jpg)";
			document.querySelector("#listSlider2").style.backgroundImage = imageUrl;
		});
		nextButton.addEventListener('click', function(){
			if(currentStepNumber == lastStepNumber){
				currentStepNumber = 1;
			} else currentStepNumber++;
			replaceTextContent2(currentStepNumber);
			document.querySelector('#stepNum2').textContent = currentStepNumber;
			var imageUrl = "url(../media/pictures/computer2" + currentStepNumber + ".jpg)";
			document.querySelector("#listSlider2").style.backgroundImage = imageUrl;
		});
	}
	createSlider();
	nextStep1();
	nextStep2();
})();
