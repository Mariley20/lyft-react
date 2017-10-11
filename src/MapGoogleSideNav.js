import React, { Component } from 'react';
import './MapGoogleSideNav.css';
class SideNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }

    }
    render() {
        const { model } = this.props;
        return (

            <div id="mySidenav" class="sidenav">
                <a href="javascript:void(0)" className="closebtn" onclick={e => { model.closeNav() }}>&times;</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
            </div>

            <h2>Animated Sidenav Example</h2>
            <p>Click on the element below to open the side navigation menu.</p>
            <span style="font-size:30px;cursor:pointer" onclick={e => { model.openNav() }}>&#9776; Usuario</span>

     );
    }

}
