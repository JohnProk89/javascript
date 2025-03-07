const arr = [7, 4, 9, 2, 14]

let minVal = Math.min(...arr)
let maxVal = Math.max(...arr)
let minPos = arr.indexOf(minVal)
let maxPos = arr.indexOf(maxVal)

console.log(`Min value: ${minVal}, Min Position: ${minPos} `)
console.log(`Max value: ${maxVal}, Max Position: ${maxPos} `)

function getMinPosition(arr) {
    if (!arr || !arr.length) return -1;
    let minPosition = 0;
    let min = arr[0]

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
            minPosition = i
        }
    }
    return minPosition
}

console.log(`Invoking old fashioned function, MinValue: ${arr[getMinPosition(arr)]}, MinPosition: ${getMinPosition(arr) + 1}` )
console.log("Adding 1 to the position with the second implementation, to note that someone not familiar with array indexes, may expect them to start at 1, not at 0")

function getMaxPosition(arr) {
    if (!arr || !arr.length) return -1;
    let maxPosition = 0;
    let max = arr[0]

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
            maxPosition = i
        }
    }
    return maxPosition
}

console.log(`Invoking old fashioned function, MaxValue: ${arr[getMaxPosition(arr)]}, MaxPosition: ${getMaxPosition(arr)}` )
