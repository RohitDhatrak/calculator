let total;
let inputNum = 0;
let inputOperator

window.onload = function(){
    const inpVal = document.querySelector(".buttons").addEventListener("click",function(event) {
        determineInput(event.target.innerText);
    });
}

function determineInput(value) {
    if (isNaN(parseInt(value))) {
        determineOperator(value);
    }
    else {
        determineNumber(value);
    }
}

function determineNumber(value) {
    value = parseInt(value);
    inputNum = value;
    console.log(inputNum);
}