button1.onclick = function(){
    var n = $('inputBox').value;
    if((n >= 2) && (n <= 12)) 
        rollNumber(n);
    else
        $('outputDiv').innerHTML =  'Error on input: ' +  n;
}