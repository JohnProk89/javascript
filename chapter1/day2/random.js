// Generate a random decimal between 0 (inclusive) and 1 (exclusive)
const randomDecimal = Math.random();

// Scale the random decimal to be between 0 and 100
const randomNumber = Math.floor(randomDecimal * 101);

console.log(randomNumber)
