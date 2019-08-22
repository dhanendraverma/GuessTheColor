
var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
colorDisplay.textContent = pickedColor;

for(var i=0; i<squares.length; i++) {
		// console.log(squares[i]);
		//add intial colors
	squares[i].style.backgroundColor = colors[i];

	//add event listner
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor) {
			alert("corre");
			messageDisplay.textContent = "Correct!";
			changeColor(clickedColor);

		}
		else{
			this.style.backgroundColor = "#232323";
			alert("wrong");
			messageDisplay.textContent = "Try Again";
		}
	})
}


function changeColor(color){
	//loop through all squares
	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}


function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(nums){
	var arr = [];
	for(var i=0; i<nums; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb("+ r + ", " + g + ", " + b +")";
}