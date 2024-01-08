function calculateFactorial(){
    if (factorialOp.value == "multiFac") {

    var factorial = 1;
    for (var i = 1; i <= numbe.value; i++) {
       factorial *= i;
    }
    display.innerHTML = `<p class="text-dark">The Factorial of ${numbe.value} is ${factorial}</p>`;
    numbe.value = "";
}
else if(factorialOp.value == "addFac"){
    var fact = 1;
    for (var j = 1; j <= numbe.value; j++) {
       fact += j;
    }
    display.innerHTML = `<p class="text-dark">The Factorial of ${numbe.value} is ${fact - 1}</p>`;
    numbe.value = "";
    
}
}
    
function multiTable() { 
    if (firstNum.value == "" && secondNum.value == "") {
       popOut.innerHTML = "The space can not be empty";                                                                                                                                                                                                                                                                                                   
    } else{
    for (let m = 1; m <= firstNum.value; m++) {
        for (let k = 1; k <= secondNum.value; k++){  
              if (operation.value == "multi"){    
                     popOut.innerHTML  += `<p>${m} x ${k} = ${m*k}</p>`;
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
        // document.getElementById("popOut").innerHTML = "";
    }
    firstNum.value = "";
    secondNum.value ="";
    operation.value ="";
    }
     
}
