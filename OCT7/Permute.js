const recrutePermute = (ds, ans, arr, freq) => {
    if (ds.length == arr.length) {
        ans.push([...ds])
    }
    for (let i = 0; i < arr.length; i++) {
        if (!freq[i]) {
            ds.push(arr[i])
            freq[i] = 1
            recrutePermute(ds, ans, arr, freq)
            freq[i] = 0
            ds.pop()
        }
    }
}

const permute = (arr) => {
    let ans = []
    let ds = []
    let freq = []
    for (let i = 0; i < arr.length; i++) {
        freq[i] = 0
    }
    recrutePermute(ds, ans, arr, freq)
    return ans
}
let arr=[1,2,3]
console.log(permute(arr));
