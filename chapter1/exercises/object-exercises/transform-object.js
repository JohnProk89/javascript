function transformWithFunction(obj, fn) {
    let newObj = fn(obj)
    return newObj
}

const upperCaseKeys = obj =>
    Object.keys(obj).reduce((newObj, key) => {
        newObj[key.toUpperCase()] = obj[key];
      return newObj;
    }, {});

let user = {
    firstname: "John", 
    age: 35
}

console.log("Initial user:", user)
console.log("User update:",transformWithFunction(user, upperCaseKeys))