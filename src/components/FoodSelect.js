import React from 'react'

const FoodSelect = (props) => {
	// const options = props.options.map(option => <option value={option.nbdno}>{option.name}</option> )
	return(
		<select>
		  <option value="volvo">Volvo</option>
		  <option value="saab">Saab</option>
		  <option value="mercedes">Mercedes</option>
		  <option value="audi">Audi</option>
		</select>		
		)
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
// 0