import React, { Component } from 'react';
import logo from './logo.svg';
import './ValidarTelefono.css';

class App extends Component {
    render() {
        return (
            <center>
                <div className="App">
                    <header>
                        <div className="row sign-up">
                            <div className="col-sm-12">
                                <div className="img-logo">
                                    <img className="imgProfesore" src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c525.png" alt="" />
                                </div>
                                <h5>
                                    Join now for free ride credit
                                </h5>
                            </div>
                        </div>
                    </header>
                    <section>
                        <form>
                            <div className="col-auto">
                                <label
                                    className="sr-only"
                                    htmlFor="inlineFormInputGroup">Username</label>
                                <div className="input-group mb-2 mb-sm-0">
                                    <div className="input-group-addon">
                                        <select
                                            title="Select your surfboard"
                                            className="selectpicker input-group-addon">
                                            <option alt>
                                                PERÚ +51
                                                    </option>
                                            <option>
                                                CHILE +56
                                                    </option>
                                            <option>
                                                MEXICO +52
                                                        </option>
                                        </select>
                                    </div>
                                    <input
                                        id="inlineFormInputGroup"
                                        type="number"
                                        name="numero"
                                        className="form-control"
                                        placeholder={958297890}
                                        required />
                                </div>
                                <div className="col-auto">
                                    <div className="form-check mb-2 mb-sm-0">
                                        <label className="form-check-label">
                                            <input
                                                className="form-check-input"
                                                type="checkbox" />
                                        </label>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <button type="submit" className="btn btn-primary">Next</button>
                                </div>
                            </div>
                        </form>

                        <h5>We'll send a text to verify your phone</h5>
                    </section>
                </div>
            </center>
        );
    }
}

export default App;
