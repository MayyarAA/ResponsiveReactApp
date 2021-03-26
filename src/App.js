import React from 'react';
import Navbar from './components/NavBar';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
	return (
		<div className='App'>
			<Router>
				<Navbar />
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/Services' exact component={Services} />
					<Route path='/Products' exact component={Products} />
					<Route path='/signup' exact component={SignUp} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
