import React, { Component } from 'react';
import Nav from './Components/Nav/Nav'
import LandingPage from './Components/LandingPage/LandingPage'

import PublicOnlyRoute from './Utils/PublicOnlyroutes/PublicOnlyRoute'
import PrivateRoute from './Utils/PrivateRoute/PrivateRoute'

import LoginForm from './Components/LoginForm/LoginForm'
import SignUpPage from './Routes/SignUpPage/SignUpPage'
import ProfileRoute from './Routes/ProfileRoute/ProfileRoute'
import ProfilePage from './Components/ProfilePage/ProfilePage'

import { Route, Switch } from 'react-router-dom'
import './App.css';

class App extends Component {

  render(){
  return (
    <div id="App">

      <header className="App-header">
        <div id="Logo"><h1>Beer Me</h1></div>
        <div id="Nav"><Nav /></div>
      </header>

    <div>
      <Switch>
         <Route exact path={"/"} component={LandingPage}/>
         <PublicOnlyRoute path={"/login"} component={LoginForm}/>
         <PublicOnlyRoute path={"/sign-up"} component={SignUpPage}/>
         <PrivateRoute path={"/profile"} component={ProfileRoute}/>
      </Switch>
    </div>

    </div>
  );
}
}

export default App;
