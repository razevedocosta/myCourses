import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';

import Home from '../pages/Home';

const Routes: React.FC = () => {

    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/dashboard" exact component={Dashboard} />
        </Switch>
    )
};

export default Routes;
