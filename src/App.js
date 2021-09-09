import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch} from "react-router-dom";
import {routes} from "./routes";
import {LoginPage} from "./pages/login";
import {PublicRoute} from "./routes/PublicRoute";
import {MenuPage} from "./pages/menu";
import {MaintenanceRequestPage} from "./pages/maintenance-request";
import {RequestPreviewPage} from "./pages/request-preview";
import {ConversationsPage} from "./pages/conversations";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <PublicRoute path={routes.home} component={MenuPage} exact />
                    <PublicRoute path={routes.login} component={LoginPage} />
                    <PublicRoute path={routes.maintenanceRequest} component={MaintenanceRequestPage} />
                    <PublicRoute path={routes.requestPreview} component={RequestPreviewPage} />
                    <PublicRoute path={routes.conversations} component={ConversationsPage} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
