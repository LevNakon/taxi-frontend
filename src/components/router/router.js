import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import PATHS from '../../constants/routes';
import { PrivateRoute, PrivateRouteMain } from '../routerPrivate';
// import Main from '../main';
import Teleport from '../teleport';
import SignUp from '../signUp';

export default class Router extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Switch>
                <PrivateRouteMain exact path={PATHS.INDEX} component={Teleport} />
                <PrivateRoute path={PATHS.SIGNUP} component={SignUp} />
                {/* <Route component={Error404}/> */}
            </Switch>
        );
    };
};