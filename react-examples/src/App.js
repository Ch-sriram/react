// Required Packages/Dependencies
import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';

// Custom Components
import Person from './components/person/person.component';

/**
 * Quite often, we want to make sure that we don't want to 
 * apply our styling (from external scripts) to all the 
 * components, but we would like to only apply the styling to
 * specific components of the app. 
 * 
 * For example, we can copy the code below, and add it into
 * (let's say) .button class in App.css (as shown in App.css)
 * 
 * The CSS rules in App.css would be definitely valid and
 * correct, but now everything that has the class called 
 * .button would have the rules applied to them.
 */

const StyledButton = styled.button`
  color: white;
  background-color: ${props => props.showPersons ? "red" : "green"};
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  transition: all .2s;
  &:hover {
    background-color: ${props => props.showPersons ? "salmon" : "lightgreen"};
    color: rgba(0, 0, 0, .9);
  }
`;


class App extends Component {
  state = {
    persons: [
      { name: 'Ram', age: 28, id: 'a1' },
      { name: 'Roop', age: 29, id: 'a2' },
      { name: 'Max', age: 28, id: 'a3' }
    ],
    otherState: "This has some value",
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(
      person => person.id === id
    );
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const personsList = [...this.state.persons];
    personsList[personIndex] = person;

    this.setState({persons: personsList});
  }
  
  deletePersonHandler = (personIndex) => {
    const personsList = [...this.state.persons];
    personsList.splice(personIndex, 1);
    this.setState({ persons: personsList });
  }

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  }

  render() {

    let persons = null;
    
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }

    const classes = [];

    if (this.state.persons.length <= 2 && classes.indexOf('red') === -1) {
      classes.push('red');
    }
    
    if (this.state.persons.length <= 1 && classes.indexOf('bold') === -1) {
      classes.push('bold');
    }

    /**
     * This is not what we want, where the <button> is using
     * the .button class that we imported from the .button
     * class. 
     * 
     * We want our component to only use styles that are scoped
     * only to it and no other component, and for that, we 
     * have to change certain webpack configurations, which
     * we will see next.
     */

    return (
      <div className="App">
        <h1>This is a React Example</h1>
        <p className={classes.join(" ")}>This is really working!</p>

        <button className="button" onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
