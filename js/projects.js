(function init() {
	var imageSlider = {
		whichImage: function(li){return li.id;},

		changeImage: function(button, pictureFrame){
			pictureFrame.style.backgroundImage = "url(../media/pictures/" + this.whichImage(button) + ".jpg)";
			if(this.whichImage(button) == "hdrive")
				this.setImagePlacement(pictureFrame, "right");
			else this.setImagePlacement(pictureFrame, "center");
		},

		setImagePlacement: function(picture, pos){
			picture.style.backgroundPosition = pos;
		}
	}


	function makeSlider(){
		var listSlider = document.querySelector("#listSlider");
		var lis = document.querySelectorAll("li");

		for(var i=0; i<lis.length;i++){
			lis[i].addEventListener("mouseover",function(){
				imageSlider.changeImage(this,listSlider);
			});
			lis[i].addEventListener("mouseout",function(){
				listSlider.style.backgroundImage = "";
			});
		}
	}

	makeSlider();
})();
