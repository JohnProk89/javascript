const square = function(x) {
    return x*x;
}

console.log(square(10))

const factorial = function facto(n) {
    // if (n <= 1) return 1; else return n * facto(n - 1)
    return (n <= 1) ? 1 : n * facto(n-1)
}

console.log(factorial(4))