import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Dashboard from './dashboard/mainFile.jsx';
import Error from './error/errorPage.js';

function MainFile() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Dashboard} />
                {/* <Route exact path="/cart" component={Cart} />
                <Route exact path="/product/:productId" component={Product} />
                <Route exact path="/all" component={Products} /> */}
                <Route path="/404" component={Error} />
                <Redirect to="/404" />
            </Switch>
        </Router>
    )
}

export default MainFile;