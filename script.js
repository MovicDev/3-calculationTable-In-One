function calculateFactorial(){
    if (numbe.value == "") {
       display.innerHTML = "The space can not be empty";

    } 
    var factorial = 1;
    for (var i = 1; i <= numbe.value; i++) {
       factorial *= i;
    }
    display.innerHTML = `<p class="text-dark">The Factorial of ${numbe.value} is ${factorial}</p>`;
    numbe.value = "";
    
}
function calFactorial(){
    if (numb.value == "") {
       disp.innerHTML = "The space can not be empty";

    }
    var fact = 1;
    for (var j = 1; j <= numb.value; j++) {
       fact += j;
    }
    disp.innerHTML = `<p class="text-dark">The Factorial of ${numb.value} is ${fact - 1}</p>`;
    numb.value = "";
    
}
function multiTable() { 
    if (firstNum.value == "" && secondNum.value == "") {
       popOut.innerHTML = "The space can not be empty";                                                                                                                                                                                                                                                                                                   
    } else{
    for (let m = 1; m <= firstNum.value; m++) {
        for (let k = 1; k <= secondNum.value; k++){  


              if (operation.value == "multi"){    
                    popOut.innerHTML += `<p>${m} x ${k} = ${m*k}</p>`;
                } else if(operation.value  == "add"){
                    popOut.innerHTML += `<p>${m} + ${k} = ${m+k}</p>`;
                } else if(operation.value  == "sub"){
                    popOut.innerHTML += `<p>${m} -  ${k} = ${m-k}</p>`;
                } else if(operation.value  == "div"){
                    popOut.innerHTML += `<p>${m} ÷ ${k} = ${(m/k).toFixed(2)}</p>`;
                } else{
                    document.getElementById("popOut").innerHTML = "Invalid";
                } 
        }
        
    }
    firstNum.value = "";
    secondNum.value ="";
    operation.value ="";
    }
}