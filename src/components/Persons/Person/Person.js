// Convention is to capitalize file names for components
// At its basic, a component is just a function that returns JSX
import React, {Component} from 'react';
import classes from './Person.module.css';

class Person extends Component {
    render () {
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p> {/* children is a reserved word in JSX. This will access content placed between open/close tags of the component. */}
                <input type='text' onChange={this.props.changed} value={this.props.name}/> {/* Two-way binding: update the state (onChange) and see the current state (value) */}
            </div>
        )
    }
}

export default Person;