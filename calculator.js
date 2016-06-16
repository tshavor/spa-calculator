// CREATING SOME VARIABLES TO DETERMINE IF A SPECIFIC RADIO BUTTON IS CHECKED:



// ////////////////////////////////////////////////////////////////////////////


// Copy the code below an implement a basic calculator.
// When the user performs one of the operations, output the result to another DOM element of your choice.
// /*
//   Create a function that multiplies two numbers passed in as arguments. Return the product.
//  */



console.log("document", document.getElementById("doItNow"));
// // INPUT BUTTON:
document.getElementById("doItNow").addEventListener("click", getValues)

// Created the function "getValues".  Within the function, I defined 2 variables,
// num1 and num2.

// By targeting the Id numbers for the input values on the DOM, I applied the parseInt
// property to convert string values to numeric values.

function getValues (){
	var num1 = parseInt( document.getElementById("first").value );
	var num2 = parseInt( document.getElementById("second").value );

	
	// this line of code identifies the radio button element by its name (math-function)
	var radiobuttons= document.getElementsByName("math-function")
	// console.log (radiobuttons);

	// created a new variable (thingToDo).
	var thingToDo = null;
	
	// created a for loop that loops around the number of radio buttons.


	for (var i = 0; i < radiobuttons.length; i++) {
		// console.log("Is it checked?", radiobuttons[i].checked)
		// console.log("What's the value?", radiobuttons[i].value)

	// If a radio button is checked, it then feeds its value to the variable "thingToDo".
		if (radiobuttons[i].checked) {
			thingToDo=radiobuttons[i].value
		}
	}
// This part of the program creates a new variable called "answer".  It then uses if/else if logic
// to determine which math operation to apply to the 2 input numbers. 
	console.log(thingToDo);
	var answer = null;
	if (thingToDo === "Addition") {
		answer = add(num1, num2);
	} else if (thingToDo==="Subtraction"){
		answer = subtract (num1, num2)

	}else if (thingToDo==="Multiplication"){
		answer = multiply (num1, num2)
}

	else if (thingToDo==="Division"){
		answer = divide (num1, num2)
}

	console.log("TADA!", answer);	
	outputToDom(answer)
} 
// End of Function

// This final part of the program physically places the value of my calculation ("answer") in the DOM.

function outputToDom(whatToDisplay) {
	// (1)this is the old method of displaying things in the DOM (very unsafe due to the possibility of scripting atacks)
	// document.getElementById("display-output").innerHTML=whatToDisplay

	// (2)this is a better way of displaying things in the DOM
	// document.getElementById("display-output").insertAdjacentHTML("afterbegin", whatToDisplay)

	// (3) this is the BEST and SAFEST way to display things in the DOM!!!
	// created a variable called outputNode that creates an H1 element 
	var outputNode = document.createElement("h1");
	// created another variable called "outputText" that will be what I place in the h1 element.
	var outputText = document.createTextNode(whatToDisplay);

	// these last 2 lines then create and place the value of
	outputNode.appendChild(outputText);
	document.getElementById("display-output").appendChild(outputNode);
}

// Sub-functions go here...
function multiply (x,y){
  return x*y;
}
//   Create a function that adds two numbers passed in as arguments. Return the sum.
function add (x,y){
  return x+y;
}
//   Create a function that subtracts two numbers passed in as arguments. Return the difference.
function subtract (x,y){
  return x-y;
}
//   Create a function that divides two numbers passed in as arguments. Return the quotient.
function divide (x,y){
  return x/y;
}


// /*
//   Create a function that accepts three arguments.
//     1. First number
//     2. Second number
//     3. A function that performs an operation on them

//   Return the value of the operation.
//  */
// function calculate (first-number, second-number, function
//   )



