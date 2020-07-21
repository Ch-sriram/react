import React, { useState } from 'react';
import './App.css';

import { Person } from './components/person/person.component';

/**
 * Prior to React v16.8, in order to manage state or make a 
 * stateful component, the only way was to implement a component 
 * extending the React.Component class.
 * 
 * But after the React v16.8 update, we can use React Hooks to 
 * make stateful components out of functional components. Even 
 * though managing state is even now done in a class component, 
 * but we can also use Hooks to make a functional component be
 * able to manage state.
 * 
 * React Hooks are really just a name for a collection of 
 * functions given by React that are exposed to functional 
 * components to be used for making a functional component 
 * stateful.
 * 
 * In order to make our App component into a functional 
 * component with hooks (so that it is a stateful component), 
 * we do the following:
 */

const App = (props) => {
  // We now no longer have the state and ay other handler also.
  // And also, we no longer have the render() method, we simply return JSX code, just as it is in a normal functional component.

  // Now, in order to make sure that this functional App component to be a stateful component, we import the useState() hook from the 'react' library.

  /**
   * Now, the useState() method always returns a list/array of
   * 2 elements.
   *  - 1st element in the array is the current state of the 
   *    component.
   *  - 2nd element is a reference to a function that will allow 
   *    us to update the state of the component whenever the 
   *    component is supposed to be re-rendered.
   * 
   * Note that the useState() method can take in any kind of 
   * argument and that argument is the change in state that we 
   * will get back as the 1st element of the array that's 
   * returned by the useState() method.
   */

  const [personsState, personsSetState] = useState({
    persons: [
      { name: "Ram", age: 28 },
      { name: "Roop", age: 29 },
      { name: "Max", age: 28 },
    ],
    otherState: "This has some value",
  });

  // Note that whatever we passed inside the useState() method 
  // is now stored inside personsState.


  // We can have a function inside a function in JavaScript
  // and so, we can define the switchNameHandler inside this 
  // functional component as follows:
  
  const switchNameHandler = () => {
    // console.log('Was clicked');
    // DON'T DO THIS: personsState.persons[0].name = 'Milo';

    // this is same as this.setState(...) call in here, because
    // personsSetState is a reference to the method which sets
    // the state that has been changed in the functional 
    // component and re-renders the component completely.
    personsSetState({
      persons: [
        { name: "Mar", age: 82 },
        { name: "Poor", age: 92 },
        { name: "Xam", age: 82 },
      ],
    });
  };

  /**
   * The only disadvantage with using the useState() Hook is that
   * the properties in the state passed to the useState() method
   * which were unchanged, won't be merged with the previous 
   * state, instead, they'll be overridden.
   * 
   * Meaning, with the handler above, if the previous state had 
   * the otherstate property being used, just because the 
   * personsSetState method reference is passed with only the 
   * changes to the persons property, the otherstate property 
   * (being unchanged in the previous state), won't be merged 
   * with, in the ne state, which is not the case with a class 
   * based component.
   * 
   * It is better to always look into the console's log to 
   * understand the point made above.
   * 
   * Now, if we want the unchanged property in the state to be 
   * intact, for that, we can use multiple useState() Hook Calls,
   * 1 useState() for 1 property in the state to be maintained 
   * inside the current functional component.
   * 
   * Example below:
   */

  const [otherState, setOtherState] = useState(personsState.otherState);

  console.log(personsState, otherState);
  

  // Before in a class component, wherever we used this.state to 
  // refer to the state, now here, we can replace it with 
  // personsState. Example below:

  return (
    <div className="App">
      <h1>Hi, this is a React App</h1>
      <p>This is a paragraph inside JSX!</p>
      
      <button onClick={switchNameHandler}>
        Switch Names
      </button>

      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />

      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My Hobbies: Racing
      </Person>

      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
  
}



// class App extends Component {
//   // state now can be defined like this in ES7
//   state = {
//     persons: [
//       { name: 'Ram', age: 28 },
//       { name: 'Roop', age: 29 },
//       { name: 'Max', age: 28 }
//     ],
//     otherState: "This has some value"
//   }

  // switchNameHandler = () => {
  //   // console.log('Was clicked');
  //   // DON'T DO THIS: this.state.persons[0].name = 'Milo';

  //   this.setState({
  //     persons: [
  //       { name: "Mar", age: 82 },
  //       { name: "Poor", age: 92 },
  //       { name: "Xam", age: 82 },
  //     ],
  //   });
  // }

//   render() {
//     return (
//       <div className="App">
//         <h1>This is a React Example</h1>
//         <p>This is really working!</p>
        
//         <button
//           onClick={this.switchNameHandler}>
//           Switch Name
//         </button>
        
        // <Person
        //   name={this.state.persons[0].name}
        //   age={this.state.persons[0].age}
        // />
        
        // <Person
        //   name={this.state.persons[1].name}
        //   age={this.state.persons[1].age}>
        //   My Hobbies: Racing
        // </Person>

        // <Person
        //   name={this.state.persons[2].name}
        //   age={this.state.persons[2].age}
        // />
//       </div>
//     )
//   }

// }

export default App;