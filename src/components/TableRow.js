import React from 'react'
import FoodSelect from './FoodSelect'


class TableRow extends React.Component {

	state = {
		selected: false,
		foodId: '',
		searchResults: ''
	}

	handleChange = (event) => {
		console.log(event.target.value)
		this.setState({
			selected: !this.state.selected
		})
	}

	
	// const selectedFoodURL = `https://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=LKVhrtgJHJPcK8G72law6xFCC7jpr6Fx5KUQXQVY&nutrients=205&nutrients=204&nutrients=208&nutrients=269&ndbno=${this.state.foodId}`

	componentDidMount = () => {
		const queryURL = `https://api.nal.usda.gov/ndb/search/?format=json&q=${this.props.concept.name}&sort=n&max=10&offset=0&api_key=LKVhrtgJHJPcK8G72law6xFCC7jpr6Fx5KUQXQVY&ds=Standard%20Reference`
		fetch(queryURL)
		.then(res => res.json())
		.then(json => {json.list ? this.setState({searchResults: json.list.item}) : null})
	}


	render() {
		console.log("from USDA pull", this.state.searchResults)
		return(
			<tr>
			 <td><input type="checkbox" onChange={this.handleChange} checked={this.state.selected} /></td>
			 <td>{this.props.concept.name}</td>
			 <td className="select-food"><FoodSelect options={this.state.searchResults} /> </td>
			 <td>{this.props.concept.name}</td>
			 <td>{this.props.concept.name}</td>
			 <td>{this.props.concept.name}</td>
			 <td>{this.props.concept.name}</td>
		    </tr>
		)
	}
}




export default TableRow