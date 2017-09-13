import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import Auth from '../adapters/Auth'

class Account extends React.Component {

    state = {
      allMeals: []
    }

    componentDidMount = () => {
      Auth.myMeals()
      .then(json => this.setState({allMeals: json}))
    }



  render(){
      console.log("account user", this.props.user)
      if(this.props.user && this.props.user.created_at) {

      return(
      <Card>
        <Image src='/assets/images/avatar/large/matthew.png' />
        <Card.Content>
          <Card.Header>
            {this.props.user.username}
          </Card.Header>
          <Card.Meta>
            <span className='date'>
              Joined in {this.props.user.created_at.substring(0,4)}
            </span>
          </Card.Meta>
          <Card.Description>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='mail outline' />
            {this.props.user.email}
          </a>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            {this.state.allMeals.length} meals logged
          </a>
        </Card.Content>
      </Card>
    )
    } else {
      return (
        <div></div>)
    }
  }
}

export default Account