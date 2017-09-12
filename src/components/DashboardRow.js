import React from 'react';

class DashboardRow extends React.Component {

  render() {
    return (
    	<tr>
				 <td className="date">{this.props.meal.date_string}</td>
				 <td className="meal-img"><img alt="" src={this.props.meal.image_url} style={{height: "150px"}}/></td>
				 <td className="meal-name">{this.props.meal.name}</td>
				 <td className="calories">{this.props.meal.total_cal}</td>
				 <td className="protein">{this.props.meal.total_protein}</td>
				 <td className="fat">{this.props.meal.total_fat}</td>
				 <td className="carbs">{this.props.meal.total_carbs}</td>
		  </tr>
    )
  }
}


export default DashboardRow