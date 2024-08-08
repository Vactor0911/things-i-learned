// Async = 함수가 항상 Promise를 반환하도록 하는 것
// Await = Promise가 처리될 때까지 기다리는 것
// Async / Await은 Promise를 더 쉽게 사용할 수 있게 해준다.

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

async function execute() {
    try {
        const func1Result = await func1();
        console.log(func1Result);
        
        const func2Result = await func2();
        console.log(func2Result);
        
        const func3Result = await func3();
        console.log(func3Result);
        
        console.log("Done!");
    }
    catch (error) {
        console.error(error);
    }
}

execute();