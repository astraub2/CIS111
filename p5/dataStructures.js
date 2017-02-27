
function arrAvg(array) {
  for (
    var
      index = 0,              
      length = array.length,
      sum = 0;  
      index < length;
      sum += array[index++]
  );
 var avg = sum/array.length;
return avg;
}

function oneCharPerLine(array){
	char= array.toString;
	out=0;
	for (
    var 
      index=0,           
      length = char.length;
      index < length;
      out += char[i++]+"/n"

  )

	return out;

}

}


var ltrTONATO=function(ltr)
{
switch(ltr)
{
default:
out= ltr;
break;

case "a":
case "A":
out="Alpha";
break;

case "b":
case "B":
out="Bravo";
break;

case "c":
case "C":
out="Charlie";
break;

case "d":
case "D":
out="Delta";
break;

case "e":
case "E":
out="Echo";
break;

case "f":
case "F":
out="Foxtrot";
break;

case "g":
case "G":
out="Golf";
break;

case "h":
case "H":
out="Hotel";
break;

case "j":
case "J":
out="Juliett";
break;

case "k":
case "K":
out="Kilo";
break;

case "l":
case "L":
out="Lima";
break;
case "m":
case "M":
out="Mike";
break;

case "o":
case "O":
out="Oscar";
break;

case "p":
case "P":
out="Papa";
break;

case "Q":
case "q":
out="Quebec";
break;

case "r":
case "R":
out="Romeo";
break;

case "S":
case "s":
out="Sierra";
break;

case "t":
case "T":
out="Tango";
break;

case "u":
case "U":
out="Uniform";
break;

case "V":
case "v":
out="Victor";
break;

case "w":
case "W":
out="Whiskey";
break;

case "x":
case "X":
out="Xray";
break;

case "y":
case "Y":
out="Yankee";
break;

case "z":
case "Z":
out="Zulu";
break;

case "1":

out="One";
break;

case "2":
out="Two";
break;

case "3":
out="Three";
break;

case "4":

out="Four";
break;

case "5":

out="Five";
break;

case "6":
out="Six";
break;

case "7":

out="Seven";
break;

case "8":

out="Eight";
break;

case "9":

out="Niner";
break;

}

return out;



}



var wordToNato=function(w)
{
var result="";
var arr=w.split('');

for(var i=0; i<arr.length; ++i)
		result=result+ltrTONATO(w[i])+" ";
	
	return result;
}

//This program also works for phrases, I included a
//default in my ltrTONATO code, that accepts and
//returns symbols.
var wordToNato2=function(w)
{
var result="";
var arr=w.split('');

for(var i=0; i<arr.length; ++i)
		result=result+ltrTONATO(w[i])+" ";
	
	return result;
}

