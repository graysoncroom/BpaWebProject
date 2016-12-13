var jumbo = $("body");
setInterval( function(){
	jumbo[0].background.color = makeColor();
}, 1000);

function makeColor(){
	var r = Math.random() * 254
	var g = Math.random() * 254
	var b = Math.random() * 254
	return "rgb( " + r + ", " + g + ", " + b + " )";
}
