const user = {
    name: {
        firstName: "John",
        lastName: "Doe"
    },
    age: 25,
    gender: "Male",
    address: [
        {
            city: "New York",
            country: "USA"
        },
        {
            city: "Seoul",
            country: "Korea"
        }
    ],
}

console.log(user.name.firstName); // John
// console.log(user.unknown.lastName); // TypeError: unknown 속성값을 가져올 수 없음

// Optional Chaining
console.log(user.name?.firstName); // John
console.log(user.unknown?.lastName); // undefined
// unknown 속성값이 있다면 unknown 속성값 내의 lastName 속성값을 반환, 그렇지 않다면 undefined를 반환한다.

console.log(user.address?.[0]); // { city: 'New York', country: 'USA' }
// 배열의 경우 ? 뒤에 .까지 넣어줘야 함

console.log(user.address?.[1]?.city); // Seoul