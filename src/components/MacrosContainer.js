import React from 'react'
import ScreenOne from './ScreenOne'


class MacrosContainer extends React.Component {
	render() {
		return (
			<div>
			 {this.props.isLoggedIn ? <button onClick={this.props.handleLogOut}>Log out</button> : null }
			 <ScreenOne />
			</div>
			)
	}
}

export default MacrosContainer