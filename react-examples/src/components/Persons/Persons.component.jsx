import React, { PureComponent } from 'react';
import Person from './Person/Person.component';

class Persons extends PureComponent {
  /**
   * Instead of verifying all the `props` that are in this
   * component, we can simply make this a PureComponent by
   * extending this component as PureComponent. 
   * 
   * The code below will be implicitly written by React itself,
   * i.e., we need not check all the `props` inside the 
   * shouldComponentUpdate() lifecycle method, it will be done
   * internally by react, on its own.
   * 
   * Therefore, we can comment the code related to 
   * shouldComponentUpdate() below for this component, as it 
   * is now extending PureComponent.
   */
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("[Persons.jsx] shouldComponentUpdate");
  //   if (
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.clicked !== this.props.clicked ||
  //     nextProps.nameChanged !== this.props.nameChanged
  //   )
  //     return true;
  //   return false;
  // }

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
    /**
     * Here, we are returning a list of <Person/> components, 
     * not components which are wrapped inside a <div>, and so
     * in React, this is absolutely possible.
     * 
     * Therefore, from any kind of a component, we can actually
     * just return a single <div> or a list of components as we
     * have done below.
     * 
     * This same approach will be used to render the components
     * of the <Person/> component.
     */
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
 * [Cockpit.js] cleanup work in useEffect
 * [Cockpit.jsx] cleanup work in 2nd useEffect
 * 
 * As we can see, here the <Persons/> component didn't even
 * show any update as it wasn't even touched, at the virtual
 * DOM level, because all these optimizations are at the 
 * Virtual DOM level, which might be minor, but addon to the 
 * overall rendering/processing of components and make it more
 * efficient and snappy.
 */
