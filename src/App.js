import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from './adapters/Auth'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import ModalSignupForm from './components/ModalSignupForm'
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
    Auth.logOut();
    this.setState({
      isLoggedIn: false
    })
    console.log("Auth logout state", this.state)

  }


  render() {
    console.log(this.signupUser, "sign up function")
    console.log(this.props)
    console.log("State", this.state)
    return (
      <div>
      <Route strict path="/macros" render={() => (this.state.isLoggedIn && this.props.location.pathname !== "/macros/signup" ? ( <Redirect to="/macros/home"/>) : (<Redirect to="/macros/login"/> ) )}/>
        <Route path="/macros/home" render={() => <MacrosContainer handleLogOut={this.handleLogOut} isLoggedIn={this.state.isLoggedIn}/> }/>
        <Route path="/macros/login" render={() => <LoginForm onLogin={this.loginUser} onSignup={this.signupUser}/> }/>
      </div>
    );
  }
}

export default App;