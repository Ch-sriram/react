import React from 'react';
import PersonStyleClasses from './Person-style.module.css';

const person = props => {
  // if (Math.random() > 0.7) {
  //   throw new Error("Something went wrong!");
  // }

  return (
    <div className={PersonStyleClasses.Person}>
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

export default person;
