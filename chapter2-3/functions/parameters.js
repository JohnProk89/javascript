// function add(a, b) {
//     return a + b
// }

// console.log(add(3)) // returns NaN

function add(a, b) {
    if (a && b) {
        return a + b;
    }

    return 0
}

console.log(add(1, 5))

function mul(a, b) {
    a = a || 0
    b = b || 0

    return a * b
}

console.log(mul(1))