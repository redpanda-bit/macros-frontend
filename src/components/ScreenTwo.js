import React from 'react'
import TableRow from './TableRow'

class ScreenTwo extends React.Component {

	

	render(){
		console.log("screentwo props", this.props)
		const nutrientRows = this.props.concepts.map((concept, index) => <TableRow key={index} concept={concept} />)
		
		return(
			<div>
				<table className="ui red table">
				  <thead>
				    <tr>
					    <th>Include?</th>
					    <th>Food</th>
					    <th>Select</th>
					    <th>Calories</th>
					    <th>Protein</th>
					    <th>Fat</th>
					    <th>Carbs</th>
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