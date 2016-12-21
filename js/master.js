var header = document.querySelector("header");
var diyButton = document.querySelector("a");
var count = 1;
var MAXPAGES = 5;

header.style.backgroundImage = "url(BpaWebProject/pictures/background0.jpg";

// makes the text in the center of landing page, change the header image when clicked
diyButton.addEventListener("click", cycleHeaderImage);

function cycleHeaderImage(){
	if(count < MAXPAGES) {
		header.style.backgroundImage = "url(BpaWebProject/pictures/background" + count + ".jpg)";
		count++;
	}
	else count = 0;
}
