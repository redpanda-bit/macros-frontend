import React from 'react'


class ScreenOne extends React.Component {

	render() {
		return (
			<div style={{height: "350px"}}>
				<form onSubmit={this.props.handleSubmitToAPI} className="ui form" style={{float: "left"}}>
					<div className="field">
						<label>Meal name</label>
						<input onChange={this.props.handleName} type="text" value={this.props.mealName}/> 
					</div>
					<div className="field">
						<label>Pick a date</label>
						<input onChange={this.props.handleDate} type="date"/> 
					</div>
					<div className="field">
						<label>Categorize your meal</label>
						<select onChange={this.props.handleCategory} value={this.props.category} className="ui fluid dropdown">
							<option value="select">Select</option>
							<option value="breakfast">Breakfast</option>
							<option value="lunch">Lunch</option>
							<option value="snack">Snack</option>
							<option value="dinner">Dinner</option>
						</select>
					</div>
					<div className="field">
						<label>Enter your image URL</label>
						<input onChange={this.props.handleURLChange} type="url" />
					</div>
					<div>
						<button className="ui button" type="submit">Submit</button>
					</div>
				</form>
				<div style={{float: "right"}}>
					<img alt="" src={this.props.URLValue} style={{height: "150px"}}/>
				</div>
			</div>
			)
	}
}


export default ScreenOne