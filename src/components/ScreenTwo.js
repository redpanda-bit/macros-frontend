import React from 'react'
import TableRow from './TableRow'

class ScreenTwo extends React.Component {

	render(){
		const nutrientRows = this.props.concepts.map((concept, index) => <TableRow key={index} concept={concept} />)
		return(
			<div>
				<table className="ui red table">
				  <thead>
				    <tr>
					    <th>Include?</th>
					    <th>Food</th>
					    <th>Select</th>
					    <th>Serving size</th>
					    <th>Number of servings</th>
					    <th>Calories (calories)</th>
					    <th>Protein (g)</th>
					    <th>Fat (g)</th>
					    <th>Carbs (g)</th>
				  	</tr>
				  </thead>
				  <tbody>
				    {nutrientRows}
				  </tbody>
				</table>
				<button>Log Meal</button>
			</div>		
		)
	}


}

export default ScreenTwo;