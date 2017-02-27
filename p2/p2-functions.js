 function greetUser(){
name=prompt("Hello! What is your name?");
alert("Hello "+name);
}

function tagUser(){
	tag=prompt("Hello, what is your name?");
	alert("<pre>"+tag+"</pre>");
}

function AOT(){
var a=prompt("What is the value of side a?");
var b=prompt("What is the value of side b?");
var c=prompt("What is the value of side c?");
var d=((a+b+c)/2);
x=((d*(a-d)*(b-d)*(c-d)));
area=math.sqrt(x);
alert("The Area of the triangle is "+area);
}

function centsToDollars(){
	var cents=prompt("How much change is there?");
	dollars=(cents/100);
	fcents=(cents(100*dollars));

}