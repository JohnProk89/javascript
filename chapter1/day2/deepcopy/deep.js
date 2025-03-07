const arr = [{id: 1, firstname: 'Alice'}, {id: 2, firstname: 'Bob'}, {id: 3, firstname: 'Bill'}];

// Deep copy
const deepCopy = _.cloneDeep(arr);

console.log(arr, "genuine arr");
console.log(deepCopy, "deepcopy initially");

arr.name = "lol";
console.log(arr, "arr after change");
console.log(deepCopy, "deep copy at last");