const user = {
  name: "Mike",
  age: 30,
  gender: "Male",
};

console.log(user);
console.log(user["name"]); // Mike
console.log(user.age); // 30

console.log("");

// 배열과 함수는 객체이다.
// 따라서, 배열과 함수를 객체처럼 사용하여 속성을 추가할 수 있다.
// 다만, 배열과 함수에는 임의의 속성을 추가하는 것이 권장되지 않는다.

const func = () => {}
func.data = "Hello World!";
console.log(func.data); // Hello World!

const array = [];
array.data = "Hello World!";
console.log(array.data); // Hello World!

// 객체 안에 객체 저장
const person = {
    name: {
        firstName: "Mike",
        lastName: "Jordan",
    }
}
console.log(person.name.firstName); // Mike
// 속성 참조 방식이 Lua와 비슷하다.