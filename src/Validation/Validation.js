import React from 'react';

const validation = (props) => {
	return (
		<div>
			{
				props.length > 5 ?
				<p>Word is long enough.</p> :
				<p>Word is too short.</p>
			}
		</div>
	)
}

export default validation;