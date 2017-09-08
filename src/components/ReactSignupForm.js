import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

const ReactSignupForm = () => (
  <Form>
    <Form.Field>
      <label>username</label>
      <input type="text" placeholder='username' />
    </Form.Field>
    <Form.Field>
      <label>e-mail</label>
      <input type="email" placeholder='e-mail' />
    </Form.Field>
    <Form.Field>
      <label>password</label>
      <input type="password" placeholder='password' />
    </Form.Field>
      <Form.Field>
      <label>confirm password</label>
      <input type="password" placeholder='confirm password' />
    </Form.Field>
    <Button type='submit'>Sign up</Button>
  </Form>
)

export default ReactSignupForm