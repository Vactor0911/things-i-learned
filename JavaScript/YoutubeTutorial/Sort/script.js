const people = [
    {name: "John Doe", age: 30, job: "Software Developer"},
    {name: "Jane Smith", age: 25, job: "Web Designer"},
    {name: "Michael Brown", age: 45, job: "Project Manager"},
    {name: "Mary Johnson", age: 22, job: "Graphic Designer"},
    {name: "David White", age: 32, job: "Software Developer"},
]

people.sort((a, b) => a.age - b.age); // a - b 면 오름차순, b - a 면 내림차순
peopleNames = people.map(person => person.name);
console.log(peopleNames);