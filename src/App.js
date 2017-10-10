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
import SignUpPhoneValidation from './SignUpPhoneValidation';
import ValidarDatos from './ValidarDatos';
import MapaGoogle from './MapaGoogle';

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
				<Route path="/signUpPhoneValidation" render={() => <SignUpPhoneValidation model={model}/>}/>
				<Route  path="/validarDatos" render={() => <ValidarDatos model={model} />}/>

				<Route  path="/mapaGoogle" render={() => <MapaGoogle model={model} />}/>

				<Route component={NotFound}/>
			</Switch>
		</div>
	</BrowserRouter>)
}

export default App;
