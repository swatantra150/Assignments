function asyncfunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('data1');
            resolve('success1')
        }, 1000)
    })
}
function asyncfunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('data2');
            resolve('success2')
        }, 1000)
    })
}
console.log('fetching data1');
let p1 = asyncfunction1()
p1.then((res) => {
    console.log(`fetched successfully ${res}`);
    console.log('fetching data2');
    let p2 = asyncfunction2()
    p2.then((res) => {
        console.log(`fetched successfully ${res}`);
    })
})


