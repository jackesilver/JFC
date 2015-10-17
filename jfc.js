window.onload = function() {
var container = document.getElementById("container");
var row1 = document.createElement("div");
var row2 = document.createElement("div");
var row3 = document.createElement("div");
var row4 = document.createElement("div");
row1.setAttribute("class", "row");
row2.setAttribute("class", "row");
row3.setAttribute("class", "row");
row4.setAttribute("class", "row");
container.appendChild(row1);
container.appendChild(row2);
container.appendChild(row3);
container.appendChild(row4);
for (var i = 1; i <= 24; i++) {
	var element = document.createElement("div");
	element.setAttribute("class", "red2");
		if(i > 18) {
		row1.appendChild(element);	
		} else if(i > 12) {
		row2.appendChild(element);	
		} else if(i > 6) {
		row3.appendChild(element);	
		} else if(i > 0) {
			console.log("hi")
		row4.appendChild(element);
		}
};

	var redDiv = document.querySelector('.red2');
	console.log(redDiv);
	redDiv.addEventListener("click", gotClicked);
	function gotClicked() {
		var AAA = prompt("got clicked");
	}
 }