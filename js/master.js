var header = document.querySelector("header");
var diyButton = document.querySelector("h1");
var count = 1;
var MAXPAGES = 5;

setInterval(function(){
	if(count < MAXPAGES) {
		header.style.backgroundImage = "url(pictures/background" + count + ".jpg)";
		count++;
	}
	else count = 0;
},5000);

diyButton.addEventListener("click",function(){
	alert("OUCH");
});
