const book = {author: {firstname: "Th", surname: "Androutsos"}}
let surname

// Verbose null/undefined check
if (book) {
    if (book.author) {
        surname = book.author.surname
    }
}

// Conditional property access
surname = book?.author?.surname

book.author.title = "Dr."
delete book.author.firstname
console.log(book)

if (book.hasOwnProperty('author')) {
    console.log(book.author)
}

// Shallow Copies
const clonedBook = {}
for (let key of Object.keys(book)) { // 1st method
    clonedBook[key] = book[key];
}

// Object.assign(clonedBook, book) // 2nd method

// let clonedBook = {}
// clonedBook = {...book} // 3rd method

console.log(clonedBook)



