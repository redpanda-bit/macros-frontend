import React from 'react'
import { Button, Modal } from 'semantic-ui-react'

export class ModalSignupForm extends React.Component {

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




  render(){
      console.log(this.props, "ModalSignupForm props")

    return(
        <Modal
          trigger={<Button>Sign up</Button>}
        >
        <Modal.Content>
              <form onSubmit={this.handleSignupSubmit}>
                <input type="text" onChange={this.handleUsernameChange} value={this.state.usernameInput} placeholder="username"/>
                <input type="email" onChange={this.handleEmailChange} value={this.state.emailInput} placeholder="email" />
                <input type="password" onChange={this.handlePasswordChange} value={this.state.passwordInput} placeholder="password" />
                <input type="password" onChange={this.handleConfirmPasswordChange} value={this.state.confirmPasswordInput} placeholder="confirm password" />
                <input type="submit" value="Sign up"/> 
              </form>
        </Modal.Content>
        </Modal>
  )}

}


export default ModalSignupForm