//******** Start of count to 10 PROBLEM**********	
function count()
{
	x=0;
	out="";
	while(x<10)
	{
	x=x+1;
	out=out+x+" ";
	}
	alert(out);
//******** Start of count from 10 PROBLEM**********	
}
function count()
{
	out="";
	for(x=10; x>0; x=x-1)
	{
	out=out+x+" ";
	}
	alert(out);
//******** Start of while countRange PROBLEM**********
function multiples()
{	x=0;
	y=0;
	out3="";
	out5="";
	while(x<99)
	{
	x=x+3;
	out3=out3+x+" ";
	}
	
	while(y<95)
	{
	y=y+5
	out5=out5+y+" ";
	}

return(out3+out5)
} 
//******** Start of for loop multiples PROBLEM**********
function multiples()
{
	out3=" ";
	out5=" ";
	for(x=3; x<100; x=x+3){
		out3=out3+x+" ";
	}
	for(y=5; y<100; y=y+5){
		out5=out5+y+" ";
	}
return(out3+out5);
}
multiples()
//******** Start of countRange PROBLEM**********
function countRange(start, end)
{
out="";
for(x=start; x<end+1; x=x+1)
{
out=out+x+" ";

}
return(out);
}
//******** Start of countRange2 PROBLEM**********
function countRange2(start,end)
{out="";
if(end>start)
	
	for(x=start; x<end+1; x=x+1)
	{
	out=out+x+" ";

	}
else
	for(y=start; y>end-1; y=y-1)
	{
	out=out+y+" ";

	}
return(out);

}

function wordRep(word){
out=word;
y=word.length;
for(x=0; x<y-1; x=x+1)
{out=out+" "+word;
}

return(out);


}
//*******START OF ordinalRange PROBLEM*************
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
function ordinalRange(start,finish){
out="";
for(x=start; x<finish+1; x=x+1)
{
out=out+ordForm(x)+" ";

}

return(out);



}
//*******START OF sumofSquares PROBLEM*************
function sumofSquares(n)
{
x=1;
out=0;

while(x<n+1)
{
out=out+x*x;
x=x+1;
}
return(out);


}

//*******START OF pow PROBLEM*************
function pow(x,y)
{
tic=1;
out=0;
while(tic<y)
{	out=out+x*x;
tic=tic+1;
}
return(out)
}