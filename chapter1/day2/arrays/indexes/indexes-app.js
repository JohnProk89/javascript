const arr = [1, 2, 1, 4, 1, 3]
let results = []

/**
 * Returns an array of indexes with the occurences
 * of a value in an array.
 * 
 * @param {Array} arr - the source array.
 * @param {Number} x - the element to compare.
 * @returns an array with the indexes where the element is found.
 * 
 */
function getIndexes(arr, x) {
    const results = []

    arr.forEach((element, index) => {
        if (element === x) {
            results.push(index)
        }
    });

    return results
}

results = getIndexes(arr, 1)
console.log(results)