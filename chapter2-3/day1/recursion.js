function factorial(n) {
    if (n <= 1) return 1
    return n * factorial(n - 1)
}

console.log(factorial(100)) // pretty big number for myy standards...