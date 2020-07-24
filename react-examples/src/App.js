// Required Packages/Dependencies
import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';

// Custom Components
import Person from './components/person/person.component';

// we can always store our styled components in separate files
// and import them to use them whenever we want to.
// But for now, we will define the styled-component right here.

const StyledButton = styled.button`
  color: white;
  background-color: green;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  transition: all .2s;
  &:hover {
    background-color: lightgreen;
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

  /**
   * The styles that we add using the styled-components library
   * doesn't add styling inline to the component, but it 
   * generates the styles that we added into internally
   * generated CSS class selectors, and then adds those CSS 
   * class(s) to the head of the document and then just adds
   * the appropriate class selector to the component we 
   * actually generated from the `styled` object.
   * 
   * Therefore, styled-components do NOT generate inline 
   * styles, but they automatically generate and manage regular
   * CSS classes for us.
   * 
   */

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
      
      // // this is how we dynamically change the styling
      // style.backgroundColor = "red";

      // // making use of radium for assigning :hover rules
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'rgba(0, 0, 0, .9)'
      // };
    }

    const classes = [];

    if (this.state.persons.length <= 2 && classes.indexOf('red') === -1) {
      classes.push('red');
    }
    
    if (this.state.persons.length <= 1 && classes.indexOf('bold') === -1) {
      classes.push('bold');
    }

    /**
     * Now we can simply use a <StyledButton> instead of a 
     * normal <button>. The <StyledButton> is defined above.
     */

    return (
      <div className="App">
        <h1>This is a React Example</h1>
        <p className={classes.join(" ")}>This is really working!</p>

        <StyledButton onClick={this.togglePersonsHandler}>
          Toggle Persons
        </StyledButton>
        {persons}
      </div>
    );
  }
}

export default App;
