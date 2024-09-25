// Prompt the user to enter a number
let input = prompt("Enter a number:");

// to convert into the number from input
let number = Number(input);

// Checking if the input is a valid number
if (isNaN(number)) {
    console.log("Please enter a valid number.");
} else {
    // Checking if the number is 5's multiple 
    if (number % 5 === 0) {
        console.log(`${number} is a multiple of 5.`);
    } else {
        console.log(`${number} is not a multiple of 5.`);
    }
}



function calculator(num1, num2, operator) {
    let result;

    // Using switch statement to determine the operation
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            // Checking for the division by zero
            if (num2 === 0) {
                return "Error: Division by zero is not allowed.";
            }
            result = num1 / num2;
            break;
        default:
            return "Error: Invalid operator. Please use +, -, *, or /.";
    }

    return result;
}

// the usage of example:
console.log(calculator(6, 4, '+')); // returns 10
console.log(calculator(6, 4, '-')); // returns 2
console.log(calculator(6, 4, '*')); // returns 24
console.log(calculator(6, 4, '/')); // returns 1.5






