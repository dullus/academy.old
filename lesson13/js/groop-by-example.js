acc: {}

key: 21

{
    21: [
        { name: 'Alice', age: 21 }
    ]
}


////
key: 20

{
    20: [
        { name: 'Max', age: 20 },
    ],
    21: [
        { name: 'Alice', age: 21 }
    ],
    
}



let people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 }
];

function getPeopleByAge(people, age) {
    return people.filter(person => person.age < age)
}


function countAll(numbers) {
    return numbers.reduce((acc, num) => acc + num, 0)
}



const sum = countAll([1,2,3,4]); // "Sum of all your number is 10"

