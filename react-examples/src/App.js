import React, { Component } from 'react';
import './App.css';
import Radium from 'radium';
import Person from './components/person/person.component';

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
    /**
     * We can always style anything for a component inside a
     * CSS file and then import it for the component.
     * 
     * But the problem with that is that, the styling is 
     * applied in a global context, meaning, it will also 
     * apply to all other components after webpack/babel 
     * combine the code for the production/testing, and this
     * can lead to some unnecessary styling bugs in the app,
     * if we don't write the global styles carefully.
     * 
     * Therefore, what we do is, we use a library called 
     * 'radium', which lets us use pseudo-classes and media 
     * queries when defining inline styling using JSX for 
     * a specific component.
     * 
     * To use 'radium', we have to install the dependency
     * with `--save` prefix in node_modules and package.json.
     * `npm i --save radium` is the command to install the 
     * 'radium' package. And then we import as shown at the 
     * top of this commit.
     * 
     * 
     * When we export App.js, we can see that we pass-in App
     * component to Radium, as Radium is HOC (Higher Order 
     * Component). HOC is a component which wraps over another
     * component and injects its own functionalities onto the
     * component it wraps. We'll look into HOC later. 
     */

    const style = {
      color: "white",
      backgroundColor: "green",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      // to use radium, we can add the `hover` state as follows
      ':hover': {
        backgroundColor: "lightgreen",
        color: "rgba(0, 0, 0, .9)"
      }
    };

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
      
      // this is how we dynamically change the styling
      style.backgroundColor = "red";

      // making use of radium for assigning :hover rules
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'rgba(0, 0, 0, .9)'
      };
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
        <p className={classes.join(" ")}>
          This is really working!
        </p>
        
        <button
          onClick={this.togglePersonsHandler}
          style={style}
        >
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default Radium(App);
