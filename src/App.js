import React, {Component} from 'react';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom'
import './App.css';

import Inicio from './Inicio';
import ValidarTelefono from './ValidarTelefono';
import ValidarDatos from './ValidarDatos';
import LyftMap from './LyftMap';

const NotFound = (props) => {
	return (
		<div><h2> Error 404! </h2></div>
	);
}

const App = (props) => {
	const {model} =  props;
	console.log('app.props', props)
	return (<BrowserRouter>
		<div>
			<Switch>
				<Route exact path="/"
				       render={() => <Redirect to= {'/inicio'}/>}/>
				<Route  path="/inicio" render={() => <Inicio model={model} />}/>
				<Route  path="/validarTelefono" render={() => <ValidarTelefono model={model} />}/>
				<Route  path="/validarDatos" render={() => <ValidarDatos model={model} />}/>

				<Route  path="/lyftmap" render={() => <LyftMap model={model} />}/>

				<Route component={NotFound}/>
			</Switch>
		</div>
	</BrowserRouter>)
}

export default App;
