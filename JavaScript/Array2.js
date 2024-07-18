const array = ["A", "B", "C", "B"];

// Includes
console.log(array.includes("A")); // true
console.log(array.includes("D")); // false

// Index Of
console.log(array.indexOf("B")); // 1
console.log(array.indexOf("D")); // -1
console.log(array.lastIndexOf("B")); // 3

// At (Readonly)
console.log(array[1]); // B
console.log(array.at(1)); // B

console.log(array.at(-1)); // B
console.log(array.at(-2)); // C