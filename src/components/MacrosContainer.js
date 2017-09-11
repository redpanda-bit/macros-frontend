import React from 'react'
import ScreenOne from './ScreenOne'
import ScreenTwo from './ScreenTwo'


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