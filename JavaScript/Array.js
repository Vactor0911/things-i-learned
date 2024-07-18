const array = ["Item1", "Item2", "Item3"]; // const로 선언했지만 배열의 요소를 변경할 수 있다. 다만, 객체 자체를 다른 객체로 변경할 수는 없다.

console.log(array.length); // 3

//Array Extend
console.log(array);
array[4] = "Item4"; // Add (특정 인덱스에 값을 추가한다)
// array[3]을 선언하지 않고 array[4]를 선언했으므로 array[3]은 undefined가 저장된다.
console.log(array);

array.push("Item5"); // Append (배열의 맨 뒤에 값을 추가한다)
array.unshift("Item0"); // Prepend (배열의 맨 앞에 값을 추가한다)
array.splice(3, 0, "Item"); // Insert (특정 인덱스에 값을 추가한다; 3번 인덱스에 "Item"을 추가한다
console.log(array);

array.pop(); // Remove Last (배열의 맨 뒤의 값을 제거한다)
array.shift(); // Remove First (배열의 맨 앞의 값을 제거한다)
console.log(array);

array.splice(1, 2); // Remove (특정 인덱스의 값을 제거한다; 1번 인덱스부터 2개의 요소를 제거한다)
console.log(array);

array.splice(1, 1, "Item2", "Item3"); // Replace (특정 인덱스의 값을 변경한다; 1번 인덱스부터 1개의 요소를 제거하고 그 자리에 "Item2"와 "Item3"을 추가한다)
console.log(array);

array[5] = "Item5";
console.log(array);

//For Each (For Of)
for (let item of array) {
    console.log(item);
}
// undefined도 출력된다.

// For In
for (let index in array) {
    console.log(index + " : " + array[index]);
}
// undefined가 저장된 index의 값은 출력되지 않는다.