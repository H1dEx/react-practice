import {Counter} from "./components/Counter";
import React from "react";
import './index.sass';

export const App = () => {
    return (<div className="apps">
        <h1 className="apps">Application Header</h1>
        <Counter/>
    </div>)
}