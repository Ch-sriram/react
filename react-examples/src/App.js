// Required Packages/Dependencies
import React, { Component } from 'react';
// import './App.css';

/**
 * Instead of importing App.css as shown above, we can import 
 * it as follows:
 */
import AppStyleClasses from './App.module.css';

/**
 * AppStyleClasses object we have above is mapped to every 
 * class/id/element selector inside App.css with a unique 
 * mapper (which is basically a Map object with keys having 
 * the name as the selector's name and the object's value 
 * would be taken as an object with defined rules. Note that 
 * the selectors in the CSS file will be converted to unique 
 * random names which can be seen in the final output (index.
 * html file)), and the rules that were in those class/id/
 * element selectors inside App.css are the values for these
 * mapped keys which we can access in this App component.
 */

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
    let btnAppStyleClasses = [AppStyleClasses.Button];
    console.log(btnAppStyleClasses);
    
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

      btnAppStyleClasses.push(AppStyleClasses.Red);
    }

    const classes = [];

    if (this.state.persons.length <= 2 && classes.indexOf('red') === -1) {
      classes.push(AppStyleClasses.red);
    }
    
    if (this.state.persons.length <= 1 && classes.indexOf('bold') === -1) {
      classes.push(AppStyleClasses.bold);
    }

    return (
      <div className={AppStyleClasses.App}>
        <h1>This is a React Example</h1>
        <p className={classes.join(" ")}>This is really working!</p>

        <button className={btnAppStyleClasses.join(" ")} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
