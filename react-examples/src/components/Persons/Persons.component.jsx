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
    console.log("[Persons.jsx] shouldComponentUpdate");
    /**
    * Now, instead of always returning true, we can try to 
     * make this update of the Persons component possible
     * only when the Persons component is updated, and for 
     * that, we need to compare the references of the current
     * persons list from App.js and the upcoming one using 
     * a simple if-else statement as follows:
     */
    if (nextProps.persons !== this.props.persons)
      return true;
    return false;

    /**
     * Here, the if-statement in line 50 works because the 
     * persons list inside the state of App component, we 
     * always copy the persons array and then make changes to 
     * the copy and then again setState of the older persons
     * to be the newly copied persons.
     * 
     * And because of that, the references change and there can
     * now be a shallow comparison (reference comparison) b/w
     * both the nextProps.persons and this.props.persons 
     * because if the state changed, then the references 
     * actually changed due to the way we set the state in 
     * nameChangedHandler & deletePersonHandler by copying it
     * and not directly changing the state without the 
     * setState() method being called.
     */
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
 * Output (after clicking the "Remove Cockpit" button)
 * ---------------------------------------------------
 * 
 * [App.js] getDerivedStateFromProps {title: "Person Manager"}
 * [App.js] shouldComponentUpdate
 * [App.js] rendering...
 * [Persons.jsx] shouldComponentUpdate
 * [Cockpit.js] cleanup work in useEffect
 * [Cockpit.jsx] cleanup work in 2nd useEffect
 * 
 * 
 * READ THE FOLLOWING AS MANY TIMES AS POSSIBLE!!
 * ----------------------------------------------
 * 
 * We can clearly see that the Persons component is not
 * rendered again from scratch because shouldComponentUpdate 
 * returns a false value based on the condition that the state
 * of the Persons component didn't change.
 * 
 * Now, the Persons component has nothing to do with Cockpit
 * component and so, this is the optimization we are talking 
 * about, which is possible in React.
 * 
 * Although, all of these changes are only internal, in the 
 * sense that these are optimizations done at the Virtual DOM
 * level. The updation(s) of the real DOM is still done w/o
 * needing this internal check, in an extremely optimized way.
 * 
 * But this internal checking of the component whether React
 * should even go and check this particular component to be 
 * rendered or not, we can even handle that using the 
 * shouldComponentUpdate lifecycle method.
 * 
 */
