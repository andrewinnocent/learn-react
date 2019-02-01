import React from 'react';
import classes from './Cockpit.module.css';

const cockpit = (props) => {
  const assignClasses = [];
  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{ props.appTitle }</h1>
      <p className={ assignClasses.join(' ')}>This really works!</p>
      <button
        className={btnClass} 
        onClick={props.clicked}>Toggle Persons
      </button>
      <button onClick={props.login}>Log In</button>
    </div>
  );
};

export default cockpit;