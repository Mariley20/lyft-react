import React, { Component } from 'react';
// import logo from './logo.svg';
import './ValidarDatos.css';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom'

class ValidarDatos extends Component {
	constructor (props) {
		super (props);
		this.state = {
			goFordward : false
		}
	}	

	render () {
		const {model} = this.props;
		console.log('SignUpForm');

		const onInputChange = (e) => {
			this.setState ({
				goFordward: e.target.checked
			});
		}

        return ( <div>
        
          		    <header>
				    <div className="row">
					    <div className="col-md-1 col-sm-1 ">
						<a href="index.html" className="goback" id="#btnGoBack"><i className="fa fa-angle-left fa-3x"></i></a>
					    </div>
			            <div className="col-md-9 col-sm-9  text-center title">
				        <h1>Sign up</h1>
				        <p>Join now for free ride credit</p>
	       			    </div>
  				    </div>
		        	</header>

                    <div className="container">
                      <div className="row">
                      {/* Nombre y apellido input */}
                        <div className="form-group col-md-12" id="input-name-group">
                            <div className="input-group">
                             <span className="input-group-addon"><i className="fa fa-user-o" aria-hidden="true"></i></span>
                             <input  id="commentName" name="name" type="text"  className="form-control" placeholder="First Name"yar required/>
                             <span className="input-group-addon spanLastName"></span>
	                                    <input id="commentLastName" name="lastname" type="text"  className="form-control"  placeholder="Last Name" required/>
                            </div>
                        </div>
                        {/* Mensajes para nombre y apellido input */}
                        <span className="help-block" id="commentNamePrompt"></span>
                        <span className="help-block" id="commentLastNamePrompt"></span>
                        {/* <!-- Email input --> */}
                                <div className="form-group col-md-12" id="input-email-group">
                                	<div className="input-group">
	                                    <div className="input-group-addon"><i className="fa fa-envelope-o" aria-hidden="true"></i>
	                                    </div>
	                                    <input id="commentEmail" name="email" type="text" className="form-control"  placeholder="Email" required/>
                                	</div>
                                </div>  
                                {/* <!-- Mensajes para email input-->  */}
                                <span className="help-block" id="commentEmailPrompt"></span>
					        
					       {/* <!-- Mensaje de boton Next --> */}
					        <div className="form-group">
					        	<div id="commentPrompt" className="alert">
					      		</div>
					        </div>                        
                      </div>
                    </div>
                    {/* para el checkbox */}
                   
                
                {/* Para mi boton de enviar */}
				<section className="container-fluid form">

					<label className="form-check-label">
						<input className="form-check-input" id="agreeUser" type="checkbox" onChange={onInputChange}/> I agree to Lyft's <a href="lyft.com"> Terms of Service</a>
					</label>

					{
						this.state.goFordward ?
							<NavLink
								to={"/lyftmap"}
								className="btn btn-lg btn-block btn-lyft">Next</NavLink>
							:
							<button
								className="btn btn-lg btn-block btn-lyft disabled">Next</button>

					}

				</section>
            </div>
        
        );
    }
}

export default ValidarDatos;
