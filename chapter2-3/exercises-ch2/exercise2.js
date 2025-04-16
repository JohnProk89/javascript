const people = [
    {name:'Alice',age:30},
    {name:'Bob', age:25},
    {name:'Charlie', age:35}
];

const youngPeople = people.filter(person => person.age < 30)
const youngPeopleNames = youngPeople.map(person => person.name)
console.log("People aged under 30: ", youngPeople)
console.log("Names of all the people under 30: ", youngPeopleNames)