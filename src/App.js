import React, { Component } from 'react';
import classes from './App.module.css'; // using the module.css feature to style. 'classes' can be any variable name that makes contextual sense.
import Person from './Person/Person';

class App extends Component {
  // 'state' (reserved word) is ONLY in classes that extend Component (class-based components).
  state = {
    persons: [
      {id: 'dkfj12', name: 'Andrew', age: 32},
      {id: '23xdi2', name: 'Rachelle', age: 25},
      {id: 'ddkfj2', name: 'Drew', age: 30}
    ],
    showPersons: false
  }

  switchNameHandler = (e, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]}; // create a copy of state's person object

    person.name = e.target.value; // update name from input field

    const persons = [...this.state.persons]; // create a copy of state's persons array
    persons[personIndex] = person; // update copied array with updated person object

    this.setState({persons: persons}); // setState with new data
  }

  deletePersonHandler = (personIndex) => {
    // ALWAYS update state in an immutable fashion (i.e., make a copy of state and manipulate the copy).
    // const persons = this.state.persons.slice();  // slice() makes a copy of the array
    const persons = [...this.state.persons];  // ES6 spread operator to add to an array (makes a copy in this case).
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(e) => this.switchNameHandler(e, person.id)} />
          })}
        </div>
      );

      btnClass = classes.Red;
    };

    let assignClasses = []; // classes in app.css; returns "red bold"
    if (this.state.persons.length <= 2) {
      assignClasses.push(classes.red); // ['red']
    }
    if (this.state.persons.length <= 1) {
      assignClasses.push(classes.bold); // ['red', 'bold']
    }

    return (
      <div className={classes.App}>
        <h1>Hi! I'm a react app!</h1>
        <p className={ assignClasses.join(' ')}>This really works!</p>
        <button
          className={btnClass} 
          onClick={this.togglePersonHandler}>Toggle Persons
        </button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App)) // Takes at least three parameters: 1. element to render to DOM 2. Config for element in JS 3. Children of element 4... content in element
  }
}

export default App;