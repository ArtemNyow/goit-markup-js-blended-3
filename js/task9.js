// Дано масив об'єктів. 
// Створіть новий масив, що містить тільки об'єкти, в яких 
// вік більше 20 років. 
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

//const user = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ]
const user = [
 { name: 'John', age: 27 },
 { name: 'Jane', age: 31 },
 { name: 'Bob', age: 19 },
]


const findUser = user.filter(person => person.age > 20);
console.log(findUser);
