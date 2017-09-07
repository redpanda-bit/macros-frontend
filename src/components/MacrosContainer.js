import React from 'react'

class MacrosContainer extends React.Component {
	render() {
		return (
			<div>
			 {localStorage.getItem('jwt') ? <button onClick={this.props.handleLogOut}>Log out</button> : null 
 			 }
			
			</div>
			)
	}
}

export default MacrosContainer