const delay=(ms)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve()
        },ms)
    })
}
const printNumbers = async () => {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
        await delay(2000);
    }
    console.log("Waiting for 10 seconds...");
    await delay(5000);
    for (let i = 10; i >= 1; i--) {
        console.log(i);
        await delay(2000);
    }
};

printNumbers();
