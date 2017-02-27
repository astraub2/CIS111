"use strict";

var ordForm=function(number)
{
number=number.toString();

var last=(number[number.length-2])+number[number.length-1];

if(last=="11")
	return(number+"th");
else if(last=="12")
	return(number+"th");
else if(last=="13")
	return(number+"th");
else
	last=number[number.length-1];
	switch(last)
	{	case "1":
			return(number+("st"));
		break;
	case "2":
			return(number+("nd"));
		break;
	case "3":
			return(number+("rd"));
		break;
	default:
			return(number+("th"));
		break;



}
}
//select the button
var button1 = document.getElementById("btn1");
 
//Problem: 
//  a function reference offers no way to pass an argument to the function.
//This won't work:
//button1.onclick = isEven;
 
//Solution: register onclick handler with a function literal
button1.onclick = function(){
	console.log('Calling ordForm');
	document.getElementById('outputDiv').innerHTML = 
	   ordForm(document.getElementById('inputBox').value);
};