import {useState} from "react";
import classes from './Counter.module.sass'

export const Counter = () => {
    const [count, setCount] = useState(0);

    const handleMore = () => setCount(prev => prev + 1)
    const handleLess = () => setCount(prev => prev - 1)

    return (
        <div className={classes.container}>
            <h3>{count}</h3>
            <div>
                <button onClick={handleMore}>+</button>
                <button onClick={handleLess}>-</button>
            </div>
        </div>
    )
}