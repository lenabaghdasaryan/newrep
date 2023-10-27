const person = {
    name: 'Arman',
    age: 30,
    city: 'Yerevan'
};
const person1 = {};
for (let value in person) {
    person1[value] = person[value];

}
person1.name = 'Davit';
console.log(person1);
console.log(person);