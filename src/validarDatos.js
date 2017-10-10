import React, { Component } from 'react';
import logo from './logo.svg';
import './ValidarDatos.css';

class App extends Component {
    render() {
        return ( <div className = "App" >
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

                    <div class="container">
                      <div className="row">
                        <div className="form-group col-md-12" id="input-name-group">
                            <div className="input-group">
                             <span className="input-group-addon"><i className="fa fa-user-o" aria-hidden="true"></i></span>
                             <input  id="commentName" name="name" type="text" required className="form-control" placeholder="First Name"/>
                             <span className="input-group-addon spanLastName"></span>
	                                    <input id="commentLastName" name="lastname" type="text"  className="form-control" required placeholder="Last Name"/>
                            </div>
                        </div>
                        <span className="help-block" id="commentNamePrompt"></span>
                        <span className="help-block" id="commentLastNamePrompt"></span>
                        {/* <!-- Email input --> */}
                                <div className="form-group col-md-12" id="input-email-group">
                                	<div className="input-group">
	                                    <div className="input-group-addon"><i className="fa fa-envelope-o" aria-hidden="true"></i>
	                                    </div>
	                                    <input id="commentEmail" name="email" type="text" className="form-control" required placeholder="Email"/>
                                	</div>
                                </div>  
                                {/* <!-- Mensajes para email input-->  */}
                                <span className="help-block" id="commentEmailPrompt"></span>
					        
					       {/* <!-- Mensaje de boton Next --> */}
					        <div className="form-group">
					        	<div id="commentPrompt" className="alert">
					      		</div>
					        </div> 
                            <div class="container">
					<div class="row ">
						<div class="col-md-10 col-xs-offset-1 text-center">
                            <div class="checkbox">
                                <input type="checkbox" name="checkbox" id="commentInfo"/> I agree to Lyft's <span> Terms of Service</span>
                            </div>
                            <span id="commentInfoPrompt"></span>
						</div>
					</div>
				</div>
                <footer>
				<div className="container">
					<div className="row">
				        <div className="col-md-12 text-center">
							<button type="button" className="btn btn-lg btn-login" id="btnValidation" >Next</button>
						</div>
					</div>
				</div>
			</footer>
                      </div>
                    </div>
                </div>
        
        );
    }
}

export default App;
