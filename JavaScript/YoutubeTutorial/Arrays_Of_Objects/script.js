const fruits = [
    {name: "apple", color: "red", calories: 95},
    {name: "banana", color: "yellow", calories: 105},
    {name: "grape", color: "purple", calories: 62},
    {name: "orange", color: "orange", calories: 62},
    {name: "pear", color: "green", calories: 102},
]

// Map
const fruitNames = fruits.map(fruit => fruit.name);
console.log(fruitNames); // ["apple", "banana", "grape", "orange", "pear"]

const fruitColors = fruits.map(fruit => fruit.color);
console.log(fruitColors); // ["red", "yellow", "purple", "orange", "green"]

// Filter
const highCalories = fruits.filter(fruit => fruit.calories > 100);
const highCaloriesNames = highCalories.map(fruit => fruit.name);
console.log(highCaloriesNames); // ["banana", "pear"]