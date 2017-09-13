import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import ModalSignupForm from './ModalSignupForm'

class LoginFormTwo extends React.Component {

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


  render(){
    return(
        <div className='login-form'>
          {/*
            Heads up! The styles below are necessary for the correct render of this example.
            You can do same with CSS, the main idea is that all the elements up to the `Grid`
            below must have a height of 100%.
          */}
          <style>{`
            body > div,
            body > div > div,
            body > div > div > div.login-form {
              height: 100%;
            }
          `}</style>
          <Grid
            textAlign='center'
            style={{ height: '100%' }}
            verticalAlign='middle'
          >
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as='h2' color='black' textAlign='center'>
                <Image src='/logo-black.png' />
                {' '}Log in to your account
              </Header>
              <Form size='large' onSubmit={this.handleSubmit}>
                <Segment stacked>
                  <Form.Input onChange={this.handleUsernameChange} value={this.state.usernameInput}
                    fluid
                    icon='user'
                    iconPosition='left'
                    placeholder='username'
                  />
                  <Form.Input onChange={this.handlePasswordChange} value={this.state.passwordInput}
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='password'
                    type='password'
                  />

                  <Button color='black' fluid size='large'>Login</Button>
                </Segment>
              </Form>
              <Message>
                or <ModalSignupForm onSignup={this.props.onSignup}>Sign up</ModalSignupForm>
              </Message>
            </Grid.Column>
          </Grid>
        </div>
      )
  }
}

export default LoginFormTwo