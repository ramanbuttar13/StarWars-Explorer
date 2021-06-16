import React, {useState} from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import { connect } from 'react-redux';

// Routes
import PublicRoute from './routes/PublicRoutes';
import mainRoutes from './routes/mainRoutes';

// UI
import Loader from './components/Loader'

const mapStateToProps = (state) => {
	return {
		loading: state.ui.loading,
	};
};

const App = ({loading}) => {
const publicRoutes = [...mainRoutes];
    return (
			<>
				<Router basename="/">
					<Switch>
						{publicRoutes.map((prop, key) => {
							if (prop.redirect)
								return (
									<Redirect
										from={prop.path}
										to={prop.pathTo}
										key={key}
										exact={true}
									/>
								);
							return (
							<PublicRoute
								key={key}
								path={prop.path}
								component={prop.component}
								exact={true}
							/>
							);
						})}
						<Redirect to="/" />
					</Switch>
				</Router>
				{loading && <Loader/>}
			</>
    );
}

export default connect(mapStateToProps)(App)