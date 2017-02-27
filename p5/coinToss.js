
function coinToss(n){
    var toss1;
    var toss2;
    var toss3;
    var tossCounter;
    var POS;

    var imgURL;
    //reset the outputDiv
    $('#outputDiv').html("")

    //reset the rollCount
    tossCounter = 0;
    
    do{ 

        toss1 = Math.floor((Math.random() * 3) + 2);             
        toss2 = Math.floor((Math.random() * 3) + 2); 
        toss3 = Math.floor((Math.random() * 3) + 2); //+ (Math.random(0,1)); 
        tossCounter++;
        }  
        while(toss1+toss2+toss3!=n);


    if(tossCounter==1)
        POS=" toss!";
    else
        POS=" tosses!";
    
    document.getElementById('outputDiv').innerHTML = "You hit your number in "+tossCounter+POS

   imgURL1="../images/dime" +toss1+".jpg";
   imgURL2="../images/dime" +toss2+".jpg";
   imgURL3="../images/dime" +toss3+".jpg";
}
//2. grab the button
 var button1 = document.getElementById("btn1");

//3. register the onclick handler

button1.onclick = function(){
    var n=document.getElementById('inputBox').value;
    if(n<=9&&n>=6)
        coinToss(n);
    else
        document.getElementById('outputDiv').innerHTML="Error on input "+n;


}