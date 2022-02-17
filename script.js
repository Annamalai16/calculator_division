let numerator = 0,denominator = 0;

function assignValue(val,position){
    if(position=="numerator"){
        numerator=numerator*10+val;
        document.getElementById(position).value = numerator;
    }
    else{
        denominator=denominator*10+val;
        document.getElementById(position).value = denominator;
    }
}

function clearLast(position){
    if(position=="numerator"){
        numerator=Math.floor(numerator/10);
        if(numerator==0){
            document.getElementById(position).value = '';
        }
        else{
            document.getElementById(position).value = numerator;
        }
    }
    else{
        denominator=Math.floor(denominator/10);
        if(denominator!=0){
            document.getElementById(position).value = denominator;
        }
        else{
            document.getElementById(position).value = '';    
        }
    }
}

function allClear(position){
    if(position=="numerator"){
        numerator = 0;
        document.getElementById(position).value = '';
    }
    else{
        denominator = 0;
        document.getElementById(position).value = '';
    }
}

function getQuotientRemainder(){
    if(numerator!=0 && denominator!=0){
        quotient = Math.floor(numerator/denominator);
        remainder = numerator%denominator;
        document.getElementById("resultValue").innerHTML="<div class=\"result-box\"><p>Quotient = "+ quotient +"<br><br> Remainder = "+ remainder +"</p><br><button onclick=\"reset()\" class=\"calculate-btn\">Reset</button></div>";
    }
    else if(numerator==0 && denominator==0){
        document.getElementById("resultValue").innerHTML="<div class=\"result-box\"><p>Enter value > 0 for numerator and denominator</p><br><button onclick=\"reset()\" class=\"calculate-btn\">Reset</button></div>";
    }
    else if(numerator==0){
        document.getElementById("resultValue").innerHTML="<div class=\"result-box\"><p>Enter value > 0 for numerator</p><br><button onclick=\"reset()\" class=\"calculate-btn\">Reset</button></div>";
    }
    else{
        document.getElementById("resultValue").innerHTML="<div class=\"result-box\"><p>Enter value > 0 for denominator</p><br><button onclick=\"reset()\" class=\"calculate-btn\">Reset</button></div>";
    }
}

function reset(){
    location.replace("index.html");
}