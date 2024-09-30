const function1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = [1, 2, 3]
            reject(data)
        }, 6000)
    })
}
const function2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = [4, 5, 6]
            reject(data)
        }, 3000)
    })
}
const function3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = [7, 8, 9]
            reject(data)
        }, 4000)
    })
}
Promise.any([function1(), function2(), function3()])
    .then(result => {
        console.log('First resolved promise data:', result);
    })
    .catch(error => {
        console.log('All promises rejected. AggregateError:', error);
    });