let buffer = "";
let operator;
let operand;
let total = 0;
let flag = 0;
let displayVal;

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
    buffer += value;
    display(buffer);
}

function determineOperator(value) {
    
    if (value === ".") {
        determineNumber(value);
    }

    else if (value === "=") {
        operand = Number(buffer);
        flag += 1;
        calculateValue(operator);
        buffer = total.toString();
        flag = 0;
    }

    else if (value === "←") {
        buffer = buffer.substring(0,buffer.length - 1);
        display(buffer);
    }

    else if (value === "C") {
        flag = 0;
        total = 0;
        buffer = "";
        displayVal = "0";
        display(displayVal);
    }

    else if (value == "±") {
        buffer = "-"
        display(buffer);
    }

    else {
        display(value);
        operand = Number(buffer);
        flag += 1;
        calculateValue(value);
        buffer = "";
    }
}

function calculateValue(value) {

    if (flag === 1) {
        total = operand;
    }
    
    else {
        
        if (operator === "+") {
            total += operand;
            display(total.toFixed(2));
        }

        if (operator === "-") {
            total -= operand;
            display(total.toFixed(2));
        }

        if (operator === "×") {
            total *= operand;
            display(total.toFixed(2));
        }

        if (operator === "÷") {
            total /= operand;
            display(total.toFixed(2));
        }
    }
    operator = value;
}

function display(displayVal) {
    const disp = document.querySelector('.display');
    disp.innerText = displayVal;
}