const ages = [19, 55, 43, 20]

ages.forEach(function(age) {
    console.log(age)
})

ages.forEach((age) => console.log(age))


let s = ""
ages.forEach(function(age) {
    s += age + " "
})

console.log(s)
