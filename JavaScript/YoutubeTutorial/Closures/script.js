const createCounter = () => {
    let count = 0;

    const increaseCount = () => {
        count++;
        console.log(`Count: ${count}`);
    };

    const getCount = () => {
        return count;
    }

    return {increaseCount, getCount};
};

const counter = createCounter();

counter.increaseCount();
counter.increaseCount();
counter.increaseCount();
counter.increaseCount();

console.log(counter.count); // undefined
console.log(counter.getCount()); // 4