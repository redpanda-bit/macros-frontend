import React from 'react'
import ScreenTwo from './ScreenTwo'



class ScreenOne extends React.Component {

	state = {
		URLValue: "",
		concepts: []		
	}


	handleURLChange = (event) => {
		this.setState({URLValue: event.target.value})
	}


	handleClick = () => {
		const Clarifai = require('clarifai');
		const app = new Clarifai.App({apiKey: 'e7bdd0d7b13946c09e584fcdf6b93bc9'});
		app.models.predict("bd367be194cf45149e75f01d59f77ba7", this.state.URLValue)
			.then(res => this.setState({concepts: res.outputs[0].data.concepts }))
	}


	render() {
		return (
			<div>
				<div style={{float: "left"}}>
					<div>
						<h1>Pick a date</h1>
						<input type="date"/> 
					</div>
					<div>
						<h1>Enter your image URL</h1>
						<input onChange={this.handleURLChange} type="url" />
					</div>
					<div>
						<button onClick={this.handleClick}>Submit</button>
					</div>
					<br></br>
				</div>
				<div style={{float: "right"}}>
					<img alt="food" src={this.state.URLValue} style={{height: "150px"}}/>
				</div>
				<br></br>
				{this.state.URLValue === "" ? null : <ScreenTwo handleLog={this.props.handleLog} concepts={this.state.concepts}/>}
			</div>
			)
	}
}

export default ScreenOne