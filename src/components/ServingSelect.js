import React from 'react'

const ServingSelect = (props) => {

	const options = []
	for (let i=0; i<10; i++) {
		options.push(<option key={i} value={i+1}>{i+1}</option>)
	}
	
	return(
			<select value={props.value} onChange={props.handleServingSelect}>
				{options}
			</select>		
	)

}


export default ServingSelect

				// <option value=1>1</option>
				// <option value=2>2</option>
				// <option value=3>3</option>
				// <option value=4>4</option>
				// <option value=5>5</option>
				// <option value=6>6</option>
				// <option value=7>7</option>
				// <option value=8>8</option>
				// <option value=9>9</option>
				// <option value=10>10</option>