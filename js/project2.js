(function init() {
	function changeImage(button, pictureFrame){
		var pictureName = button.id
		pictureFrame.style.backgroundImage = 'url(../media/pictures/' + pictureName + '.jpg)';
		if(pictureName == 'specificPicName'){
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
	function smoothScroll(target){
		var sc = target;
		var targetY = 0;
		do {
	        sc = sc.parentNode;
	        if (!sc) return;
	        sc.scrollTop += 1;
	    } while (sc.scrollTop == 0);
		do {
	        if (target == sc) break;
	        targetY += target.offsetTop;
	    } while (target = target.offsetParent);
		function scroll(c, a, b, i) {
	        i++;
			if (i > 30) return;
	        c.scrollTop = a + (b - a) / 30 * i;
	        setTimeout(function(){ scroll(c, a, b, i); }, 30);
	    }
	    scroll(sc, sc.scrollTop, targetY, 0);
	}
	function createSlider(){
		var listSlider = document.querySelector('#listSlider');
		var listItems = document.querySelectorAll('li');
		//change the link below to match the name of the first item in the list
		listSlider.style.backgroundImage = 'url(../media/pictures/NAMEOFTHEFIRSTITEMGOESHERE.jpg)';
		for(var i=0; i<listItems.length;i++){
			listItems[i].addEventListener('mouseover',function(){
				changeImage(this,listSlider);
			});}}
	function nextStep1(){
		var currentStepNumber = document.querySelector('#stepNum1').textContent;
		var backButton = document.querySelector('#back1');
		var nextButton = document.querySelector('#next1');
		//number of steps for the first slide
		var lastStepNumber = 3;
		backButton.addEventListener('click',function(){
			if(currentStepNumber == 1){
				currentStepNumber = lastStepNumber;
			} else currentStepNumber--;
			replaceTextContent1(currentStepNumber);
			document.querySelector('#stepNum1').textContent = currentStepNumber;
			var imageUrl = "url(../media/pictures/skateboard1" + currentStepNumber + ".jpg)";
			document.querySelector("#listSlider1").style.backgroundImage = imageUrl;
		});
		nextButton.addEventListener('click', function(){
			if(currentStepNumber == lastStepNumber){
				currentStepNumber = 1;
			} else currentStepNumber++;
			replaceTextContent1(currentStepNumber);
			document.querySelector('#stepNum1').textContent = currentStepNumber;
			var imageUrl = "url(../media/pictures/skateboard1" + currentStepNumber + ".jpg)";
			document.querySelector("#listSlider1").style.backgroundImage = imageUrl;
		});
	}
	function nextStep2(){
		var currentStepNumber = document.querySelector('#stepNum2').textContent;
		var backButton = document.querySelector('#back2');
		var nextButton = document.querySelector('#next2');
		//number of steps for the second slide
		var lastStepNumber = 5;
		backButton.addEventListener('click',function(){
			if(currentStepNumber == 1){
				currentStepNumber = lastStepNumber;
			} else currentStepNumber--;
			replaceTextContent2(currentStepNumber);
			document.querySelector('#stepNum2').textContent = currentStepNumber;
			var imageUrl = "url(../media/pictures/skateboard2" + currentStepNumber + ".jpg)";
			document.querySelector("#listSlider2").style.backgroundImage = imageUrl;
		});
		nextButton.addEventListener('click', function(){
			if(currentStepNumber == lastStepNumber){
				currentStepNumber = 1;
			} else currentStepNumber++;
			replaceTextContent2(currentStepNumber);
			document.querySelector('#stepNum2').textContent = currentStepNumber;
			var imageUrl = "url(../media/pictures/skateboard2" + currentStepNumber + ".jpg)";
			document.querySelector("#listSlider2").style.backgroundImage = imageUrl;
		});
	}
	function createNavBtn(){
		var navButtons = document.querySelectorAll(".headbtn");
		navButtons[0].addEventListener('click',function(){
			smoothScroll(document.querySelector("#desc"));
		});
		navButtons[1].addEventListener('click',function(){
			smoothScroll(document.querySelector("#prereq"));
		});
		navButtons[2].addEventListener('click',function(){
			smoothScroll(document.querySelector("#set"));
		});
		navButtons[3].addEventListener('click',function(){
			smoothScroll(document.querySelector("#build"));
		});
		navButtons[4].addEventListener('click',function(){
			smoothScrool(document.querySelector("#con"))
		});
	}
	createSlider();
	nextStep1();
	nextStep2();
	createNavBtn();
})();
