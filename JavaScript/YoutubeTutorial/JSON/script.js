// JSON = JavaScript Object Notation
// {key: value} 쌍으로 이루어진 데이터 오브젝트를 전달하기 위한 포맷

const arySimpleData = ["Data1", "Data2", "Data3"];
const jsonString = JSON.stringify(arySimpleData);
console.log(jsonString);

const aryComplexData = [
    {name: "Data1", value: 100},
    {name: "Data2", value: 200},
    {name: "Data3", value: 300}
];
const jsonString2 = JSON.stringify(aryComplexData);
console.log(jsonString2);

const parsedData = JSON.parse(jsonString2);

fetch("complexData.json") // fetch는 Promise를 반환함
    .then(response => response.json()) // response.json()도 Promise를 반환함
    .then(data => console.log(data)); // data는 JSON.parse()된 결과를 저장한 오브젝트