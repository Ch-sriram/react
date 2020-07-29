import React, { Component } from 'react';
import Person from './Person/Person.component';

class Persons extends Component {
  /**
   * Component Updation Lifecycle Execution Order: 1
   * We commented it because there's no state associated to 
   * the Persons component.
   */
  // static getDerivedStateFromProps(props, state) {
  //   console.log("[Persons.jsx] getDerivedStateFromProps");
  //   return state;
  //   /**
  //    * We haven't initialized any state, so when returning
  //    * the state from this lifecycle method, we would get an
  //    * error saying 
  //    * "`Persons` uses `getDerivedStateFromProps` but its 
  //    * initial state is undefined. This is not recommended. 
  //    * Instead, define the initial state by assigning an 
  //    * object to `this.state` in the constructor of `Persons`. 
  //    * This ensure that the arguments of 
  //    * `getDerivedStateFromProps` have a consistent shape".
  //    */
  // }

  /**
   * Legacy lifecycle hook for getDerivedStateFromProps
   */

  // componentWillReceiveProps(props) {
  //   console.log("[Persons.jsx] componentWillReceiveProps", props);
  // }

  // legacy hook that ran before componentDidUpdate()
  // componentWillUpdate() { }

  /**
   * Component Updation Lifecycle Execution Order: 2
   */
  shouldComponentUpdate(nextProps, nextState) {
    /**
     * We have to return a truth value, either true or false.
     * If React continues with the update, we return true,
     * otherwise, we return false.
     */

    console.log("[Persons.jsx] shouldComponentUpdate");
    if (Math.random() > 0.5) return true;
    else return false;
  }

  /**
   * Component Updation Lifecycle Execution Order: 4
   */
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.jsx] getSnapshotBeforeUpdate");
    return {
      message: "Hello \u{1f596} 🖖 from getSnapshotBeforeUpdate()"
    };
  }

  /**
   * Component Updation Lifecycle Execution Order: 5
   */
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons.jsx] componentDidUpdate");
    console.log(snapshot);
  }

  /**
   * In an app where we have some kind of a live connection to 
   * some backend, then we've a very realistic scenario where we
   * do have to cleanup some opened connection or some other 
   * stuff. And for things like that, we use the lifecycle method
   * known as componentWillUnmount() for a class based component.
   */

  componentWillUnmount() {
    /**
     * In here, we can have any code that runs right before the
     * component is removed.
     */
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
 * remove <React.strictMode> HOC that wraps the <App/> 
 * component in index.js to run each lifecycle hook once.
 * 
 * Output (after clicking the "Toggle Persons" button when the list of Persons are listed on the view)
 * ---------------------------------------------------------------------------------------------------
 * 
 * [App.js] getDerivedStateFromProps {title: "Person Manager"}
 * [App.js] shouldComponentUpdate
 * [App.js] rendering...
 * [Persons.js] componentWillUnmount
 * 
 */
