import React, { Component } from 'react';
import { Users } from '../../api/user/user.js';
import { Teams } from '../../api/team/team.js';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';
import Team from '../components/Team.js';
import { withTracker } from 'meteor/react-meteor-data';
import { Container, Card } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class Personal extends Component {
    
    state = {
        firstName: '',
        lastName: '',
        email: ''
    }; 

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };
    handleSubmit = (e) => {
        e.preventDefault();
        const { firstName, lastName, email } = this.state;
        const owner = Meteor.user().username;
        Users.insert({ firstName, lastName, email, owner }, this. insertCallback)
    };
    //Notify the user of the results of submission. If successful, clear the form
    insertCallback = (error) => {
        if(error) {
            Bert.alert({ type: 'danger', message: `Add failed: ${error.message}` })
        } else {
            Bert.alert({ type: 'success', message: 'Add succeed'});
        }
    };
    
    
    render() {
        return (
            <div className="container">
                <div className="content overflow-hidden">
                    <div className="row">
                        <div className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
                        
                            <div className="block block-themed animated fadeIn">
                                <div className="block-header bg-success">
                                    <h3 className="block-title">Personal</h3>
                                </div>
                                <div className="block-content block-content-full block-content-narrow">
                                
                                    <h1 className="h2 font-w600 push-30-t push-5">OneUI</h1>
                                    <p>Please fill the following details of personal information.</p>
                                
                                    <form className="js-validation-register form-horizontal push-50-t push-50" onSubmit={this.handleSubmit}>
                                        <div className="form-group">
                                            <div className="col-xs-12">
                                                <div className="form-material form-material-success">
                                                    <input className="form-control" type="text" id="firstname" name="firstName" placeholder="Please enter your first name" onChange={this.handleChange} />
                                                    <label htmlFor="firstname">First name</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-xs-12">
                                                <div className="form-material form-material-success">
                                                    <input className="form-control" type="text" id="lastname" name="lastName" placeholder="Please enter your lastname" onChange={this.handleChange} />
                                                    <label htmlFor="lastname">Last name</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-xs-12">
                                                <div className="form-material form-material-success">
                                                    <input className="form-control" type="email" id="email" name="email" placeholder="Please provide your email" onChange={this.handleChange} />
                                                    <label htmlFor="email">Email</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="col-xs-12 col-sm-6 col-md-5">
                                                <button className="btn btn-block btn-success" type="submit">Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                    
                                    
                                    <Container>
                                        <Card.Group>
                                            {this.props.teams.map((team, index) => <Team key={index} team={team} />)}
                                        </Card.Group>
                                    </Container>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
            

                <div className="push-10-t text-center animated fadeInUp">
                    <small className="text-muted font-w600"><span className="js-year-copy"></span> &copy; OneUI 1.3</small>
                </div>
            
            </div>
        )  
    }
}


export default withTracker(() => {
    //Get access to Personal component
    const subscription = Meteor.subscribe('Users');
    const subscription2 = Meteor.subscribe('Teams');
    return { 
        users: Users.find({}).fetch(),
        teams: Teams.find({}).fetch(),
        ready: (subscription.ready() && subscription2.ready() )
    };
})(Personal);

