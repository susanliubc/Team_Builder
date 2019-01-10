import React, { Component } from 'react';
import Meteor from 'meteor/meteor';

class Logout extends Component {
    render() {
        Meteor.logout();
        return (
            <div className="container">
                <h3>You are signed out</h3>
            </div>
        )
    }
}

export default Logout;