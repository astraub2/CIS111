
function RollNumber(number){
    var roll1=0;
    var roll2=0;

    //reset the outputDiv
    document.getElementById('outputDiv').innerHTML = "";

    //reset the rollCount
    rollCounter = 0;
    number=document.getElementById("inputBox").innerHTML;
    do{ 

        roll1 = Math.floor(Math.random()*6)+1;             
        roll2 = Math.floor(Math.random()*6)+1; 
        rollCounter=rollCounter+1;
        }  
        while(roll1+roll2!=number);


    if(rollCounter==1)
        instance="roll!";
    else
        instance="rolls!";
    
    $('outputDiv').innerHTML = $('outputDiv').innerHTML + "your number was rolled in"+rollCounter+instance;

    imgname1='http://balance3e.com/Images/die'+roll1+'.gif';
    document.getElementById('dieImg1').src=imgname1;
    imgname2='http://balance3e.com/Images/die'+roll2+'.gif';
    document.getElementById('dieImg2').src=imgname2;
}

//2. grab the button
 var button1 = document.getElementById("btn1");

//3. register the onclick handler

button1.onclick = function RollNumber(number){}