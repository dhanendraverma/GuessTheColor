
var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

for (var i = modeButtons.length - 1; i >= 0; i--) {
	modeButtons[i].addEventListener("click",function(){
		modeButtons[0].classList.remove("selected")
		modeButtons[1].classList.remove("selected")
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares=3 : numSquares=6;
		// if(this.textContent === "Easy"){
		// 	numSquares = 3;
		// } else{
		// 	numSquares = 6;
		// }
		reset();
	});
}

function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	resetButton.textContent = "New colors";
	for(var i=0; i<squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else{
			squares[i].style.display = "none";
		}

	}
	h1.style.backgroundColor = "steelblue";
}

// easyBtn.addEventListener("click", function(){
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i=0; i<squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		}
// 		else{
// 			squares[i].style.display = "none";
// 		}
// 	}
// })

// hardBtn.addEventListener("click", function(){
// 	easyBtn.classList.remove("selected");
// 	hardBtn.classList.add("selected");
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i=0; i<squares.length; i++){
// 		squares[i].style.backgroundColor = colors[i];
// 		squares[i].style.display = "block";
// 	}
// })


resetButton.addEventListener("click",function(){
	reset();
})
colorDisplay.textContent = pickedColor;

for(var i=0; i<squares.length; i++) {
		// console.log(squares[i]);
		//add intial colors
	squares[i].style.backgroundColor = colors[i];

	//add event listner
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor) {
			resetButton.textContent = "Play Again!"
			messageDisplay.textContent = "Correct!";
			changeColor(clickedColor);
			h1.style.backgroundColor = clickedColor;

		}
		else{
			this.style.backgroundColor = "#232323";
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