// For Loop
for (let i=0; i<10; i++) {
    console.log( "i : " + (i+1) );
}

const array = ["Item1", "Item2", "Item3"];
// For Each
for (let item of array) {
    console.log(item);
}

console.log("")

// While Loop
let j = 0;
while (j < 10) {
    j++;
    console.log("j : " + j);
}

console.log("")

// Break & Continue
let k = 0;
while (true) {
    k++;

    if (k > 10) {
        break;
    }
    else if (k % 2 !== 0) {
        continue;
    }

    console.log("k : " + k);
}