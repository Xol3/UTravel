import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';


export default class Header extends Component {

    render() {
        return (
            <React.Fragment>
                <NavLink to='/'><button className="button is-danger is-outlined">Home</button></NavLink>
                <NavLink to='/register'><button className="button is-danger is-outlined">Register</button></NavLink>
                <NavLink to='/login'><button className="button is-danger is-outlined">Login</button></NavLink>
            </React.Fragment>
        )
    }
}