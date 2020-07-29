import React from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import {Provider} from "react-redux";
import store from "./store/store";
import {BrowserRouter as Router} from "react-router-dom";
import MainRouters from "./routers/IndexPages";


function App() {
    return (
        <Provider store={store}>
            <Router>
                <CssBaseline/>
                <MainRouters/>
            </Router>
        </Provider>
    );
}

export default App;
