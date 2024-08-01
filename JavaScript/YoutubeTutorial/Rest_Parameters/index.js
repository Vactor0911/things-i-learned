const func = (...param) => {
    console.log(param);
    console.log(...param);
};

const lang1 = "C";
const lang2 = "C++";
const lang3 = "Java";
const lang4 = "Python";
const lang5 = "JavaScript";

func(lang1, lang2); // ["C", "C++"]

const add = (...numbers) => {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}

console.log( add(1, 2, 3, 4, 5) ); // 15