import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import auth from '../../services/auth';
import PATHS from '../../constants/routes';
import Main from '../main';


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
            return !auth.isAuthenticated ? <Main {...props} /> : <Component {...props} />
        }}
    />
);

export {
    PrivateRoute,
    PrivateRouteMain
};