import ReactDOM from 'react-dom';
import React from "react";
import {App} from "./App";
import {BrowserRouter} from "react-router-dom";
import './styles/index.sass'
import {ThemeProvider} from "./theme/ThemeProvider";

ReactDOM.render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root'))