function getValuesWithKeys(obj, arr) {
    return Object.fromEntries(
        Object.entries(obj)
        .filter(([key]) => arr.includes(key)))
}

let arr = ['1', '2', '4']
let obj = {
    1: "hi",
    2: "Hello",
    3: "hahahahha",
    4: "pizza"
}
let obj2 = getValuesWithKeys(obj, arr)

console.log(obj2)