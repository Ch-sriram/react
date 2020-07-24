// Required Packages/Dependencies
import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';

// Custom Components
import Person from './components/person/person.component';

/**
 * We can see that we are making use of the template string as much as possible, because here, the background-color in both the normal
 * state and hover state are conditionally rendered depending on the truth value of the prop showPersons.
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
      
      /**
       * Instead of handling the styling directly over here, 
       * we can simply send state.showPersons' truth value
       * as a prop to the <StyledButton>, and then inside the
       * inside the definition of the StyledButton tagged 
       * template, we need to handle that condition by using 
       * the feature of a template string where we can use the
       * `${}` sequence to write JavaScript code inside there, 
       * where we can write an arrow function to generate the 
       * required rule's value depending on the prop sent into
       * the <StyledButton>.
       */
    }

    const classes = [];

    if (this.state.persons.length <= 2 && classes.indexOf('red') === -1) {
      classes.push('red');
    }
    
    if (this.state.persons.length <= 1 && classes.indexOf('bold') === -1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>This is a React Example</h1>
        <p className={classes.join(" ")}>This is really working!</p>

        <StyledButton
          showPersons={this.state.showPersons}
          onClick={this.togglePersonsHandler}
        >
          Toggle Persons
        </StyledButton>
        {persons}
      </div>
    );
  }
}

export default App;
