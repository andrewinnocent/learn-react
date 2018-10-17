import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  // 'state' (reserved word) is ONLY in classes that extend Component (class-based components).
  state = {
    persons: [
      {id: 'dkfj12', name: 'Andrew', age: 32},
      {id: '23xdi2', name: 'Rachelle', age: 25},
      {id: 'ddkfj2', name: 'Drew', age: 30}
    ]
  }

  deletePersonHandler = (personIndex) => {
    // ALWAYS update state in an immutable fashion (i.e., make a copy of state and manipulate the copy).
    // const persons = this.state.persons.slice();  // slice() makes a copy of the array
    const persons = [...this.state.persons];  // ES6 spread operator to add to an array (makes a copy in this case).
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow}) 
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id} />
          })}
          </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi! I'm a react app!</h1>
        <p>This really works!</p>
        <button 
          style={style}
          onClick={this.togglePersonHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App)) // Takes at least three parameters: 1. element to render to DOM 2. Config for element in JS 3. Children of element 4... content in element
  }
}

export default App;
