// Convention is to capitalize file names for components
// At its basic, a component is just a function that returns JSX
import React from 'react'

const person = (props) => {
    // Output dynamic content within JSX. It must be wrapped in {}.
    return (
        <div>
            <p>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p> {/* children is a reserved word in JSX. This will access content placed between open/close tags of the component. */}
        </div>
    )
}

export default person;