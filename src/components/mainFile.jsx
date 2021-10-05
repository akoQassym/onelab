import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Dashboard from './dashboard/mainFile.jsx';
import Error from './error/errorPage.js';
import UnderConstruction from './error/underConstruction.js';

function MainFile() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/favourite" component={UnderConstruction} />
                <Route exact path="/nearby" component={UnderConstruction} />
                <Route path="/404" component={Error} />
                <Redirect to="/404" />
            </Switch>
        </Router>
    )
}

export default MainFile;