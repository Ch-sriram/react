import React from 'react';

export const Person = (props) => {
  return (
    <div>
      <p onClick={props.click}>
        I'm {props.name} and I'm {props.age} years old!
      </p>
      {props.children ? (
        <div>
          <p>{props.children}</p>
          <input type="text" onChange={props.changed}
            value={props.name}
          />
        </div>
      ) : null}
    </div>
  );
}

/**
 * We applied two-way binding in line 12/13 because here, we are
 * getting the value from the input element onChange event, and 
 * that value we get is again affecting the text in the paragraph
 * for the 2nd Person. And in-turn, that new value we typed 
 * would also be the value for the "value" attribute of the input
 * element/component.
 * 
 * Typically, the name of the 2nd Person is being used to 
 * generate the value attribute of the input field and the input 
 * field's changes are registered where the name changes.
 */