import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
          <div class="fluid-container">
            <div id="app-content">
              <header>
                <div><img src="assets/img/logo.png" class="img-responsive logo" /></div>
              </header>
              <section>
                <div class="container">
                  <div class="row ">
                    <div class="col-sm-6 col-xs-6 btn-container text-right">
				                <a class="btn btn-1 btn-lg" id="login" href="#" role="button">Log in</a>
                    </div>
                    <div class="col-sm-6 col-xs-6 btn-container ">
				                <a class="btn btn-2 btn-lg" href="index-phone.html" role="button">Sign up</a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        );
    }
}

export default App;
