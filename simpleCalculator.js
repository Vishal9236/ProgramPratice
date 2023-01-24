const operator = prompt("Enter +, -, * or /");
const number1 = parseFloat(prompt("Enter first number:"));
const number2 = parseFloat(prompt("Enter second number:"));

let result;

function addition(a,b) {
    result = a + b;
}

function subtraction(a,b) {
    result = a - b;
}

function multiplication(a,b) {
    result = a * b;
}

function division(a,b) {
    result = a / b;
}

switch (operator) {

    case "+" :
        addition(number1,number2);     
        break;
    case "-" :
        subtraction(number1,number2);
        break;
    case "*" :
        multiplication(number1,number2);
        break;
    case "/" :
        division(number1,number2);
        break;

    default:
        console.log("Please enter valid operator...");
        break;
}

alert("Result : " + result);
let calculateAgain = confirm("Calculate Again?");
calculateAgain ? location.reload() : alert("Thanks for using calculator.");
