import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1);
    }

    const decreaseCount = () => {
        setCount(count - 1);
    }

    const resetCount = () => {
        setCount(0);
    }

    return(
        <div className="container">
            <p className="display">{count}</p>
            <button className="button" onClick={decreaseCount}>Decrease</button>
            <button className="button" onClick={resetCount}>Reset</button>
            <button className="button" onClick={increaseCount}>Increase</button>
        </div>
    );
};

export default Counter;
