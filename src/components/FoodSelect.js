import React from 'react'

class FoodSelect extends React.Component {
	
	render() {
		const options = this.props.options.map((option, idx) => <option key={idx} value={option.ndbno}>{option.name}</option> )
		return(
			<select value={this.props.foodId} onChange={this.props.handleSelect} style={{width: "327px"}}>
				<option value="">Select</option>
				{options}
			</select>		
			)
	}
}

export default FoodSelect




// (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// 0
// :
// ds
// :
// "SR"
// group
// :
// "Fruits and Fruit Juices"
// name
// :
// "Abiyuch, raw"
// ndbno
// :
// "09427"
// offset
// :