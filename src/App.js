import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
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
				                <a className="btn btn-2 btn-lg" href="" role="button">Sign up</a>
                    </div>
                </div>
              </section>
            </div>
          </div>
        );
    }
}

export default App;
