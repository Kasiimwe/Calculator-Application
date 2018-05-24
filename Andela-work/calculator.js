//add function
function addMyCalc(){
	var num1 = document.getElementById("number1").value;
	var num2 = document.getElementById("number2").value;
	
	var sum = parseFloat(num1) + parseFloat(num2);
	document.getElementById("sum").value = sum;
	document.getElementById("number3").value = sum;
}
//subtract function
function subtractMyCalc(){
	var num3 = document.getElementById("number3").value;
	var num4 = document.getElementById("number4").value;
	
	var difference = parseFloat(num3) - parseFloat(num4);
	document.getElementById("difference").value = difference;
	document.getElementById("number5").value = difference;
}
//multiply function
function multiplyMyCalc(){
	var num5 = document.getElementById("number5").value;
	var num6 = document.getElementById("number6").value;
	
	var product = parseFloat(num5) * parseFloat(num6);
	document.getElementById("product").value = product;
	document.getElementById("number7").value = product;
}
//divide function
function divideMyCalc(){
	var num7 = document.getElementById("number7").value;
	var num8 = document.getElementById("number8").value;
	
	if(num8 != 0){
		var quotient = parseFloat(num7) / parseFloat(num8);
		document.getElementById("quotient").value = quotient;
	}
	else{
		alert("Zero Division Error: The answer is infinity");
	}
	
}


