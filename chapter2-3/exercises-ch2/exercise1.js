let initialArray = [1, 2, 3, 4, 5];

let mappedArray = initialArray.map(num => num * 2)
let filteredArray = initialArray.filter(num => num % 2 == 0)

console.log("Initial array: ", initialArray)
console.log("Mapped array: ", mappedArray)
console.log("Filtered even numbers: ", filteredArray)

if (initialArray.some(n => n > 0)) {
    console.log("There is at least one positive number")
}

if (initialArray.every(n => n > 0)) {
    console.log("All numbers are positive")
}