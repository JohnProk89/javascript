let nums = [1, 2, 3, 4, 5]

let sum = nums.reduce((total, val) => total + val, 0)
console.log(sum)

let arr = [1, 2, 3, 4, 5]

let sum2 = arr.reduce((total, val) => total + val)
let avg = arr.reduce((total, val) => (total + val)) / arr.length

console.log(`Sum: ${sum}, Avg: ${avg.toFixed(2)}`)