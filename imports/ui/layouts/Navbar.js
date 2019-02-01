import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { NavLink, withRouter } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';

class Navbar extends Component {
    render() {
        return (
            <nav id='header-nav' className='navbar navbar-default navbar-fixed-top'>
                <div className="container-fluid">
                    <ul className="nav navbar-nav">
                        <li><NavLink exact to='/'>Home</NavLink></li>
                        { this.props.currentUser ? (
                        [<li><NavLink to='/personal'>Personal</NavLink></li>,
                        <li><NavLink to='/teams'>Teams</NavLink></li>,
                        <li><NavLink to='/logout'>Logout</NavLink></li>]
                        ) : (
                        [<li><NavLink to='/login'>Login</NavLink></li>,
                        <li><NavLink to='/register'>Register</NavLink></li>]
                        ) }
                    </ul>
                </div>
            </nav>
        );
    };
};
 
const NavbarContainer = withTracker(() => ({
    currentUser: Meteor.user() ? Meteor.user().username : ''
}))(Navbar);

export default withRouter(NavbarContainer);