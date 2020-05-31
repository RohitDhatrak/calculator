let buffer = "";
let operator;
let operand;
let total = 0;
let counter = 0;

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

    else if (value === "←") {
        buffer = buffer.substring(0,buffer.length - 1);
        display(buffer);
    }

    else if (value == "±") {
        buffer = "-";
        display(buffer);
    }

    else if (value === "C") {
        counter = 0;
        total = 0;
        buffer = "";
        display(total);
    }

    else if (value === "=") {
        operand = Number(buffer);
        counter += 1;
        calculateValue(operator);
        buffer = total.toString();    // to be able to continue operating on the answer
        counter = 0;
    }

    else {
        display(value);
        operand = Number(buffer);    // after getting a operator we know that input is complete 
        counter += 1;
        calculateValue(value);
        buffer = "";
    }
}

function calculateValue(value) {

    if (counter === 1) {
        total = operand;
    }
    
    else {
        
        if (operator === "+") {
            total += operand;
            if (total % 1 === 0) {          // to check for the presence of decimal
                display(total);    
            }
            else {
                display(total.toFixed(2));
            }
        }

        if (operator === "-") {
            total -= operand;
            if (total % 1 === 0) {
                display(total);    
            }
            else {
                display(total.toFixed(2));
            }
        }

        if (operator === "×") {
            total *= operand;
            if (total % 1 === 0) {
                display(total);    
            }
            else {
                display(total.toFixed(2));
            }
        }

        if (operator === "÷") {
            total /= operand;
            if (total % 1 === 0) {
                display(total);    
            }
            else {
                display(total.toFixed(2));
            }
        }
    }
    operator = value;
}

function display(displayVal) {
    const disp = document.querySelector('.display');
    disp.innerText = displayVal;
}