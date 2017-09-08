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
          <input type="submit" value="Log in"/> 
        </form>
        <ModalSignupForm onSignup={this.props.onSignup}/>
      </div>
    )
  }
}

export default LoginForm





// <form class="ui form">
//   <div class="field">
//     <label>First Name</label>
//     <input type="text" name="first-name" placeholder="First Name">
//   </div>
//   <div class="field">
//     <label>Last Name</label>
//     <input type="text" name="last-name" placeholder="Last Name">
//   </div>
//   <div class="field">
//     <div class="ui checkbox">
//       <input type="checkbox" tabindex="0" class="hidden">
//       <label>I agree to the Terms and Conditions</label>
//     </div>
//   </div>
// </form>