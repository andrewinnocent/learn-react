import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {
  constructor(props) { // base constructor is always called with props
    super(props); // always called in base constructor.
    console.log('Persons.js inside constructor:', props);
  }

  componentWillMount() {
    console.log('Persons.js insided componentWillMount()');
  }

  componentDidMount() {
    console.log('Persons.js insided componentDidMount()');
  }

  render () {
    console.log('Persons.js inside render()');
    return this.props.persons.map((person, index) => {
      return <Person
      click={() => this.props.clicked(index)}
      name={person.name}
      age={person.age}
      key={person.id}
      changed={(e) => this.props.changed(e, person.id)} />
    })
  }
};

export default Persons;