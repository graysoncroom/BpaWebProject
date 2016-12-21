var header = document.querySelector("header");
var landingButtons = document.querySelectorAll("a");
var count = 1;
var MAXPAGES = 5;

function smoothScrollToProject(){smoothScroll(document.querySelector("#proj"));}
function smoothScrollToTeam(){smoothScroll(document.querySelector("#team"));}
function smoothScrollToBts(){smoothScroll(document.querySelector("#bts"));}
function smoothScrollToLand(){smoothScroll(document.querySelector("header"));}

function smoothScroll(target){
	var scrollContainer = target;
	var targetY = 0;
    do {
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);
    do {
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);
    function scroll(c, a, b, i) {
        i++;
		if (i > 30)
			return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 30);
    }
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}

function init(){
	header.style.backgroundImage = "url(pictures/background0.jpg)";
	landingButtons[0].addEventListener("click", smoothScrollToProject);
	landingButtons[1].addEventListener("click", smoothScrollToTeam);
	landingButtons[2].addEventListener("click", smoothScrollToBts);
}

function cycleHeaderImage(){
	if(count < MAXPAGES) {
		header.style.backgroundImage = "url(pictures/background" + count + ".jpg)";
		count++;
	}
	else count = 0;
}

init();
