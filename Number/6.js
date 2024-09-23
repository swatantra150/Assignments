function validNumber(value) {
    
    if (typeof value === 'number' && value !== NaN && value !== Infinity && value !== -Infinity) {
        return true;
    }
    if (typeof value === 'string') {
        let hasDecimal = false;
        for (let i = 0; i < value.length; i++) {
            if (value[i] === '.'){
                if (hasDecimal) {
                    return false;
                }
                hasDecimal = true;
            } else {
                const digit = value.charCodeAt(i) - '0'.charCodeAt(0);
                if (digit < 0 || digit > 9) {
                    return false
                }
            }
        }
        return true
    }
    return false
}
console.log(validNumber(300));
