"use strict";

var light = 'R';
var hummer = true;

//three way selection
if(light == 'R')
    console.log('Stop');
else if(light == 'Y')
    if(hummer == true)
        console.log('Proceed with caution');
    else
        console.log('Yield');
else if (light == "G")
    console.log('Go');
 else
 	console.log('Signal malfunction');
/* 
   exercise 1: rewrite using logical operators
*/
