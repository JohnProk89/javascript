const contacts = [
    {   
        firstname: "Athan", 
        lastname: "Andr.", 
        phoneNumber: "2108203900"
    },
    {
        firstname: "Anna", 
        lastname: "W.", 
        phoneNumber: "6914455670"
    }
]

function insertContact(firstname, lastname, phone) {
    if (!firstname || !lastname || !phone) return
    contacts.push({firstname, lastname, phone})
}

function remove(phoneNumber) {
    let numberFound = contacts.find(c => c.phoneNumber === phoneNumber)
    if (!numberFound) return

    let index = contacts.findIndex(c => c.phoneNumber === phoneNumber)
    contacts.splice(index, 1)
}

function replace(oldNumber, newNumber) {
    let oldNumberFound = contacts.find(c => c.phoneNumber === oldNumber)
    let newNumberFound = contacts.find(c => c.phoneNumber === newNumber)

    if (!oldNumberFound || newNumberFound) return

    contacts.forEach(c => {
        if (c.phoneNumber === oldNumber) c.phoneNumber = newNumber
    })
}

function traverse(mobileContacts) {
    mobileContacts.forEach(c => console.log(c))
}

insertContact("Giannis", "Prokopiou", "6994949666");
insertContact("John", "Prok", "6994949676");
remove("6914455670");
replace("2108203900", "6945454555"); // Works only for objects being inserted at the initial contact list...
traverse(contacts)
console.log(contacts)


