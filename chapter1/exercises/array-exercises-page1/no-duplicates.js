let arr = [1, 2, 3, 4, 5, 2, 3, 900]
let filteredArray = getUniqueValues(arr)

console.log(filteredArray)

function getUniqueValues(arr) {
    return arr.filter((element, i, arr) => arr.indexOf(element) === i);
}