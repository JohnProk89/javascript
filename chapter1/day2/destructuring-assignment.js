let [a, b] = [1, 2]     // Destructuring assignment

console.log("a:",a)
console.log("b:",b)

let [c, d] = [10, 20]; // Destructuring assignment

// Line 11 throws ReferenceError: Cannot access 'c' before initialization
// Probably due to some problem with the execution timing of the environment's execution model...
// The problem is fixed when a semicolon is added at the end of line 6...
[c, d] = [d, c]         // Destructuring assignment and Swap

const user = {
    id: 1,
    firstname: "Alice",
    lastname: "W."
}

let {firstname, lastname} = user
// let {firstname: first, lastname: last} = user
console.log("Firstname: " + firstname)
console.log("Lastname: " +lastname)