const prompt = require('prompt-sync')();
let a = parseFloat(prompt('Enter the first number: '));
function formatNumber(a, decimalPlaces) {
    const factor = Math.pow(10, decimalPlaces);
    console.log(factor);
    const rounded = Math.round(a * factor);
    console.log(rounded);
    const formatted = rounded / factor;
    return formatted;
}
let formattedNumber = formatNumber(a, 2);
console.log(formattedNumber);

