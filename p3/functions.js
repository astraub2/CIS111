"use strict";

var tLightAdvisor = function(light) {
	light=light.toUpperCase();

	if(light == 'R')
	    return('Stop');
	else if(light == 'Y')
	    return('Proceed with caution');
	else if(light =="G")
	    return('Go');
	else 
		return("Signal broken!");}

var color=prompt("Enter Light Color")
tLightAdvisor(color);

"use strict";

var maxOf2 = function(xy) {
x=xy[0];
y=xy[1];
if (x>y)
	return(x);
if (y>x)
    return(y);
}

var isDigit= function(input){
if(!isNaN(input))
	return("True");
else
	return("False");
}

var IPA=function(letter)
{
switch(letter)
	{
		case "A":
			return("Alpha");
		break;
		case "B":
			return("Bravo");
		break;
		case "C":
			return("Charlie");
		break;
		default:
			return("illegal input: "+letter);
		break;
			}
}
