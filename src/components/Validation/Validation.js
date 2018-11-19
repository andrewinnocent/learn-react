import React from 'react';

const validation = (props) => {
	let validationMessage = <p>Word is too short.</p>

	if (props.length > 5) {
		validationMessage = <p>Word is long enough.</p>
	}
	
	return (
		<div>
			{/* {
				props.length > 5 ?
				<p>Word is long enough.</p> :
				<p>Word is too short.</p>
			} */}
			{validationMessage}
		</div>
	)
}

export default validation;