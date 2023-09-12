$( document ).ready(function() {
	
function nav(){
	
	$('.nav-toggle').click(function(){
		
		$('.nav').toggleClass('open');
		
	});
	
}

nav();

});

var image = $(".active img");
var imageArray = [];
var index = 0;


image.each(function () {    
	imageArray.push($(this).attr("src"));
}); 

function next(){
	index=index+1;
	if(index > imageArray.length-1){
		index=0;
	}
	affiche();
}

function previous(){
	index=index-1;
	if(index <0){
		index=imageArray.length-1;
	}
	affiche();
}

function affiche(){
	$(".active img").attr("src",imageArray[index]);
}


var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);