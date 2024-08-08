let func1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isSuccessful = false;
            if (isSuccessful) {
                resolve("Function 1"); // 성공 시 실행
            }
            else {
                reject("Error from Function 1"); // 실패 시 실행
            }
        }, 1500);
    });
}

let func2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Function 2");
        }, 2500);
    });
}

let func3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Function 3");
        }, 500);
    });
}

// #[ Callback Hell ]#
// func1(() => {
//     func2(() => {
//         func3(() => {console.log("Done!")});
//     })
// })

// Promise Chaining
func1().then((value) => {
    console.log(value);
    return func2();
}).then((value) => {
    console.log(value);
    return func3();
}).then((value) => {
    console.log(value);
    console.log("Done!");
}).catch((error) => { // 에러 발생 시 실행
    console.error(error);
});