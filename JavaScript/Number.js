console.log(10000); //10000
console.log(1e4);   //10000

console.log(0.0001);    //0.0001
console.log(1e-4);      //0.0001

console.log(9);         //9
console.log(0b1001);    //9
console.log(0o11);      //9 (8진수)
console.log(0x9);       //9 (16진수)

console.log(typeof 1);      //number
console.log(typeof NaN);    //number

console.log( parseInt("15") );  //15
console.log( Number("15") );    //15

console.log( parseInt("3.14") );    //3
console.log( parseFloat("3.14") );  //3.14

console.log( parseInt("3일") ); //3
console.log( Number("3일") );   //NaN

console.log( parseInt(1000, 2) );   //8
console.log( parseInt(0x8, 16) );   //8

console.log(typeof Infinity);   //number

console.log("12" + 3);  //123
console.log(12 + 3);    //15

console.log(0.1 + 0.2); //0.30000000000000004
console.log( (0.1 * 10 + 0.2 * 10) / 10); //0.3