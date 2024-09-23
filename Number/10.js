function add(a, b) {
    return a + b;
}
// Subtraction
function subtract(a, b) {
    return a - b;
}
// Multiplication
function multiply(a, b) {
    return a * b;
}

// Division
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

// Exponentiation
function exponentiate(base, exp) {
    let result = 1;
    for (let i = 0; i < exp; i++) {
        result *= base; 
    }
    return result;
}
let number = 36;
let squareRoot = Math.sqrt(number);
console.log(`The square root of ${number} is ${squareRoot}`); // Output: 6
