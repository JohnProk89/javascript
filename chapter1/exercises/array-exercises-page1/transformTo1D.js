function streamlineElements(arr) {
    let arr1D = []
    arr.forEach((element) => {
        element.forEach((elem) => {
            arr1D.push(elem)
        })
    })
    return arr1D
}

const arr = [[1, 2, 3], [1, 2, 3], [4, 4]]

const arr1D = streamlineElements(arr)

console.log(arr)
console.log(arr1D)