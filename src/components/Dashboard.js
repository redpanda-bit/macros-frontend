import React from 'react'
import DashboardRow from './DashboardRow'

class Dashboard extends React.Component {

	render(){
		const meals = this.props.foodLog.map((meal, index) => <DashboardRow key={index} meal={meal}/>)
		return(
				<div>
				<br></br>
				<table className="ui red table">
				  <thead>
				    <tr>
					    <th>Date</th>
					    <th>Meal</th>
					    <th>Name</th>
					    <th>Total calories</th>
					    <th>Total protein (g)</th>
					    <th>Total fat (g)</th>
					    <th>Total carbs (g)</th>
				  	</tr>
				  </thead>
				  <tbody>
				  	{meals}
				  </tbody>
				</table>
			</div>		
		)
	}


}


export default Dashboard