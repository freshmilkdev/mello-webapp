import React from 'react';
import './App.css';
// import {BrowserRouter as Router, Switch} from "react-router-dom";
/* TODO: Only for deployment purposes */
import {HashRouter as Router, Switch} from "react-router-dom";
import {routes} from "./routes";
import {LoginPage} from "./pages/login";
import {AppRoute} from "./routes/AppRoute";
import {MenuPage} from "./pages/menu";
import {MaintenanceRequestPage} from "./pages/maintenance-request";
import {RequestPreviewPage} from "./pages/request-preview";
import {ConversationsPage} from "./pages/conversations";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <AppRoute path={routes.home} component={MenuPage} exact />
                    <AppRoute path={routes.login} component={LoginPage} isAuthProtected={false}/>
                    <AppRoute path={routes.maintenanceRequest} component={MaintenanceRequestPage} />
                    <AppRoute path={routes.requestPreview} component={RequestPreviewPage} />
                    <AppRoute path={routes.conversations} component={ConversationsPage} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
