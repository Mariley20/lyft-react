import React, { Component } from 'react';
import logo from './logo.svg';
import './ValidarTelefono.css';
import {
    NavLink,
} from 'react-router-dom'

class ValidarTelefono extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goFordward: false
        }

    }
    render() {
        const { model } = this.props;
        console.log('App');

        const onInputChange = (e) => {
            this.setState({
                goFordward: e.target.checked
            });
        }

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
                                            <option>
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
                                        type="tel"
                                        name="telefono"
                                        title="Escribre 9 digitos"
                                        className="form-control"
                                        placeholder={958297890}
                                        pattern="[0-9]{9}"
                                        required />
                                </div>
                                <div className="col-auto">
                                    <div className="form-check mb-2 mb-sm-0">
                                        <label className="form-check-label">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                onChange={onInputChange}
                                                required />
                                        </label>
                                    </div>
                                </div>
                                {
                                    this.state.goFordward ?
                                        <NavLink
                                            to={""}
                                            className="btn btn-lg btn-block btn-lyft">
                                        </NavLink>
                                        :
                                        <button className="btn btn-primary disabled">Next</button>
                                }
                            </div>
                            <div>
                                <video className="video-container video-container-overlay" autoPlay="true" loop muted={this.props.muted}>
                                    <source src={this.props.introVideo} type="video/mp4" />
                                </video>
                            </div>
                        </form>

                        <h5>We'll send a text to verify your phone</h5>
                    </section>
                </div>
            </center>
        );
    }
}

export default ValidarTelefono;
