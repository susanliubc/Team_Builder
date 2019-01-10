import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { NavLink, withRouter } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';

class Navbar extends Component {
    render() { /*
        const { loading } = this.props;
        console.log(this.props);
        if(!loading) { 
            return this.renderUser();
        } else {
            console.log('Loading data');
        }
    };
    renderUser() { */
        return (
            <nav id='header-nav' className='navbar navbar-default navbar-fixed-top'>
                <div className="container-fluid">
                    <ul className="nav navbar-nav">
                        <li><NavLink exact to='/'>Home</NavLink></li>
                        <li><NavLink to='/personal'>Personal</NavLink></li>
                        <li><NavLink to='/teams'>Teams</NavLink></li>
                        <li><NavLink to='/logout'>Logout</NavLink></li>
                    
                        <li><NavLink to='/login'>Login</NavLink></li>
                        <li><NavLink to='/register'>Register</NavLink></li>
                        
                    </ul>
                </div>
            </nav>
        );
    };
};
 

export default withRouter(Navbar);