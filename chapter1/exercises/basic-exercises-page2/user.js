const user = {
    name: "John", 
    age: 35,
    city: "Athens",
    hello() {
        console.log("Hello", this.name)
    }
}

console.log(`I am ${user.name}, I am ${user.age} years old and I live in ${user.city}`)

user.hello()