import React, { Component } from 'react'
import FoodSelect from './FoodSelect'
import ServingSelect from './ServingSelect'


class TableRow extends Component {

	state = {
		selected: false,
		foodId: '',
		searchResults: [],
		nutrientsReport: {},
		servingSize: '',
		servingNumbers: 1,
		calories: '',
		protein: '',
		fat: '',
		carbs: ''

	}

	handleServingSelect = (event) => {
		this.setState({servingNumbers: event.target.value})
	}

	handleSelect = (event) => {
		console.log("select value", event.target.value);
		console.log("integer?", typeof event.target.value)
		this.setState({foodId: event.target.value}, this.fetchNutrientContent)
	}

	fetchNutrientContent = () => {
			console.log(this.state.foodId, "food id inside fetch")
			const selectedFoodURL = 'https://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=LKVhrtgJHJPcK8G72law6xFCC7jpr6Fx5KUQXQVY&nutrients=205&nutrients=204&nutrients=208&nutrients=269&ndbno=' + this.state.foodId
			fetch(selectedFoodURL)
			.then(res => res.json())
			.then(json => this.setState({nutrientsReport: json.report.foods, 
																	 servingSize: json.report.foods[0].measure,
																	 calories: json.report.foods[0].nutrients[0].value, 
																	 protein: json.report.foods[0].nutrients[1].value, 
																	 fat: json.report.foods[0].nutrients[2].value, 
																	 carbs: json.report.foods[0].nutrients[3].value }))
	}

	handleChange = (event) => {
		this.setState({
			selected: !this.state.selected
		})
	}

	componentDidMount() {
		console.log("did mount")
		const queryURL = `https://api.nal.usda.gov/ndb/search/?format=json&q=${this.props.concept.name}&sort=n&max=10&offset=0&api_key=LKVhrtgJHJPcK8G72law6xFCC7jpr6Fx5KUQXQVY&ds=Standard%20Reference`
		fetch(queryURL)
		.then(res => res.json())
		.then(json => (json.list ? this.setState({searchResults: json.list.item}) : null))
	}


	render() {
		console.log("nutrients report", this.state.nutrientsReport)
		console.log("serving size", this.state.servingNumbers)
		return(
			<tr>
			 <td><input type="checkbox" onChange={this.handleChange} checked={this.state.selected} /></td>
			 <td className="food name">{this.props.concept.name}</td>
			 <td className="select-food"><FoodSelect options={this.state.searchResults} foodId={this.state.foodId} handleSelect={this.handleSelect}/> </td>
			 <td className="serving-size">{this.state.servingSize}</td>
			 <td className="serving-number"><ServingSelect handleServingSelect={this.handleServingSelect} value={this.state.servingNumbers}/></td>
			 <td className="calories">{this.state.calories * this.state.servingNumbers}</td>
			 <td className="protein">{this.state.protein * this.state.servingNumbers}</td>
			 <td className="fat">{this.state.fat * this.state.servingNumbers}</td>
			 <td className="carbs">{this.state.carbs * this.state.servingNumbers}</td>
		    </tr>
		)
	}
}
// report [object]
// :

	// foods
	// :
	// Array(1)
	// 0
	// :
				// measure
				// :
				// "1.0 oz"
				// name
				// :
				// "Babyfood, dinner, spaghetti and tomato and meat, toddler"
				// ndbno
				// :
				// "03051"
				// nutrients
				// :
								// Array(4)
								// 0: {nutrient_id: "208", nutrient: "Energy", unit: "kcal", value: "21", gm: 75}
								// 1: {nutrient_id: "269", nutrient: "Sugars, total", unit: "g", value: "--", gm: "--"}
								// 2: {nutrient_id: "204", nutrient: "Total lipid (fat)", unit: "g", value: "0.28", gm: 1}
								// 3: {nutrient_id: "205", nutrient: "Carbohydrate, by difference", unit: "g", value: "3.06", gm: 10.8}
								// length:4




export default TableRow