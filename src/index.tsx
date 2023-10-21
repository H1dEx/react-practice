import ReactDOM from 'react-dom';
import React from "react";
import {App} from "app/App";
import {BrowserRouter} from "react-router-dom";
import 'app/styles/index.sass'
import {ThemeProvider} from "app/providers/ThemeProvider";

ReactDOM.render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root'))