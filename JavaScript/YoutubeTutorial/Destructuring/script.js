const aryColor = ["red", "green", "blue", "black", "white"];

[aryColor[0], aryColor[4]] = [aryColor[4], aryColor[0]];
console.log(aryColor); // ["white", "green", "blue", "black", "red"]

const [firstColor, secondColor, thirdColor, ...extraColors] = aryColor;
console.log(firstColor); // white
console.log(secondColor); // green
console.log(thirdColor); // blue
console.log(extraColors); // ["black", "red"]

const person1 = {
    name: "John Doe",
    age: 30,
    gender: "Male",
    job: "Software Developer",
}

const person2 = {
    name: "Jane Smith",
    age: 25,
    gender: "Female",
}

// const {name, age, gender, job="Unemployed"} = person2;
// console.log(name); // Jane Smith
// console.log(age); // 25
// console.log(gender); // "Female"
// console.log(job); // Unemployed

const displayPerson = ({name, age, gender, job="Unemployed"}) => {
    console.log("--------------------");
    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Gender: " + gender);
    console.log("Job: " + job);
    console.log("--------------------");
};

displayPerson(person1);
displayPerson(person2);