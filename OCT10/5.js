const wait = (ms) => {
    const start = Date.now();
    while (Date.now() - start < ms) {
    }
};
console.log('hello');
wait(5000)
console.log('world');


