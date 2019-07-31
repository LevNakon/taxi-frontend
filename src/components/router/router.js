import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import PATHS from '../../constants/routes';
import { PrivateRoute, PrivateRouteMain, PrivateRouteAuth, PrivateRouteAuthDriver, PrivateRouteAuthNoDriver } from '../routerPrivate';
import Teleport from '../teleport';
import SignUp from '../signUp';
import Main from '../main';
import User from '../user';
import Driver from '../driver';
import Car from '../car';
import Trips from '../trips'
import DriverRegistration from '../driverRegistration';
import Error404 from '../error404';

/**
 * Route component.
 * Give finctionality to route between pages.
 */
export default class Router extends Component {

    render() {
        return (
            <Switch>
                <PrivateRouteMain exact path={PATHS.INDEX} component={Main} />
                <PrivateRoute path={PATHS.SIGNUP} component={SignUp} />
                <PrivateRouteAuth path={PATHS.TELEPORT} component={Teleport} />
                <PrivateRouteAuth path={PATHS.USER} component={User} />
                <PrivateRouteAuth path={PATHS.TRIPS} component={Trips} />
                <PrivateRouteAuthNoDriver path={PATHS.REGISTR_DRIVER} component={DriverRegistration} />
                <PrivateRouteAuthDriver path={PATHS.DRIVER} component={Driver} />
                <PrivateRouteAuthDriver path={PATHS.CAR} component={Car} />
                <Route component={Error404} />
            </Switch>
        );
    };
};