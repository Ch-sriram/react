import React, { Component } from 'react';
import Person from './Person/Person.component';

class Persons extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Persons.jsx] shouldComponentUpdate");
    /**
     * Now, if we want to check all the input given to this 
     * particular component (i.e., all the `props`) and then
     * see whether we want to render this component or not, 
     * for that, we can simply check all the `props` related
     * to this component based on what the nextProps can be
     * inside the shouldComponentUpdate() method.
     * 
     * And for that, we can go with making the check of all
     * the relevant `props` compulsory as shown below.
     * 
     * The relevant `props` for the <Persons/> component are
     * (relevant => the `props` that make a change possible
     * inside/to the <Persons/> component directly):
     * this.props.persons, this.props.clicked & 
     * this.props.nameChanged
     * 
     * With these being checked for every render trigger/cycle
     * of <Persons/>, we would essentially make it a strict 
     * kind of a component
     */
    if (
      nextProps.persons !== this.props.persons ||
      nextProps.clicked !== this.props.clicked ||
      nextProps.nameChanged !== this.props.nameChanged
    )
      return true;
    return false;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.jsx] getSnapshotBeforeUpdate");
    return {
      message: "Hello \u{1f596} 🖖 from getSnapshotBeforeUpdate()"
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons.jsx] componentDidUpdate");
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log("[Persons.js] componentWillUnmount");
  }

  render() {
    console.log("[Persons.jsx] rendering...");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          key={person.id}
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          changed={(event) => this.props.nameChanged(event, person.id)}
        />
      );
    });
  }
};

export default Persons;


/**
 * Output (when "Remove Cockpit" button is clicked after the Persons are rendered on the view)
 * -------------------------------------------------------------------------------------------
 * 
 * [App.js] getDerivedStateFromProps {title: "Person Manager"}
 * [App.js] shouldComponentUpdate
 * [App.js] rendering...
 * [Persons.jsx] shouldComponentUpdate
 * [Cockpit.js] cleanup work in useEffect
 * [Cockpit.jsx] cleanup work in 2nd useEffect
 * 
 * We can see in the <Persons/> component that the 
 * shouldComponentUpdate() lifecycle method is running before
 * rendering the <Persons/> component onto the view and that's
 * precisely running only because <Persons/> component makes
 * a check of whether any of the info provided in the `props` 
 * of Persons component is changing or not.
 */
