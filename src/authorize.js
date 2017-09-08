
import React from 'react'

function authorize(RenderedComponent, props) {
	return class extends React.Component {

		contextTypes: {
 	   		router: React.PropTypes.func
 		 }


		componentDidMount() {
			if (localStorage.getItem("jwt")) {

			} else {
				this.props.history.push('beef')

			}

		}


		render() {
			return (<RenderedComponent {...props} />)
		}
	}
}

export default authorize