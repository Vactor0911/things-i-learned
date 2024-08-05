const person = {
    name: "John",
    age: 30,
    gender: "male",
    func: () => {console.log("Hello, World!")},
    sayName: function() {console.log(`My name is ${this.name}.`)}, // () => {} 형식의 함수로는 this 키워드를 사용할 수 없다.
}

console.log(person.name); // John
console.log(person); // { name: 'John', age: 30, gender: 'male' }
person.func(); // Hello, World!
person.sayName(); // My name is John.