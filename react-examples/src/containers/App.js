// Required Packages/Dependencies
import React, { Component } from 'react';

// Custom Components
import Persons from '../components/Persons/Persons.component';
import Cockpit from '../components/Cockpit/Cockpit.component';

// Required Styles
import AppStyleClasses from './App.module.css';

/**
 * Component Update Lifecycle (when props change)
 * ----------------------------------------------
 * 
 * Just as we have lifecycle for the component creation, we 
 * also have a lifecycle when a component gets updated.
 * 
 * When the props or state of a component change (which are 
 * the 2 triggers we've for a component to be re-evaluated
 * by react), then a different lifecycle method execution 
 * occurs.
 * 
 * The order of the lifecycle methods that are called when a 
 * component is updated are the following:
 *  
 *  1. `static getDerivedStateFromProps(props, state)`
 *     A lifecycle method that we won't use too often, but we
 *     will use it to initialize the state of a component
 *     which gets updated based on the updated `props` the 
 *     component is getting. This lifecycle hook is not needed
 *     that often because there's always a better/more-elegant
 *     way to update/initialize the state of the component when
 *     there's occurrence of an update.
 *      Example: It could be for some form control, which gets
 *               some external properties and then we 
 *               internally want to handle user input, but 
 *               initialize/update our state based on outside 
 *               changes.
 *  
 *  2. `shouldComponentUpdate(nextProps, nextState)`
 *     This lifecycle method is interesting because it allows 
 *     us to cancel the updating process altogether, if the
 *     this method sends a false truth value. Therefore, based
 *     on some condition, we can always try to choose to render
 *     a component or not, using this method. This lifecycle
 *     method should be used extremely carefully because it can
 *     break other components.
 * 
 *  3. `render()`
 *     React goes through the JSX code, evaluates it and 
 *     constructs its Virtual DOM for us and also sees whether
 *     it needs to update the real DOM.
 * 
 *  3.5. Updation of Child Component Props
 *       Every child component rendered inside the render()
 *       method also gets through the same Component Updation
 *       Lifecycle.
 * 
 *  4. `getSnapshotBeforeUpdate(prevProps, preState)`
 *     This is a lifecycle hook that takes the previous props
 *     and takes the previous state as input and it actually
 *     returns a snapshot object which we can freely configure.
 *     This also is a niche lifecycle hook which we'll not use
 *     too much, but it is very useful for Last-minute DOM ops 
 *     (not changes to the DOM, but something like getting the
 *     current scroll position of the user).
 * 
 *  5. `componentDidUpdate()`
 *     After the component is updated, this lifecycle method is
 *     called, which is a lifecycle hook that signals react
 *     that we're now done with the component updation process
 *     and that the render() method has been executed. In this
 *     lifecycle hook, we can cause side-effects by making some
 *     kind of an (say) HTTP request by getting it back and
 *     then updating the our component back inside here and the
 *     lifecycle for Component Update restarts and goes on 
 *     forever.
 * 
 * 
 * To see these methods being called, we'll convert our 
 * functional components like Persons and Person component, 
 * into Class based components.
 */

class App extends Component {
  /**
   * Component Lifecycle Execution Order: 1
   */
  // ES6 way of initializing state
  constructor(props) {
    super(props); // w/o this line, the app won't get compiled.
    console.log("[App.js] constructor");
  }

  // ES7 way of initializing state (constructor() called internally)
  state = {
    persons: [
      { name: 'Ram', age: 28, id: 'a1' },
      { name: 'Roop', age: 29, id: 'a2' },
      { name: 'Max', age: 28, id: 'a3' }
    ],
    otherState: "This has some value",
    showPersons: false,
    showCockpit: true
  }

  /**
   * Component Lifecycle Execution Order: 2
   */
  static getDerivedStateFromProps = (props, state) => {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  };

  /**
   * Component Lifecycle Execution Order: 4 (Legacy lifecycle)
   */
  // componentWillMount() {
  //   console.log("[App.js] componentWillMount");
  // }

  /**
   * Component Lifecycle Execution Order: 5
   */
  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  /**
   * Component Update Lifecycle Methods (when state changes)
   * -------------------------------------------------------
   * 
   * The most important takeaway when we use the lifecycle 
   * methods while updating the component due to its props is 
   * the componentDidUpdate() lifecycle method.
   *  Example: After the component's update, we might want to
   *           fetch new data from the backend, in that case, 
   *           we would simply write code related to fetching
   *           data after component updation, inside the 
   *           componentDidUpdate() lifecycle.
   * 
   * Our state changes whenever something is inputted from the
   * <input> field present in the Person component, which is 
   * handled by the nameChangedHandler defined below.
   * 
   * And so, we can use componentDidUpdate() for doing 
   * something after the state of the component changes.
   * 
   * Now, before the component renders, we can always define 
   * what we want to do in shouldComponentUpdate() lifecycle 
   * method.
   */

  shouldComponentUpdate(nextProp, nextState) {
    /**
     * This method has to return some truth value, either true 
     * or false. If it returns true, then the render() on the
     * the updation of the component's state/prop will go 
     * ahead, otherwise, the child component won't update.
     */
    console.log("[App.js] shouldComponentUpdate");
    // if (Math.random() > 0.5)
    //   return true;
    // return false;
    return true;
  }

  // EVENT HANDLERS
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(
      (person) => person.id === id
    );
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const personsList = [...this.state.persons];
    personsList[personIndex] = person;

    this.setState({ persons: personsList });
  };

  deletePersonHandler = (personIndex) => {
    const personsList = [...this.state.persons];
    personsList.splice(personIndex, 1);
    this.setState({ persons: personsList });
  };

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  render() {
    /**
     * Component Lifecycle Execution Order: 3
     */
    console.log("[App.js] rendering...");

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          nameChanged={this.nameChangedHandler}
        />
      );
    }

    return (
      <div className={AppStyleClasses.App}>
        <button
          onClick={() => {
            this.setState({
              showCockpit: !this.state.showCockpit,
            });
          }}
        >
          {this.state.showCockpit ? "Remove Cockpit" : "Show Cockpit"}
        </button>
        {
          this.state.showCockpit ?   
            <Cockpit
              title={this.props.title}
              showPersons={this.state.showPersons}
              persons={this.state.persons}
              clicked={this.togglePersonsHandler}
            /> : null
        }
        {persons}
      </div>
    );
  }
}

export default App;


/**
 * Output (when we press "Remove Cockpit" button and Math.random() > 0.5 in shouldComponentUpdate() lifecycle method inside Persons component)
 * -------------------------------------------------------------------------------------------------------------------------------------------
 * 
 * [App.js] getDerivedStateFromProps {title: "Person Manager"}
 * [App.js] shouldComponentUpdate
 * [App.js] rendering...
 * [Cockpit.js] cleanup work in useEffect
 * 
 */


/**
 * We can clearly see that useEffect() lifecycle hook's actual
 * body is not executed inside Cockpit component, only the 
 * returned anonymous function from useEffect is executed 
 * defined in line 23 of the Cockpit component. 
 */
