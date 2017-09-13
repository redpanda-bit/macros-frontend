import React from 'react'
import DashboardRow from './DashboardRow'
import Auth from '../adapters/Auth'

class Dashboard extends React.Component {


	state = {
		allMeals: []
	}

	componentDidMount = () => {
		Auth.myMeals()
    .then(json => this.setState({allMeals: json}))
    
	}


	render(){
		const meals = this.state.allMeals.map((meal, index) => <DashboardRow key={index} meal={meal}/>)
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

// array of objects // category
// :
// null
// created_at
// :
// "2017-09-12T16:03:25.555Z"
// date_date
// :
// "2017-09-12T16:03:25.442Z"
// date_string
// :
// "2017-09-12"
// id
// :
// 1
// image_url
// :
// "http://www.todayifoundout.com/wp-content/uploads/2014/02/peanut-butter-and-jelly-340x226.jpg"
// name
// :
// "pb&j"
// total_cal
// :
// 229
// total_carbs
// :
// null
// total_fat
// :
// 5.1
// total_protein
// :
// 4.94
// updated_at
// :
// "2017-09-12T16:03:25.555Z"
// user_id
// :
// 3
// __proto__
// :
// Object