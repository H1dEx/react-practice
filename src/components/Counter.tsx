import {useState} from "react";
import './Counter.sass'
export const Counter = () => {
    const [count, setCount] = useState(0);

    const handleMore = () => setCount(prev => prev + 1)
    const handleLess = () => setCount(prev => prev - 1)

    return (
        <div className="container">
            <h1>{count}</h1>
            <div>
                <button onClick={handleMore}>+</button>
                <button onClick={handleLess}>-</button>
            </div>
        </div>
    )
}