let buffer = "0";
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
    display(buffer);                    // display function
}

function determineOperator(value) {
    
    if (value === ".") {
        determineNumber(value);
    }

    else if (value === "=") {
        operand = Number(buffer);
        flag += 1;
        calculateValue(operator);
        buffer = 0;
        operand = total;                              // fix needed
    }

    else if (value === "←") {
    }

    else if (value === "C") {
        flag = 0;
        total = 0;
        buffer = "0";
        displayVal = "0";                                  // display reset
        display(displayVal);
    }

    else {
        display(value);
        operand = Number(buffer);
        flag += 1;
        calculateValue(value);
        buffer = "0";
    }
}

function calculateValue(value) {

    if (flag === 1) {
        total = operand;
        console.log("if",total);                          //
    }
    
    else {
        
        if (operator === "+") {
            total += operand;
            display(total);
            console.log("ans(+): ", total);                     // replace with display function
        }

        if (operator === "-") {
            total -= operand;
            display(total);
            console.log("ans(-): ", total);                     // replace with display function
        }

        if (operator === "×") {
            total *= operand;
            display(total);
            console.log("ans(x): ", total);                     // replace with display function
        }

        if (operator === "÷") {
            total /= operand;
            display(total);
            console.log("ans(/): ", total);                     // replace with display function
        }
    }
    operator = value;
}

function display(displayVal) {
    const disp = document.querySelector('.display');
    disp.innerText = displayVal;

}