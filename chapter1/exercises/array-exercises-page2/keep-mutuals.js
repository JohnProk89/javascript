function getCommonElements(arr1, arr2){

    let newArr = []

    newArr = arr1.filter(item => arr2.includes(item))

    return newArr
}

const arr1 = [1, 2, 3]
const arr2 = [1, 3]

const arr3 = getCommonElements(arr1, arr2)
console.log(arr3)