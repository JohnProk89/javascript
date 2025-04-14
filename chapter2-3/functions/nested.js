function hypotenuse(a, b) {
    function square(n) {
        return n * n;
    }

    return Math.sqrt(square(a) + square(b));
}