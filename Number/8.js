function roundNumber(num) {
    if (num > 0) {
        
        const integerPart = Math.floor(num);
        const decimalPart = num - integerPart;

        
        if (decimalPart >= 0.5) {
            return integerPart + 1; 
        } else {
            return integerPart; 
        }
    } else if (num < 0) {

        const integerPart = Math.ceil(num);
        const decimalPart = num - integerPart;

       
        if (decimalPart <= -0.5) {
            return integerPart - 1; 
        } else {
            return integerPart;
        }
    } else {
        return 0; 
    }
}
console.log(roundNumber(45.69));
