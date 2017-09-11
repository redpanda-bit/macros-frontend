import React from 'react'
import ScreenOne from './ScreenOne'
import Dashboard from './Dashboard'




class MacrosContainer extends React.Component {

	state = {
		showDashboard: false,
		foodLog: []
	}

	handleLog = (calorieTotal, proteinTotal, fatTotal, carbTotal) => {
		this.setState({showDashboard: true, foodLog: [...this.state.foodLog, {calorieTotal: calorieTotal, proteinTotal: proteinTotal, fatTotal: fatTotal, carbTotal: carbTotal}]})
	}


	render() {
		console.log("macros state", this.state.foodLog);
		return (
			<div>
			 {this.props.isLoggedIn ? <button onClick={this.props.handleLogOut}>Log out</button> : null }
			 {!this.state.showDashboard ? <ScreenOne handleLog={this.handleLog}/> : null } 
			 {this.state.showDashboard ? <Dashboard foodLog={this.state.foodLog} /> : null}
			</div>
			)
	}
}

export default MacrosContainer