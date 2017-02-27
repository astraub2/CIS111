name=prompt("Hello! Please enter your name:");

alert("Hello "+name);

var firstname=prompt("Hello! Please enter your first name:");
	var x=firstname.length
	alert("Hello "+firstname+".  "+
		"Your name is "+x+" characters long.");

var firstname=prompt("Hello! Please enter your first name:");
	var lastname=prompt("Please enter your last name");
	var x=firstname.length
	alert("Hello "+firstname+" "+lastname+". ")

var firstname=prompt("Hello! Please enter your first name:");
	var lastname=prompt("Please enter your last name:");
	x=firstname.length;
	y=lastname.length;
	z=x+y
	alert("Hello "+firstname+" "+lastname +" Your name is  "+ z + " characters long.");

var firstname=prompt("Hello! Please enter your first name:");
	var lastname=prompt("Please enter your last name:");
	alert("To italicize your name, use "+"<i>"+firstname+" "+lastname+"</i>"+" in your HTML5 Code!");

var a=prompt("Enter length of section a");
	var b=prompt("Enter length of section b");
	var c=prompt("Enter length of section c");
	var d=((a+b+c)/2);
	var x=(d*(a-d)*(b-d)*(c-d));
	var area=Math.sqrt(x);

	alert("The area of your triangle is: "+area);