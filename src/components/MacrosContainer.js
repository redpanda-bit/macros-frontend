import React from 'react'

class MacrosContainer extends React.Component {
	render() {
		return (
			<div>
			 {this.props.isLoggedIn ? <button onClick={this.props.handleLogOut}>Log out</button> : null }
			</div>
			)
	}
}

export default MacrosContainer