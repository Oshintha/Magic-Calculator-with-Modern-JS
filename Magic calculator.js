// defining inputs
let num1;
let num2;

//function for addition
function add(num1, num2) {
    return `${num1} plus ${num2} equals ${num1 + num2}`;
}

//function for subtraction
function subtract(num1, num2) {
    return `${num1} subtract ${num2} equals ${num1 - num2}`;
}

//function for multiplication
function multiply(num1, num2) {
    return `${num1} times ${num2} equals ${num1 * num2}`;
}

//function for division
function divide(num1, num2) {
    return `${num1} divided by ${num2} equals ${num1 / num2}`;
}

//function for magicoperation
function magicOperation(num) {
    switch (true) {
        case num < 10:
            return "Magic dust makes the number grow: " + (num * 10);
        case num >= 10 && num <= 100:
            return "A magic gnome double the number: " + (num * 2);
        default:
            return "The number is too mighty for magic and remains unchanged.";
    }
}

//prompt-sync library and assigns it to a constant variable named prompt.
//prompt-sync is a library that allows synchronous prompting for user input in Node.js applications.
const prompt = require('prompt-sync')();

//declares a variable named userWantsToContinue and initializes it with the boolean value true.
let userWantsToContinue = true;
 
//To print the welcome massage
console.log("\nWelcome to the Magic Calculator!");

//instructions for input valuve and select operation, continue the process untill select exitcle
while (userWantsToContinue) {


    let operation = prompt("Choose an operation: add, subtract, multiply, divide, magic, or exit: ");
    console.log("\n")
    //exit process and massage
    if (operation === "exit") {
        console.log("Exiting. Goodbye!\n");
        break;
    }
    else if (operation === "magic") {
        //Declare variable
        let num1 = parseFloat(prompt("Enter the number: "));
        console.log(magicOperation(num1));
        continue;
    }
    else if  (operation !== "add" && operation !== "subtract" && operation !== "multiply" && operation !== "divide"){
        //Print error massage if user enter a invalid operations
        console.log("Invalid Operation. Please select correct operation form the list.\n");
        continue;
    }
    let num1 = parseFloat(prompt("Enter first number: "));
    let num2 = parseFloat(prompt("Enter second number: "));
    //to print error msg if inputs are not numbers
    if (isNaN(num1) || isNaN(num2)) {
        console.log("Invalid numbers. Please enter valid numbers.");
        continue;
    }

    //to skip divide by 0 and print error msg
    if (num2 === 0 && operation === "divide") {
        console.log("Cannot divide by zero. Try another operation.");
        continue;
    }

    //call the correct function according to selected operation
    switch (operation) {
        case "add":
            console.log(add(num1, num2));
            break;
        case "subtract":
            console.log(subtract(num1, num2));
            break;
        case "multiply":
            console.log(multiply(num1, num2));
            break;
        case "divide":
            console.log(divide(num1, num2));
            break;
        case "magic":
            console.log(magicOperation(num1));
            break;
        default:
            console.log("Invalid operation. Please try again.");
    }
}
