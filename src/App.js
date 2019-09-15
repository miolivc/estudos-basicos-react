import React from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';
import routesConfig from './routesConfig';

function App() {
	return (
		<div>
			<div className="App">
				<Link to="/">Home</Link>
				<Link to="/user">User</Link>
			</div>

			{routesConfig.map((route) => {
				return <Route
					key={route.path}
					path={route.path}
					component={route.component}></Route>
			})}
		</div>
	);
}

export default App;