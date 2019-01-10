import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';
import '../assets/css/bootstrap.min.css';
import '../assets/css/oneui.css';

class Register extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        error: '',
        redirectToReferer : false
    };
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
        //console.log('Change: ', this.state);
    };
    handleSubmit = (e) => {
        e.preventDefault();
        const { username, email, password } = this.state;
        //console.log('state: ', this.state);
        Accounts.createUser({ username, email, password }, (err) => {
            if(err) {
                this.setState({ error: err.reason })
            } else {
                this.setState({ error: '', redirectToReferer : true });
                this.props.history.push('/login')
            }
        });
        //console.log('error: ', this.state.error);
    };
    render() {
        return (
            <div className="container">
                <div className="content overflow-hidden">
                    <div className="row">
                        <div className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
                        
                            <div className="block block-themed animated fadeIn">
                                <div className="block-header bg-success">
                                    <ul className="block-options">
                                        <li>
                                            <a href="#" data-toggle="modal" data-target="#modal-terms">View Terms</a>
                                        </li>
                                        <li>
                                            <a href="/login" data-toggle="tooltip" data-placement="left" title="Log In"><i className="si si-login"></i></a>
                                        </li>
                                    </ul>
                                    <h3 className="block-title">Register</h3>
                                </div>
                                <div className="block-content block-content-full block-content-narrow">
                                
                                    <h1 className="h2 font-w600 push-30-t push-5">OneUI</h1>
                                    <p>Please fill the following details to create a new account.</p>
                                
                                    <form className="js-validation-register form-horizontal push-50-t push-50" onSubmit={this.handleSubmit}>
                                        <div className="form-group">
                                            <div className="col-xs-12">
                                                <div className="form-material form-material-success">
                                                    <input className="form-control" type="text" id="register-username" name="username" placeholder="Please enter a username" onChange={this.handleChange} />
                                                    <label htmlFor="register-username">Username</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-xs-12">
                                                <div className="form-material form-material-success">
                                                    <input className="form-control" type="email" id="register-email" name="email" placeholder="Please provide your email" onChange={this.handleChange} />
                                                    <label htmlFor="register-email">Email</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-xs-12">
                                                <div className="form-material form-material-success">
                                                    <input className="form-control" type="password" id="register-password" name="password" placeholder="Choose a strong password.." onChange={this.handleChange} />
                                                    <label htmlFor="register-password">Password</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-xs-12">
                                                <div className="form-material form-material-success">
                                                    <input className="form-control" type="password" id="register-password2" name="password2" placeholder="..and confirm it" onChange={this.handleChange} />
                                                    <label htmlFor="register-password2">Confirm Password</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-xs-12">
                                                <label className="css-input switch switch-sm switch-success">
                                                    <input type="checkbox" id="register-terms" name="register-terms" onChange={this.handleChange} /><span></span> I agree with terms &amp; conditions
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-xs-12 col-sm-6 col-md-5">
                                                <button className="btn btn-block btn-success" type="submit"><i className="fa fa-plus pull-right"></i> Sign Up</button>
                                            </div>
                                        </div>
                                    </form>
                                
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
            

                <div className="push-10-t text-center animated fadeInUp">
                    <small className="text-muted font-w600"><span className="js-year-copy"></span> &copy; OneUI 1.3</small>
                </div>
            

                <div className="modal fade" id="modal-terms" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-popout">
                        <div className="modal-content">
                            <div className="block block-themed block-transparent remove-margin-b">
                                <div className="block-header bg-primary-dark">
                                    <ul className="block-options">
                                        <li>
                                            <button data-dismiss="modal" type="button"><i className="si si-close"></i></button>
                                        </li>
                                    </ul>
                                    <h3 className="block-title">Terms &amp; Conditions</h3>
                                </div>
                                <div className="block-content">
                                    <p>Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.</p>
                                    <p>Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.</p>
                                    <p>Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.</p>
                                    <p>Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.</p>
                                    <p>Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.</p>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-sm btn-default" type="button" data-dismiss="modal">Close</button>
                                <button className="btn btn-sm btn-primary" type="button" data-dismiss="modal"><i className="fa fa-check"></i> I agree</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )  
    }
}

export default Register;