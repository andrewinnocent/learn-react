import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  // 'state' (reserved word) is ONLY in classes that extend Component (class-based components).
  state = {
    persons: [
      {name: 'Andrew', age: 32},
      {name: 'Rachelle', age: 25},
      {name: 'Drew', age: 30}
    ]
  }

  switchNameHandler = (newName) => {
    // console.log('Clicked!')
    // 'this' refers to the class because it's inside an arrow function. IMPORTANT!
    // DON'T DO THIS: this.state.persons[0].name = 'John'
    this.setState(
      {
        persons: [
          {name: newName, age: 32},
          {name: 'Rachelle', age: 25},
          {name: 'Drew', age: 30}
        ],
        showPersons: false
      }
    )
  }

  nameChangedHandler = (event) => {
    this.setState(
      {
        persons: [
          {name: 'Andrew', age: 32},
          {name: event.target.value, age: 25},
          {name: 'Drew', age: 30}
        ]
      })
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

    return (
      <div className="App">
        <h1>Hi! I'm a react app!</h1>
        <p>This really works!</p>
        <button 
          style={style}
          onClick={this.togglePersonHandler}>Toggle Persons</button> {/* The function is executed on the click instead of the page load. */}
        { 
          this.state.showPersons ?
            <div>
              <Person
                name={this.state.persons[0].name}
                age={this.state.persons[0].age}/>
              <Person
                name={this.state.persons[1].name}
                age={this.state.persons[1].age}
                click={this.switchNameHandler.bind(this, 'Johnny!')}
                changed={this.nameChangedHandler}>My Hobbies: Hiking</Person> {/* .bind() is preferred over the arrow function to pass a function parameter. */}
                {/* Only this component has action handlers passed to it. */}
              <Person
                name={this.state.persons[2].name}
                age={this.state.persons[2].age}/>
              </div> : null
        } {/* null means 'render nothing' here */}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App)) // Takes at least three parameters: 1. element to render to DOM 2. Config for element in JS 3. Children of element 4... content in element
  }
}

export default App;
