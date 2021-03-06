import React, { PureComponent } from 'react';
import classes from './App.module.css'; // using the module.css feature to style. 'classes' can be any variable name that makes contextual sense.
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';

// Creates a global context that can be passed to any component. In this case the value is false.
export const AuthContext = React.createContext(false);

class App extends PureComponent {
  constructor(props) { // base constructor is always called with props
    super(props); // always called in base constructor.
    console.log('App.js inside constructor:', props);

    // 'state' (reserved word) is ONLY in classes that extend Component (class-based components).
    this.state = {
    persons: [
      {id: 'dkfj12', name: 'Andrew', age: 32},
      {id: '23xdi2', name: 'Rachelle', age: 25},
      {id: 'ddkfj2', name: 'Drew', age: 30}
    ],
    showPersons: false,
    toggleClicked: 0,
    authenticated: false
  }
  }

  componentWillMount() {
    console.log('App.js inside componentWillMount()');
  }

  componentDidMount() {
    console.log('App.js inside componentDidMount()');
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('UPDATE App.js inside shouldComponentUpdate()', nextProps, nextState);
  //   return nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('UPDATE App.js inside componentWillUpdate()', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('UPDATE App.js inside componentDidUpdate()');
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
    // setState is a method executed asynchronously. So be careful when having multiple setStates. In those cases, use the following:
    this.setState(prevState => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1 // prevState can't be mutated anywhere else in the app while in this setState method. It is the last modified state in the current lifecycle. Therefore it is safe to update the state here.
      }
    })
  }

  loginHandler = () => {
    this.setState({authenticated: true});
  }

  render() {
    console.log('App.js inside render()');
    let persons = null;
    
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.switchNameHandler}
          />
      );
    };

    return (
      <Aux classes={classes.App}>
        <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
        {/* Example of receiving props in class-based components. 'Props' is a property of 'Component' just like 'state'. */}
        <Cockpit
          appTitle={this.props.title}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonHandler}
          login={this.loginHandler} />
          {/* Provides global context to child components. */}
          <AuthContext.Provider value={this.state.authenticated}>
            {persons}
          </AuthContext.Provider>

      </Aux>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App)) // Takes at least three parameters: 1. element to render to DOM 2. Config for element in JS 3. Children of element 4... content in element
  }
}

export default withClass(App, classes.App);