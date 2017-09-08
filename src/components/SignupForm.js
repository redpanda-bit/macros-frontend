import React from 'react'


class SignupForm extends React.Component {

 state = {
    usernameInput: "",
    emailInput: "",
    passwordInput: "",
    confirmPasswordInput: ""
  }

 handleSignupSubmit = (event) => {
    event.preventDefault()



    console.log(this.state.usernameInput)
    console.log(this.state.emailInput)
    console.log(this.state.passwordInput)
    console.log(this.state.confirmPasswordInput)

  if (this.state.passwordInput === this.state.confirmPasswordInput) {
      const userParams = {
        username: this.state.usernameInput,
        email: this.state.emailInput,
        password: this.state.passwordInput
     }
     this.props.onSignup(userParams)
    } else {
      alert("Please make sure your passwords match")
    }
 
   this.setState({
      usernameInput: "",
      emailInput: "",
      passwordInput: "",
      confirmPasswordInput: ""
    })
  }

 handleUsernameChange = (event) => {

   this.setState({
      usernameInput: event.target.value
    })
  }


 handleEmailChange = (event) => {

   this.setState({
      emailInput: event.target.value
    })
  }


 handlePasswordChange = (event) => {
    this.setState({
      passwordInput: event.target.value
    })
  }

  handleConfirmPasswordChange = (event) => {
    this.setState({
      confirmPasswordInput: event.target.value
    })
  }


  render() {
    return (
        <form onSubmit={this.handleSignupSubmit} className="ui form">
          <input type="text" onChange={this.handleUsernameChange} value={this.state.usernameInput} placeholder="username"/>
          <input type="email" onChange={this.handleEmailChange} value={this.state.emailInput} placeholder="email" />
          <input type="password" onChange={this.handlePasswordChange} value={this.state.passwordInput} placeholder="password" />
          <input type="password" onChange={this.handleConfirmPasswordChange} value={this.state.confirmPasswordInput} placeholder="confirm password" />
          <input type="submit" value="Sign up"/> 
        </form>
    )
  }
}


export default SignupForm