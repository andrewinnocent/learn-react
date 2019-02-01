import React, {PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
  constructor(props) { // base constructor is always called with props
    super(props); // always called in base constructor.
    console.log('Persons.js inside constructor:', props);
  }

  componentWillMount() {
    console.log('Persons.js inside componentWillMount()');
  }

  componentDidMount() {
    console.log('Persons.js inside componentDidMount()');
  }

  componentWillReceiveProps(nextProps) {
    console.log('UPDATE Persons.js inside componentWillReceiveProps()', nextProps);
  }

  // PureComponent has shouldComponentUpdate built-in.
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('UPDATE Persons.js inside shouldComponentUpdate()', nextProps, nextState);
  //   return nextProps.persons !== this.props.persons ||
  //   nextProps.changed !== this.props.changed ||
  //   nextProps.clicked !== this.props.clicked;
  //   // return false; // Update happens, but it isn't rendered to the DOM
  //   // return true; // Update continues
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('UPDATE Persons.js inside componentWillUpdate()', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('UPDATE Persons.js inside componentDidUpdate()');
  }

  render () {
    console.log('Persons.js inside render()');
    return this.props.persons.map((person, index) => {
      return <Person
      click={() => this.props.clicked(index)}
      name={person.name}
      age={person.age}
      position={index}
      key={person.id}
      changed={(e) => this.props.changed(e, person.id)} />
    })
  }
};

export default Persons;