function lowerBound(arr, target) {
    let left = 0;
    let right = arr.length;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    if (arr[left] === target) {
        return left;
    }
    return -1;
}
function upperBound(arr, target) {
    let left = 0; 
    let right = arr.length;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] <= target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    if (arr[left - 1] === target) {
        return left - 1;
    }
    return -1;
}
const arr=[5,7,7,8,8,10]
let index=[]
index.push(lowerBound(arr,10))
index.push(upperBound(arr,10))
console.log(index);
