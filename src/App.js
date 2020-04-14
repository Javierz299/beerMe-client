import React, { Component } from 'react';
import Nav from './Components/Nav/Nav'
import LandingPage from './Components/LandingPage/LandingPage'
import PublicOnlyRoute from './Utils/PublicOnlyroutes/PublicOnlyRoute'
import LoginPage from './Routes/LoginPage/LoginPage'
import SignUpPage from './Routes/SignUpPage/SignUpPage'
import { Route, Switch } from 'react-router-dom'
import './App.css';

class App extends Component {

  render(){
  return (
    <div className="App">

      <header className="App-header">
        <h1>Beer Me</h1>
        <Nav />
      </header>

    <div>
      <Switch>
         <Route exact path={"/"} component={LandingPage}/>
         <PublicOnlyRoute path={"/login"} component={LoginPage}/>
         <PublicOnlyRoute path={"/sign-up"} component={SignUpPage}/>

      </Switch>
    </div>

    </div>
  );
}
}

export default App;
