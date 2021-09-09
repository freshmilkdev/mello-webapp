import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {LoginPage} from "./pages/login";
import {PublicRoute} from "./routes/PublicRoute";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <PublicRoute path="/login" component={LoginPage}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
