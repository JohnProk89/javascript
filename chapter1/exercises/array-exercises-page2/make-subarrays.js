function createSubarrays(arr, size) {

    let newArr = []

    arr.forEach((element, index, arr) => {
        if (index % size === 0) {
            newArr.push(arr.slice(index, index + size ))
        }
    })

    return newArr
}

let arr = [1, 2, 3, 4, 5]
const size = 2
arr = createSubarrays(arr, size)
console.log(arr)