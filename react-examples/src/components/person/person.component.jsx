import React from 'react';
import Radium from 'radium';

/**
 * CSS code that is imported from an external script is applied
 * to all the components globally, as webpack includes the code
 * in a global sense.
 * 
 * But whenever we write CSS code using JSX, it is only 
 * limited to the particular component where the CSS script
 * is written in.
 */

import './person.style.css';  // applicable to all the components

const person = (props) => {
  /**
   * To the person component, we can add media queries with
   * Radium as shown below.
   */
  const style = {
    '@media (min-width: 500px)': {
      width: '450px'
    }
  }

  /**
   * For this style to be applied, we need to wrap the App 
   * component's returned JSX inside a <StyleRoot> imported 
   * from 'radium' as a named import in App component.
   */
  
  return (
    <div className="person" style={style}>
      <p onClick={props.click}>
        I'm {props.name} and I'm {props.age} years old!
      </p>
      <input
        type="text"
        onChange={props.changed}
        value={props.name}
      />
    </div>
  );
}

export default Radium(person);
