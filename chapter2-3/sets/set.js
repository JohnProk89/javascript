let bag = new Set()
bag.add('Oranges')
bag.add('Apples')
bag.add('Oranges') // Set does not permit duplicates
bag.delete('Oranges')
bag.add('Honey')

if (bag.has('Apples')) {
    console.log('Has Apples')
}

console.log(`Bag has size: ${bag.size}`)
console.log(`Items:`, bag)