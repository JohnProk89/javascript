let student = {
    id: 1,
    lastname: "Androutsos", 
    firstname: "Athan.", 
    address: {street: "Patission", number: "76"},
}

let clonedStu = {...student}
console.log(clonedStu)

let { id, lastname: last, firstname: first } = student
let { address } = student
let { street, number } = address

console.log(id, last, first)
console.log( "Address " + street, number)