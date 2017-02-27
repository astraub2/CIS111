//basic selection statements

"use strict";

var light = 'R';

//one way selection
if(light == 'R')
    console.log('Stop');
    
//two way selection
if(light == 'R')
    console.log('Stop');
else
    console.log('Go');
    
//three way selection
if(light == 'R')
    console.log('Stop');
else if(light == 'Y')
    console.log('Proceed with caution');
else
    console.log('Go');
    
/* 
   exercise 1: modify to use a prompt to read the light
   exercise 2: modify ex. 1 to accept both upper and lower case letters
   exercise 3: write a function named tLightAdvisor that works like this:
       tLightAdvisor('G') => 'Go' 
       tLightAdvisor('r') => 'Stop'
   exercise 4: write a function named maxOf2 that works like this:
       maxOfTwo(2, 3) => 3
       maxOfTwo(7, 4) => 7
       //do not use Math.max() in the above.
   exercise 5: write a function named waterState that works like this:
       waterState(30) => 'solid'
       waterState(55) => 'liquid'
       waterState(112) => 'gas'
*/ 