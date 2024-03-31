const secondaryOperations = ["log", "cos", "sin", "tan"];
const inputScreen = document.getElementById("display");

let currentNumber = "";
let previousNumber = "";
let operation = "";
let firstNumSecondaryOp = "";
let SecondNumSecondaryOp = "";

function appendNumber(number) {
    currentNumber += number;
    inputScreen.value = currentNumber;
    inputScreen.classList.remove('error-highlight');
}

function selectOperation(op) {
    if (currentNumber === "" && secondaryOperations.includes(op)) {
        firstNumSecondaryOp = op;
    } else if (currentNumber !== "") {
        previousNumber = currentNumber;
        currentNumber = "";
        operation = op;
        inputScreen.value = op;
    } else if (operation !== "" && currentNumber === "" && previousNumber !== "") {
        if(secondaryOperations.includes(op)) secondOperation = op;
        else operation = op;
        inputScreen.value = op;
    } else if (operation !== "" && currentNumber !== "") {
        const ans = calculate();
        previousNumber = ans;
        currentNumber = "";
        operation = op;
        inputScreen.value = op;
    } else {
        inputScreen.value = "Type a number first";
        inputScreen.classList.add('error-highlight');
    }
}

function clearDisplay() {
    currentNumber = "";
    previousNumber = "";
    operation = "";
    inputScreen.value = "";
}

function calculate() {
    console.log("currentNumber", currentNumber);
    console.log("previousNumber", previousNumber);
    console.log("operation", operation);
    console.log("secondOperation", secondOperation);
    if (currentNumber !== "" && previousNumber !== "" && operation !== "") {
        let num1 = parseFloat(previousNumber);
        let num2 = parseFloat(currentNumber);
        let result;

        switch (operation) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
        }
    }
}
