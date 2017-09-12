import React from 'react'


class ScreenOne extends React.Component {

	render() {
		return (
			<div>
				<div style={{float: "left"}}>
					<div>
						<h1>Meal name</h1>
						<input onChange={this.props.handleName} type="text" value={this.props.mealName}/> 
					</div>
					<div>
						<h1>Pick a date</h1>
						<input onChange={this.props.handleDate} type="date"/> 
					</div>
					<div>
						<h1>Select Category</h1>
						<select onChange={this.props.handleCategory} value={this.props.category}>
							<option value="select">Select</option>
							<option value="breakfast">Breakfast</option>
							<option value="lunch">Lunch</option>
							<option value="snack">Snack</option>
							<option value="dinner">Dinner</option>
						</select>
					</div>
					<div>
						<h1>Enter your image URL</h1>
						<input onChange={this.props.handleURLChange} type="url" />
					</div>
					<div>
						<button onClick={this.props.handleSubmitToAPI}>Submit</button>
					</div>
					<br></br>
				</div>
				<div style={{float: "right"}}>
					<img alt="food" src={this.props.URLValue} style={{height: "150px"}}/>
				</div>
				<br></br>
			</div>
			)
	}
}

export default ScreenOne