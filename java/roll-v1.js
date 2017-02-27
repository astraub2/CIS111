 /* roll-v1.js
    uses a while loop
    uses $ shorthand selector
    uses pattern-1.js for client-side interaction
    Exercise-1: Use the roll counter
    Exercise-2: Use a do-while loop
*/

//1. define onclick handler
function RollUntilDoubles(){
    var roll1, roll2, rollCounter;

    //reset the outputDiv
    document.getElementById('outputDiv').innerHTML = "";

    //reset the rollCount
    rollCounter = 0;

    //first roll of the dice
    roll1 = RandomInt(1, 6);             
    roll2 = RandomInt(1, 6); 

    while(roll1 != roll2) {                	

        //display the roll
        $('outputDiv').innerHTML = 
        $('outputDiv').innerHTML + 
        roll1 + '-' + roll2 + '<br>';

        //next roll of the dice
        roll1 = RandomInt(1, 6);             
        roll2 = RandomInt(1, 6);   
 }

 $('outputDiv').innerHTML = $('outputDiv').innerHTML +  roll1 + '-' + roll2 + ' DOUBLES!';
}

//2. grab the button
 var button1 = document.getElementById("btn1");

//3. register the onclick handler
button1.onclick = RollUntilDoubles;
