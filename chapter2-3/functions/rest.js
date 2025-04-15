function max(...rest) {
    let maxValue = -Infinity;

    for (let n of rest) {
        if (n > maxValue) {
            maxValue = n;
        }
    }

    return maxValue;
}

console.log(max(1, 10, 100, 2, 3, 1002, 4, 5, 6)) // => 1002