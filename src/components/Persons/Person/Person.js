import React, {Component} from 'react';
import PropTypes from 'prop-types';

import classes from './Person.module.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';

class Person extends Component {
    constructor(props) { // base constructor is always called with props
        super(props); // always called in base constructor.
        console.log('Person.js inside constructor:', props);
      }
    
      componentWillMount() {
        console.log('Person.js insided componentWillMount()');
      }
    
      componentDidMount() {
        console.log('Person.js insided componentDidMount()');
      }

    render () {
        console.log('Person.js inside render()');
        return (
            <Aux classes={classes.Person}>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p> {/* children is a reserved word in JSX. This will access content placed between open/close tags of the component. */}
                <input type='text' onChange={this.props.changed} value={this.props.name}/> {/* Two-way binding: update the state (onChange) and see the current state (value) */}
            </Aux>
        )
    }
}

// Useful when working in teams, propTypes (Typechecking) sets rules for what's expected to be passed as a property. Validation errors are shown in the Console.
// Only used on classes
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);