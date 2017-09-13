import React from 'react'
import { Grid, Button, Modal } from 'semantic-ui-react'

export class ModalSignupForm extends React.Component {

  state = {
    usernameInput: "",
    emailInput: "",
    passwordInput: "",
    confirmPasswordInput: ""
  }

  handleSignupSubmit = (event) => {
    event.preventDefault()

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

    return(
        
        <Modal 
          trigger={<a href="#">Sign up</a>}
          
        >
        <Grid
            textAlign='center'
            style={{ height: '100%' }}
            verticalAlign='middle'
          >
        <Grid.Column style={{ maxWidth: 450 }}>
        <Modal.Content >
              <form className="ui form eight wide" onSubmit={this.handleSignupSubmit}>
                <div className="field">
                  <input type="text" onChange={this.handleUsernameChange} value={this.state.usernameInput} placeholder="username"/>
                </div>
                <div className="field">
                  <input type="email" onChange={this.handleEmailChange} value={this.state.emailInput} placeholder="email" />
                </div>
                <div className="field">
                  <input type="password" onChange={this.handlePasswordChange} value={this.state.passwordInput} placeholder="password" />
                </div>
                <div className="field">
                  <input type="password" onChange={this.handleConfirmPasswordChange} value={this.state.confirmPasswordInput} placeholder="confirm password" />
                </div>
                  <input className="ui button" type="submit" value="Sign up"/> 
              </form>
        </Modal.Content>
        </Grid.Column>
        </Grid>
        </Modal>
  )}

}


export default ModalSignupForm