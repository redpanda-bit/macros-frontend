import React from 'react'
import ModalSignupForm from './ModalSignupForm'

class LoginForm extends React.Component {

 state = {
    usernameInput: "",
    passwordInput: ""
  }

 handleSubmit = (event) => {
    event.preventDefault()



   console.log(this.state.usernameInput)
    console.log(this.state.passwordInput)
    const userParams = {
      username: this.state.usernameInput,
      password: this.state.passwordInput
    }
    this.props.onLogin(userParams)

   this.setState({
      usernameInput: "",
      passwordInput: ""
    })
  }

 handleUsernameChange = (event) => {

   this.setState({
      usernameInput: event.target.value
    })
  }

 handlePasswordChange = (event) => {
    this.setState({
      passwordInput: event.target.value
    })
  }
  render() {
    return (
      <div className="ui grid eight wide">
        <form onSubmit={this.handleSubmit} className="ui form">
          <div className="field">
            <input type="text" onChange={this.handleUsernameChange} value={this.state.usernameInput} placeholder="username"/>
          </div>
          <div className="field">
            <input type="password" onChange={this.handlePasswordChange} value={this.state.passwordInput} placeholder="password" />
          </div>
          <button className="ui button" type="submit">Log In</button> 
        </form>
        <div>
          <ModalSignupForm onSignup={this.props.onSignup}/>
        </div>
        
      </div>
    )
  }
}

export default LoginForm