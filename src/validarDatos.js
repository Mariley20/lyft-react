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
						<a href="javascript:window.history.back();"><i className="fa fa-angle-left fa-3x"></i></a>
					    </div>
			            <div className="col-md-9 col-sm-9  text-center title">
				        <h1>Sign up</h1>
				        <p>Join now for free ride credit</p>
	       			    </div>
  				    </div>
		        	</header>
					<form
						onSubmit={e => {
						e.preventDefault();
						model.addUser();
						}}
					>
                    {/* <div className="container"> */}
                      <div className="row">
                    {/* Nombre y apellido input */}
					  <div className="form-group col-md-12">
                            <div className="input-group">
                             <span className="input-group-addon"><i className="fa fa-user-o" aria-hidden="true"></i></span>
                             <input  onChange={e => (model.userInfo.name = e.target.value)} type="text"  className="form-control" placeholder="First Name"/>
							 <span className="input-group-addon spanLastName"></span>
	                    	 <input  onChange={e => (model.userInfo.surname = e.target.value)} type="text"  className="form-control"  placeholder="Last Name"/>
							</div>
                        </div>
                         {/* <!-- Email input --> */}
						 <div className="form-group col-md-12" >
                                	<div className="input-group">
	                                    <div className="input-group-addon"><i className="fa fa-envelope-o" aria-hidden="true"></i>
	                                    </div>
	                                    <input onChange={e => (model.userInfo.email = e.target.value)}  type="text" className="form-control"  placeholder="Email"/></div>
                                </div> 
     				
                                 
                      </div>
                    {/* </div> */}
                   
                
                {/* Para mi boton de enviar */}
				{/* <section className="container-fluid form"> */}
					<div className="text-center">
					<label className="form-check-label text-center">
						<input className="form-check-input" id="agreeUser" type="checkbox" onChange={onInputChange}/>
						I agree to Lyft's <a href="lyft.com"> Terms of Service</a>
					</label>
					</div>
					{
						this.state.goFordward ?
							<NavLink
								to={"/mapaGoogle"}
								className="btn btn-lg btn-block btn-lyft">Next</NavLink>
							:
							<button className="btn btn-lg btn-block btn-lyft disabled">Next</button>

					}

				{/* </section> */}
				</form>
            </div>
        
        );
    }
}

export default ValidarDatos;
