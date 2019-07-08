import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import auth from '../../services/auth';
import driverSwitch from '../../services/driver';
import PATHS from '../../constants/routes';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest}
        render={props => {
            return auth.isAuthenticated ? <Redirect to={PATHS.INDEX} /> : <Component {...props} />
        }}
    />
);

const PrivateRouteMain = ({ component: Component, ...rest }) => (
    <Route {...rest}
        render={props => {
            return !auth.isAuthenticated ? <Component {...props} /> : <Redirect to={PATHS.TELEPORT} />
        }}
    />
);

const PrivateRouteAuth = ({ component: Component, ...rest }) => (
    <Route {...rest}
        render={props => {
            return auth.isAuthenticated ? <Component {...props} /> : <Redirect to={PATHS.INDEX} />
        }}
    />
);

const PrivateRouteAuthDriver = ({ component: Component, ...rest }) => (
    <Route {...rest}
        render={props => {
            return auth.isAuthenticated && driverSwitch.isChecked ? <Component {...props} /> : <Redirect to={PATHS.INDEX} />
        }}
    />
);

const PrivateRouteAuthNoDriver = ({ component: Component, ...rest }) => (
    <Route {...rest}
        render={props => {
            return auth.isAuthenticated && !driverSwitch.isChecked ? <Component {...props} /> : <Redirect to={PATHS.DRIVER} />
        }}
    />
);

export {
    PrivateRoute,
    PrivateRouteMain,
    PrivateRouteAuth,
    PrivateRouteAuthDriver,
    PrivateRouteAuthNoDriver
};