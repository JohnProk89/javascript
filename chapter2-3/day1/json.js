const user = {
    id: 1, 
    firstname: "Alice" ,
    lastname: "W."
}

const userJSONString = JSON.stringify(user)

const userJSobject = JSON.parse(userJSONString)

console.log(userJSONString)

for (let prop in user) {
    console.log(`${prop}: ${user[prop]}`)
}

for (let [key, value] of Object.entries(user)) {
    console.log(`${key} - ${value}`)
}