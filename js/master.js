/* project grammer/name reference:
 *
 * Activity === Project
 * make{$InsertNameHere}Buttons === give function to pre-existing buttons
 *
 * variable names match the html id/classes for the most part
*/
// global variable def
var count = 1;
var MAXPAGES = 5;
// scrolls to target as long as target is below the current position
// adjusts speed to make arival time the same no matter the target
// think I stole this code from stackoverflow, but I don't know for sure as it was a long time ago.
function smoothScroll(target) {
	var sc = target;
	var targetY = 0;
	do {
        	sc = sc.parentNode;
        	if (!sc) return;
        	sc.scrollTop += 1;
	} while(sc.scrollTop == 0);
	do {
        	if (target == sc) break;
        	targetY += target.offsetTop;
	} while(target = target.offsetParent);
	function scroll(c, a, b, i) {
		i++;
		if (i > 30) return;
        	c.scrollTop = a + (b - a) / 30 * i;
        	setTimeout(function(){ scroll(c, a, b, i); }, 30);
    	}
	scroll(sc, sc.scrollTop, targetY, 0));
}
// gives function to the front page naviagtion buttons
function createNavButtons() {
	var landingButtons = document.querySelectorAll("a");
	try {
		landingButtons[0].addEventListener("click", function(){
			smoothScroll(document.querySelector("#proj"));
		});
		landingButtons[1].addEventListener("click", function(){
			smoothScroll(document.querySelector("#team"));
		});
		landingButtons[2].addEventListener("click", function(){
			smoothScroll(document.querySelector("#bts"));
		});
	} catch(exception) {
		console.log(exception);
	}
}
function displayProject(element) {
	window.location.href = "pages/project" + element.id + ".html";
}
// gives function to the project summary buttons when clicked
function createProjectButtons() {
	var bubble = document.querySelectorAll(".bubble");
	for(var i=0; i<bubble.length; i++) {
		bubble[i].addEventListener("click", function(){
			displayProject(this);
		});
	}
}
function init(){
	createNavButtons();
	createProjectButtons();
}

init();
