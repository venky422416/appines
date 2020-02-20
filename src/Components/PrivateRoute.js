import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuth, ...rest }) => (
    <Route
        {...rest}
        render={props => {
            return !isAuth ? <Redirect to="/" /> : <Component {...props} />
        }}
    />
)

export default PrivateRoute;