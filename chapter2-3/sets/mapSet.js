let store = [{product: 'Apples', city: "Lamia"},
            {product: 'Oranges', city: "Athens"},
            {product: 'Milk', city: "Volos"},
            {product: "Honey", city: "Athens"}]

let cities = ['all', ...new Set(store.map((product) => product.city))]
let filteredCities = cities.filter(city => city.startsWith('V'))
console.log(cities)
console.log(filtered)