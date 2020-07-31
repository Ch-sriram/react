import React, { PureComponent } from 'react';
import Person from './Person/Person.component';

class Persons extends PureComponent {
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

  /**
   * We need not consume the context that we wrapped the 
   * <Persons/> component with, in here. We can directly 
   * consume it inside the <Person/> component.
   * 
   * And also, we don't need to send in the `isAuth` prop
   * to the <Person/> component, and also, we need not take
   * in `isAuthenticated` prop from the <App/> component.
   */

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
