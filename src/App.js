import React, { Component } from 'react';
import Nav from './Components/Nav/Nav'
import LandingPage from './Components/LandingPage/LandingPage'
import PublicOnlyRoute from './Utils/PublicOnlyroutes/PublicOnlyRoute'
import PrivateRoute from './Utils/PublicOnlyroutes/PrivateRoute/PrivateRoute'

import LoginPage from './Routes/LoginPage/LoginPage'
import SignUpPage from './Routes/SignUpPage/SignUpPage'
import ProfilePage from './Components/Profile/Profile'

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
         <PublicOnlyRoute path={"/login"} component={LoginPage}/>
         <PublicOnlyRoute path={"/sign-up"} component={SignUpPage}/>
         <PrivateRoute path={"/Profile/:id"} component={ProfilePage}/>
      </Switch>
    </div>

    </div>
  );
}
}

export default App;
