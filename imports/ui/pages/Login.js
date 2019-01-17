import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import '../assets/css/bootstrap.min.css';
import '../assets/css/oneui.css';

class Login extends Component {
    state = {
        username: '',
        password: '',
        error: '',
        redirectToReferrer: false
    };
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };
    handleSubmit = (e) => {
        e.preventDefault();
        const { username, password } = this.state;
        console.log('state: ', this.state);
        Meteor.loginWithPassword({ username, password }, (err) => {
            if(err) {
                this.setState({ error: err.reason })
            } else {
                this.setState({ error: '', redirectToReferer: true })
            }
        });
        console.log('error: ', this.state.error);
    };
    render() {
        if(this.state.redirectToReferer) {
            return <Redirect to='/personal' />
        }
        return (
            <div className="container">
                <div className="content overflow-hidden">
                    <div className="row">
                        <div className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
                   
                            <div className="block block-themed animated fadeIn">
                                <div className="block-header bg-primary">
                                    <ul className="block-options">
                                        <li>
                                            <a href="#">forgot Password?</a>
                                        </li>
                                        <li>
                                            <a href="/register" data-toggle="tooltip" data-placement="left" title="New Account"><i className="si si-plus"></i></a>
                                        </li>
                                    </ul>
                                    <h3 className="block-title">Login</h3>
                                </div>
                                <div className="block-content block-content-full block-content-narrow">
              
                                    <h1 className="h2 font-w600 push-30-t push-5">OneUI</h1>
                                    <p>Welcome, please login.</p>

                                    <form className="js-validation-login form-horizontal push-30-t push-50" onSubmit={this.handleSubmit} method="post">
                                        <div className="form-group">
                                            <div className="col-xs-12">
                                                <div className="form-material form-material-primary floating">
                                                    <input className="form-control" type="text" id="login-username" name="username"
                                                    onChange={this.handleChange} />
                                                    <label htmlFor="login-username">Username</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-xs-12">
                                                <div className="form-material form-material-primary floating">
                                                    <input className="form-control" type="password" id="login-password" name="password"
                                                    onChange={this.handleChange} />
                                                    <label htmlFor="login-password">Password</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-xs-12">
                                                <label className="css-input switch switch-sm switch-primary">
                                                <input type="checkbox" id="login-remember-me" name="remember-me"
                                                onChange={this.handleChange} /><span></span> Remember Me?
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-xs-12 col-sm-6 col-md-4">
                                                <button className="btn btn-block btn-primary" type="submit"><i className="si si-login pull-right"></i> Log in</button>
                                            </div>
                                        </div>
                                    </form>

                                    <div className="google-box">
                                        <div className="col-xs-12 col-sm-8 col-md-6">
                                            <button className="btn btn-block btn-success" onClick={this.handleClick}>Google Login</button>
                                        </div>
                                    </div>
                    
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

export default Login;
