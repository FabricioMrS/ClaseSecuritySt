"use strict";

function login(){

    let username = document.getElementById("username").value;
    let code = document.getElementById("code").value;

    let result = document.getElementById("result");

    if (username == "" || code == "" ){

        result.innerHTML = "ERROR: COMPLETE ALL FIELDS ";
    }
    else if (username == "ALPHA1" || code == "THUNTHUNSAHUR" ){

        result.innerHTML = "ACCESS GRANTED: LEVEL 1";
    }
    else if (username == "OMEGA33" || code == "123" ){

        result.innerHTML = "ACCESS GRANTED: LEVEL 2";
    }
    else if (username == "IZAN49" || code == "1234" ){

        result.innerHTML = "ACCESS GRANTED: LEVEL 3";
    }
    else{
        
        result.innerHTML = "ACCESS DENIED: INVALID CREDENTIALS";
    }



}