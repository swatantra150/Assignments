const function1 = () => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          const data = [1, 2, 3]
          resolve(data)
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
Promise.race([function3(), function2(), function1()])
  .then((result) => {
    console.log("Promise.race result:", result);
  })
  .catch((error) => {
    console.log("Promise.race error:", error);
  });