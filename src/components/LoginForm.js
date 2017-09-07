import React from 'react'


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
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleUsernameChange} value={this.state.usernameInput} placeholder="username"/>
          <input type="password" onChange={this.handlePasswordChange} value={this.state.passwordInput} placeholder="password" />
          <input type="submit" value="Log in"/> 
        </form>
        <p>Or <a href="/signup" >Sign up!</a></p>
      </div>
    )
  }
}


export default LoginForm