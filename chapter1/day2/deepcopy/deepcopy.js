const user = {
    id: 1,
    username: "alice",
    password: "123456"
}

const aliceJsonString = JSON.stringify(user)
const aliceJSClone = JSON.parse(aliceJsonString)

const userShallow = user

console.log(user)
userShallow.name = "lol"
console.log(user)
aliceJSClone.name = "banana"
console.log(user)

