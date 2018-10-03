// Convention is to capitalize file names for components
// At its basic, a component is just a function that returns JSX
import React from 'react'

const person = () => {
    // Output dynamic content within JSX. It must be wrapped in {}.
    return <p>I'm a Person and I am {Math.floor(Math.random() * 30)} years old!</p>
}

export default person;