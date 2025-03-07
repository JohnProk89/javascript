function mapWithFunction(obj, fn) {
    return fn(obj)
}

function mapValues(obj){
    let newObj = {}
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = obj[key] * 2;
        }
      }
    return newObj
}

let order = { 'a': 1, 'b': 2, 'c': 3 };
console.log("Initial order:", order)
console.log("Order update:",mapWithFunction(order, mapValues))
console.log("Initial order:", order)