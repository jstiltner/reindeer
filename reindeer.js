var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeernames = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("reindeer");

/*
  YOUR ASSIGNMENT
  ----------------------------------------
  Loop through all the reindeer in the array, and add the 
  name of the reindeer to the single HTML <div> element provided.
  The name of the reindeer should be prepended with the corresponding
  color from the other array.
  
  For example:
    Blue Dasher
    Red Dancer
    etc..
*/

var numberOfReindeer = prompt("How many reindeer?")
var numberOfReindeer = parseInt(numberOfReindeer)
var coloredReindeer = [];
for (i = 0; i < numberOfReindeer; i++) {
coloredReindeer.push("<h1 style='color:" + colors[i]+ "''>" + " " + colors[i] + " " + reindeernames[i] + "</h1>")
}
  console.log(coloredReindeer);


hohohoElement.innerHTML = coloredReindeer;
