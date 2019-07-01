import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import auth from '../../services/auth';
import PATHS from '../../constants/routes';


const PrivateRoute = ({ component: Component, ...rest}) => (
    <Route {...rest}
        render={props =>{
            return ! auth.isAuthenticated ? <Redirect to={PATHS.SIGNIN} /> : <Component {...props} />
        }}
    />
);

export default PrivateRoute;