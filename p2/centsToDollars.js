 
"use strict";
 
function centsToDollars(){
	var resultStr=""
	var cents = document.getElementById('inputBox').value;
    var fcents=(cents%100);
	var dollars=((cents-fcents)/100);
	var resultStr=("$" +dollars+"."+fcents);
	document.getElementById('outputDiv').innerHTML = resultStr;
}
 
 
var button1 = document.getElementById("btn1");
 
button1.onclick = centsToDollars();