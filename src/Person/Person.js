// Convention is to capitalize file names for components
// At its basic, a component is just a function that returns JSX
import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = (props) => {
    // Output dynamic content within JSX. It must be wrapped in {}.
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p> {/* children is a reserved word in JSX. This will access content placed between open/close tags of the component. */}
            <input type='text' onChange={props.changed} value={props.name}/> {/* Two-way binding: update the state (onChange) and see the current state (value) */}
        </div>
    )
}

export default Radium(person);