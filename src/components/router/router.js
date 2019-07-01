import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import PATHS from '../../constants/routes';
import PrivateRoute from '../routerPrivate';
import Main from '../main';

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path={PATHS.INDEX} component={Main} />
                    {/* <PrivateRoute path={PATHS.SIGNUP} component={SignUpForm} /> */}
                </Switch>
            </BrowserRouter>
        );
    };
};
