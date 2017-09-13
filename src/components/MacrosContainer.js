import React from 'react'
import ScreenOne from './ScreenOne'
import ScreenTwo from './ScreenTwo'



class MacrosContainer extends React.Component {

	state = {
		showResults: false,
		showLoader: false,
		mealName: "",
		date: "",
		URLValue: "",
		foodLog: [], 
		concepts: [],
		category: 'select',
		allMeals: []
	}

	handleName = (event) => {
		this.setState({mealName: event.target.value})
	}

	handleCategory = (event) => {
		this.setState({category: event.target.value})
	}

	handleLog = (calorieTotal, proteinTotal, fatTotal, carbTotal) => {
		this.setState({showResults: !this.state.showResults})
		const date_date = new Date()
		console.log(this.props.history, "THESE ARE HISTORY PROPS")
		console.log("currentUser", this.props.currentUser)
		this.setState({foodLog: [...this.state.foodLog, {meal: {name: this.state.mealName, category: this.state.category, user_id: this.props.currentUser.id, date_string: this.state.date, date_date: date_date, image_url: this.state.URLValue, total_cal: calorieTotal, total_protein: proteinTotal, total_fat: fatTotal, total_carbs: carbTotal}}]}, this.postMeal) 

	}


	postMeal = () => {
		const mealJSON = JSON.stringify(this.state.foodLog.slice(-1)[0])
    return fetch('http://localhost:3000/api/v1/meals',{
      method: 'post',
      body: mealJSON,
      headers: {
        "Content-Type":"application/json",
        "Accept":"application/json"
      }
    })
      .then(res => res.json())
      .then(res => console.log(res))
      .then(res => this.props.data.history.push('/dashboard'))

	}


	handleDate = (event) => {
		this.setState({date: event.target.value}, () => console.log(this.state.date))
	}

	handleURLChange = (event) => {
		this.setState({URLValue: event.target.value})
	}

	handleSubmitToAPI = (e) => {
		e.preventDefault()
		this.setState({showResults: !this.state.showResults, showLoader: !this.state.showLoader})
		const Clarifai = require('clarifai');
		const app = new Clarifai.App({apiKey: 'e7bdd0d7b13946c09e584fcdf6b93bc9'});
		app.models.predict("bd367be194cf45149e75f01d59f77ba7", this.state.URLValue)
			.then(res => this.setState({concepts: res.outputs[0].data.concepts, showLoader: !this.state.showLoader }))
	}

	render() {
		// console.log("macros state", this.state.foodLog);
				console.log(this.props.data.history, "macros history")

		return (
			<div>
			 <ScreenOne handleCategory={this.handleCategory} category={this.state.category} handleDate={this.handleDate} handleURLChange={this.handleURLChange} handleSubmitToAPI={this.handleSubmitToAPI} URLValue={this.state.URLValue} mealName={this.state.mealName} handleName={this.handleName}/>  
			 {this.state.showResults ? <ScreenTwo data={this.props.data} handleLog={this.handleLog} concepts={this.state.concepts}/> : null}
			</div>
			)
	}
}

export default MacrosContainer