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
          {name: 'Drew', age: 21}
        ]
      }
    )
  }

  render() {
    return (
      <div className="App">
        <h1>Hi! I'm a react app!</h1>
        <p>This really works!</p>
        <button onClick={() => this.switchNameHandler('John')}>Switch Name</button> {/* The function is executed on the click instead of the page load. */}
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}/>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          // methods can be passed down to other components
          click={this.switchNameHandler.bind(this, 'Johnny!')}>My Hobbies: Hiking</Person> {/* .bind() is the preferred way pass a function parameter over the arrow function. */}
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App)) // Takes at least three parameters: 1. element to render to DOM 2. Config for element in JS 3. Children of element 4... content in element
  }
}

export default App;
