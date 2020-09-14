let buffer = "";
let operator;
let operand;
let total = 0;
let counter = 0;

const backSpace = document
    .querySelector(".back-button")
    .addEventListener("click", function () {
        determineInput("←");
    });

const plusMinus = document
    .querySelector(".sign-button")
    .addEventListener("click", function () {
        determineInput("±");
    });

const divide = document
    .querySelector(".divide")
    .addEventListener("click", function (event) {
        determineInput(event.target.innerText);
    });

const acButton = document
    .querySelector(".AC-button")
    .addEventListener("click", function (event) {
        determineInput(event.target.innerText);
    });

const inpVal = document
    .querySelector(".buttons")
    .addEventListener("click", function (event) {
        determineInput(event.target.innerText);
    });

function determineInput(value) {
    if (isNaN(parseInt(value))) {
        determineOperator(value);
    } else {
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
    } else if (value === "←") {
        buffer = buffer.substring(0, buffer.length - 1);
        display(buffer);
    } else if (value == "±") {
        buffer = "-";
        display(buffer);
    } else if (value === "AC") {
        counter = 0;
        total = 0;
        buffer = "";
        display(total);
    } else if (value === "=") {
        operand = Number(buffer);
        counter += 1;
        calculateValue(operator);
        buffer = total.toString(); // to be able to continue operating on the answer
        counter = 0;
    } else {
        display(value);
        operand = Number(buffer); // after getting a operator we know that input is complete
        counter += 1;
        calculateValue(value);
        buffer = "";
    }
}

function calculateValue(value) {
    if (counter === 1) {
        // i.e it is the first operand
        total = operand;
    } else {
        if (operator === "+") {
            total += operand;
            if (total % 1 === 0) {
                // to check for the presence of decimal
                display(total);
            } else {
                display(total.toFixed(2));
            }
        }

        if (operator === "-") {
            total -= operand;
            if (total % 1 === 0) {
                display(total);
            } else {
                display(total.toFixed(2));
            }
        }

        if (operator === "×") {
            total *= operand;
            if (total % 1 === 0) {
                display(total);
            } else {
                display(total.toFixed(2));
            }
        }

        if (operator === "÷") {
            total /= operand;
            if (total % 1 === 0) {
                display(total);
            } else {
                display(total.toFixed(2));
            }
        }
    }
    operator = value;
}

function display(displayVal) {
    const disp = document.querySelector(".display");
    disp.innerText = displayVal;
}

// function  for tab highlight
(function (d) {
    var style_element = d.createElement("STYLE"),
        dom_events = "addEventListener" in d,
        add_event_listener = function (type, callback) {
            // Basic cross-browser event handling
            if (dom_events) {
                d.addEventListener(type, callback);
            } else {
                d.attachEvent("on" + type, callback);
            }
        },
        set_css = function (css_text) {
            // Handle setting of <style> element contents in IE8
            !!style_element.styleSheet
                ? (style_element.styleSheet.cssText = css_text)
                : (style_element.innerHTML = css_text);
        };
    d.getElementsByTagName("HEAD")[0].appendChild(style_element);

    // Using mousedown instead of mouseover, so that previously focused elements don't lose focus ring on mouse move
    add_event_listener("mousedown", function () {
        set_css(":focus{outline:0}::-moz-focus-inner{border:0;}");
    });

    add_event_listener("keydown", function () {
        set_css("");
    });
})(document);
