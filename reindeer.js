var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("reindeer");

for(i=0;i < reindeer.length;i += 1){

const currentColor = colors[i];
const currentReindeer = reindeer[i];


hohohoElement.innerHTML += currentColor;
hohohoElement.innerHTML += " ";
hohohoElement.innerHTML += currentReindeer;
hohohoElement.innerHTML += "<br>";


}


