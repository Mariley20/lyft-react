import React, { Component } from 'react';
import './Inicio.css';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom'

const Inicio = ( {model} ) => {

	return (
		<body className="primera">
    <div className="container">
      <div id="app-content">
        <header className="text-center">
          <div><img className="img-fluid logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Lyft_logo.svg/1200px-Lyft_logo.svg.png" /></div>
        </header>
        <section>
            <div className="row text-center">
              <div className="col-6 col-6">
                  <a className="btn btn-1 btn-lg" href="" role="button">Log in</a>
              </div>
              <div className="col-6 col-6">
                  <NavLink to={"/validarTelefono"} className="btn btn-2 btn-lg" href="" role="button">Sign up</NavLink>
              </div>
          </div>
        </section>
      </div>
    </div>
		</body>
	);
}

export default Inicio;
