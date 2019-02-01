import React from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import NavbarContainer from './layouts/Navbar.js';
import Home from './pages/Home.js';
import Register from './pages/Register.js';
import Login from './pages/Login.js';
import Personal from './pages/Personal.js';
import TeamPage from './pages/Teams.js';
import Logout from './pages/Logout.js';


const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="header">
                    <NavbarContainer />
                </div>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/register' component={Register} />
                    <Route path='/login' component={Login} />
                    <ProtectedRoute path='/personal' component={Personal} />
                    <ProtectedRoute path='/teams' component={TeamPage} />
                    <ProtectedRoute path='/logout' component={Logout} />
                </Switch>
            </div>
        </BrowserRouter>
    )
};

/*
 * ProtectedRoute: Checks for Meteor login before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) => {
          const isLogged = Meteor.userId() !== null;
          return isLogged ?
              (<Component {...props} />) :
              (<Redirect to={{ pathname: '/login' }}/>
              );
        }}
    />
);


export default App;