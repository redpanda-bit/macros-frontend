import React, { Component } from 'react';
import './App.css';
import Auth from './adapters/Auth'
import LoginFormTwo from './components/LoginFormTwo'
import SignupForm from './components/SignupForm'
import ModalSignupForm from './components/ModalSignupForm'
import MacrosContainer from './components/MacrosContainer'
import Dashboard from './components/Dashboard'
import Account from './components/Account'
import About from './components/About'

import { Route, Redirect } from 'react-router-dom'
import authorize from './authorize'

import { Menu, Segment, Icon } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class App extends Component {

  state = {
    currentUser: {},
    isLoggedIn: localStorage.getItem('jwt'),
    activeItem: 'home'
  }

  componentDidMount() {
    console.log("I am mounting in APP")
    if(this.state.isLoggedIn){
        Auth.me()
        .then(userJSON => this.setState({currentUser: userJSON}, ()=> console.log("USERJSON render", this.state.currentUser)))
    }
  }


  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  loginUser = (userParams) => {
    Auth.login(userParams)
      .then(user => {
        this.setState({
          currentUser: user.user,
          isLoggedIn: true
        })
        localStorage.setItem('jwt', user.jwt)
        localStorage.setItem('user', user.user)
        localStorage.setItem('user_id', user.user.id)
        localStorage.setItem('meals', user.user.meals)
      })
  }

  signupUser = (userParams) => {
    Auth.signup(userParams)
      .then(user => {
        this.setState({
          currentUser: user.user,
          isLoggedIn: true
        })
        localStorage.setItem('jwt', user.jwt)
        localStorage.setItem('user', user.user)
        localStorage.setItem('user_id', user.user.id)
        localStorage.setItem('meals', user.user.meals)
      })
  }




  handleLogOut = () => {
    Auth.logOut();
    this.setState({
      isLoggedIn: false
    })

  }

  // we want if i click login I should login duh but also I should be redirected 
  // now what does that mean  well a couple things first it means that if im logged in I should never see the login screen
  // if im not logged in I should always see the login screen
  // we may have to use a Higher Order Component 
  // alternatively we could do better routing 


  render() {

    console.log(this.state.currentUser, "current user in app render")
    return (
        <div>
        <Menu pointing secondary>
          <Menu.Item name='macros' active={this.state.activeItem === 'macros'} onClick={this.handleItemClick} as={Link} to='/home'><Icon name='home' />Macros</Menu.Item>

          <Menu.Menu position='right'>

            {!this.state.isLoggedIn ? <Menu.Item name='sign up' active={this.state.activeItem === 'sign up'} onClick={this.handleItemClick}><Icon name="magic"/>Sign up</Menu.Item>
            : null 
            }



            {!this.state.isLoggedIn ? null
            : 
            <Menu.Item name='log meal' active={this.state.activeItem === 'log meal'} onClick={this.handleItemClick} as={Link} to='/logmeal'><Icon name='compose' />Log Meal</Menu.Item>}




            {!this.state.isLoggedIn ? null
            : 
            <Menu.Item name='dashboard' active={this.state.activeItem === 'dashboard'} onClick={this.handleItemClick} as={Link} to='/dashboard'><Icon name='bar chart' />Dashboard</Menu.Item>}




            {!this.state.isLoggedIn ? null
            : 
            <Menu.Item name='account' active={this.state.activeItem === 'account'} onClick={this.handleItemClick} as={Link} to='/account'><Icon name='user' />Account</Menu.Item>}

            {!this.state.isLoggedIn ? <Menu.Item name='login' active={this.state.activeItem === 'login'} onClick={this.handleItemClick}><Icon name='sign in' />Log in</Menu.Item>
            : 
            <Menu.Item name='logout' active={this.state.activeItem === 'logout'} onClick={this.handleLogOut}><Icon name='log out' />Log out</Menu.Item>}

          </Menu.Menu>
        </Menu>

        <Segment>
                <div>
                  <Route strict path="/" render={() => !this.state.isLoggedIn ? <Redirect to="/login"/> : null }/>
                  <Route path="/logmeal" render={(data) => <MacrosContainer data={data} currentUser={this.state.currentUser} handleLogOut={this.handleLogOut} isLoggedIn={this.state.isLoggedIn}/> }/>
                  <Route path="/login" render={() => !this.state.isLoggedIn ? <LoginFormTwo onLogin={this.loginUser} onSignup={this.signupUser}/> : <Redirect to="/logmeal"/>} />
                  <Route exact path="/dashboard" component={Dashboard} />
                  <Route exact path="/account" render={() => <Account user={this.state.currentUser}/>} />
                  <Route exact path="/home" component={About} />
                </div>
        </Segment>
      </div>




      



    );
  }
}



export default App;


// {user: {…}, jwt: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozfQ.UZpZ0GX2FpuRtCrVs-11JXhi8s6imktMwilhGUzcJJM"}
// jwt
// :
// "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozfQ.UZpZ0GX2FpuRtCrVs-11JXhi8s6imktMwilhGUzcJJM"
// user
// :
// created_at
// :
// "2017-09-07T21:29:23.757Z"
// email
// :
// "sur.snigdha@gmail.com"
// id
// :
// 3
// password_digest
// :
// "$2a$10$VoP8FHfbeJGpkOtgBiIwne87prk0H.yEFhOm4fRy1BOT7McmP4sla"
// updated_at
// :
// "2017-09-07T21:29:23.757Z"
// username
// :
// "snigdha"