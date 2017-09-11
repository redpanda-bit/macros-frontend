import React from 'react';

class DashboardRow extends React.Component {

  render() {
    return (
    	<tr>
				 <td className="food name"></td>
				 <td className="select-food"></td>
				 <td className="calories">{this.props.meal.calorieTotal}</td>
				 <td className="protein">{this.props.meal.proteinTotal}</td>
				 <td className="fat">{this.props.meal.fatTotal}</td>
				 <td className="carbs">{this.props.meal.carbTotal}</td>
		  </tr>
    )
  }
}


export default DashboardRow