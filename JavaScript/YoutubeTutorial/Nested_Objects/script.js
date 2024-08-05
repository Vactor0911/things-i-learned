const person = {
    name: "John Doe",
    age: 30,
    isEmployed: true,
    hobbies: ["Reading", "Coding", "Gaming"],
    address: {
        street: "123 Main Street",
        city: "New York",
        country: "United States"
    }
}

console.log(person.hobbies[1]); // Coding
console.log(person.address.street); // 123 Main Street

for (const property in person.address) {
    console.log(person.address[property]);
}