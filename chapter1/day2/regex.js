const text = "05/01/2023"
const text2 = "05/01/2023 01/12/2024"

const datePattern = /\d{2}/g
const datePattern2 = /(\d{2})\/(\d{2})\/(\d{2})/g

const matches = text.match(datePattern)
let match

console.log(matches)

while ((match = datePattern2.exec(text2)) !== null) {
    [fullDate, day, month, year] = match
    console.log(`full: ${fullDate}, day: ${day}, month: ${month}, year: ${year}`)
}