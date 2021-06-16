import React from 'react';
import { Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route exact {...rest} render={props => (
		 <Component {...props} />
	)} />
)

export default PrivateRoute;