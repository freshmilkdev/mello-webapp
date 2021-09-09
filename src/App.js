import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
} from "react-router-dom";
import {LoginPage} from "./pages/login";
import {PublicRoute} from "./routes/PublicRoute";
import {MenuPage} from "./pages/menu";
import {MaintenanceRequestPage} from "./pages/maintenance-request";
import {routes} from "./routes";


function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <PublicRoute path={routes.home} component={MenuPage} exact />
                    <PublicRoute path={routes.login} component={LoginPage} />
                    <PublicRoute path={routes.maintenanceRequest} component={MaintenanceRequestPage} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
