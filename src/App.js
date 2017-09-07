import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from './adapters/Auth'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import MacrosContainer from './components/MacrosContainer'
import { Route, Redirect } from 'react-router-dom'

class App extends Component {

  state = {
    currentUser: {},
    isLoggedIn: false
  }


  loginUser = (userParams) => {
    Auth.login(userParams)
      .then(user => {
        this.setState({
          currentUser: user,
          isLoggedIn: true
        })
        localStorage.setItem('jwt', user.jwt)
      })
  }

  signupUser = (userParams) => {
    Auth.signup(userParams)
      .then(user => {
        this.setState({
          currentUser: user,
          isLoggedIn: true
        })
        localStorage.setItem('jwt', user.jwt)
      })
  }



  handleButtonClick = () => {
    Auth.me().then(user => {
      console.log(user)

    })

  }

  handleLogOut = () => {
    Auth.logOut()
  }

  render() {
    console.log(this.state)
    return (
      <div>
        { localStorage.getItem('jwt') ?  <Route path="/home" render={() => <MacrosContainer handleLogOut={this.handleLogOut}/> }/>   : <Redirect to="/login" /> }
        <Route path="/login" render={() => <LoginForm onLogin={this.loginUser}/> }/>
        <Route path='/signup' render={() => <SignupForm  onSignup={this.signupUser}/>} />
      </div>
    );
  }
}

export default App;