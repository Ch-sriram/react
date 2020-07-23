import React from 'react';

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

export const Person = (props) => {
  return (
    <div className="person">
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