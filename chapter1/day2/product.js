const products = []

let inserted

try {
    insert(products, "Honey")
    console.log("Successful insert!")
} catch (e) {
    console.log("Product not inserted since already exists")
}

function insert(arr, product) {
    if (!arr || ! product) return;

    try {
        if (arr.includes(product)) throw new Error("ProductExists")
        arr.push(product)
        return true;
    } catch (error) {
        console.log(error.message, error.trace)
        throw error
    }
}

class ProductAlreadyExistsError extends Error {
    constructor(message) {
        super(message)
        this.name = "ProductAlreadyExists"
    }
}

const products2 = []

try {
    insert2(products2, "Honey")
    console.log("Successful insert!")
    insert2(products2, "Honey")
    console.log("Successful insert!")
} catch (e) {
    console.log("Product not inserted since already exists")
}

function insert2(arr, product) {
    if (!arr || ! product) return;

    try {
        if (arr.includes(product)) throw new ProductAlreadyExistsError("ProductExists")
        arr.push(product)
        return true;
    } catch (error) {
        console.log(error.message, error.trace, error.name)
        throw error
    }
}