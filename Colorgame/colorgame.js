	var numSquares = 6;
	var colors =[];
	
	var pickedColor;
	var squares = document.querySelectorAll(".square");
	var colorDisplay = document.getElementById("colorDisplay");
	var  messageDisplay = document.querySelector("#message");
	var h1 = document.querySelector("h1");
	var resetButton = document.querySelector("#reset");
	// var easyBtn = document.querySelector("#easyBtn");
	// var hardBtn = document.querySelector("#hardBtn");
	var modeButtons = document.querySelectorAll(".mode");

	init();

	function init(){
		setupModeButtons();
		setupSquares();
		reset();
	}

	function setupSquares(){
		for(var i =0; i< squares.length; i++){
		//add initial colors to squares
		//squares[i].style.backgroundColor = colors[i]

		//add click listners to squares
		squares[i].addEventListener("click", function(){
			//grab the color of the clicked square
			var clickedColor = this.style.backgroundColor;
			//compare color to the picked color
			if(clickedColor === pickedColor){
				//alert("Correct!");
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = 'Play again?';
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			}
			else{
				//alert("Wrong!");
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try again!";
			}
		})
	}  
	}

	function setupModeButtons(){
		for(var i=0; i< modeButtons.length; i++){
			modeButtons[i].addEventListener("click", function(){
				//mode button event listeners
				for(var i =0;i<modeButtons.length;i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("slected"); 
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			// if(this.textContent === "Easy"){
			// 	numSquares = 3;
			// }
			// else{
			// 	numSquares = 6; 
			// }
			reset();
		})
	}
				 	 
			})
		}
	}
	

	// easyBtn.addEventListener("click", function(){
	// 	hardBtn.classList.remove("selected");
	// 	easyBtn.classList.add("selected");
	// 	numSquares = 3;
	// 	colors = generateRandomColors(numSquares);
	// 	pickedColor = pickColor();
	// 	colorDisplay.textContent = pickedColor;
	// 	for(var i=0; i<squares.length; i++){
	// 		if(colors[i]){
	// 			squares[i].style.backgroundColor = colors[i];
	// 		}
	// 		else{
	// 			squares[i].style.background = "none";
	// 		}
	// 	}
	// })

	// hardBtn.addEventListener("click", function(){
	// 	easyBtn.classList.remove("selected");
	// 	hardBtn.classList.add("selected");
	// 	colors = generateRandomColors(6);
	// 	pickedColor = pickColor();
	// 	colorDisplay.textContent = pickedColor;
	// 	for(var i=0;i < squares.length; i++){
	// 		squares[i].style.backgroundColor = colors[i];
	// 		squares[i].style.display = "block";
	// 	}
	// })

	function reset(){
			 colors = generateRandomColors(numSquares);
		 //pick a new random colorfrom an array
		 pickedColor = pickColor();
		 //change color display to match picked Color
		 colorDisplay.textContent = pickedColor;
		 messageDisplay.textContent = "";
		 this.textContent = "New colors"
		 //change color of squares
		 for(var i = 0; i<squares.length;i++){
		 	
		 	if(colors[i]){
		 	squares[i].style.display = "block";	
		 	squares[i].style.backgroundColor = colors[i];
		 	}
		 	else{
		 	squares[i].style.background = "none";	
		 	}  
		 }  
		 h1.style.backgroundColor = "steelblue";
	}

	resetButton.addEventListener("click", function(){
		reset();
		 //generate all new colors
		//  colors = generateRandomColors(numSquares);
		//  //pick a new random colorfrom an array
		//  pickedColor = pickColor();
		//  //change color display to match picked Color
		//  colorDisplay.textContent = pickedColor;
		//  messageDisplay.textContent = "";
		//  this.textContent = "New colors"
		//  //change color of squares
		//  for(var i = 0; i< squares.length;i++){
		//  squares[i].style.backgroundColor = colors[i];
		//  h1.style.backgroundColor = "steelblue";
		// }
	})

	colorDisplay.textContent = pickedColor;

	

	function changeColors(color){
		for(var i=0; i< numSquares; i++){
			squares[i].style.backgroundColor = color;
		}
	}

	function pickColor(){
		var random = Math.floor(Math.random() * colors.length);
		return colors[random];
	}
	function generateRandomColors(num){
		//make an array
		var arr = [];
		//add num random colors to array
		for(var i=0; i< num; i++){
			//get random color and push
			arr.push(randomColor())
		}
		//return that array
		return arr;
	}

	function randomColor(){
		//pick a "green" from 0-255
		var g = Math.floor(Math.random() * 256);
		//pick a "red" from 0-255
		var r = Math.floor(Math.random() * 256);
		//pick a "blue" from 0-255
		var b = Math.floor(Math.random() * 256);
		return "rgb(" + r + ", " + g + ", " + b + ")";
	}