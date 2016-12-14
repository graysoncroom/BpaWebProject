var buttons = document.querySelectorAll(".box");

// >>>>>>>>>
for(var i = 0; i < buttons.length; i++){
	buttons[i].addEventListener("click", function(){
		window.location = "/pages/" + findPage(this) + ".html";
	});
}
makePageTitle();
// <<<<<<<<<

// give it a specific element and it will return "project" with the id of that element on the end
// example: "project1" is returned to me if I called this findPage(element[0]); when the element[0] had a single id named "1"
function findPage(item){
	var pageNum = item.id;
	return "project" + pageNum;
}

// will give the every h1 element on the current page have a name that is the same as the title, and it will give these h1's an id of "title-drop"
function makePageTitle(){
	var title = document.querySelector("h1");
	title.textContent = document.title;
	if(title.id != "jumboh1") title.setAttribute("id", "title-drop");
}

// notes to myself
// var page = window.open("../pages/" + 25 + ".html");
// page.document.write("<html><head><title>"+ findPage(this) +"</title></head><body><h1>hi</h1></body></html>");
