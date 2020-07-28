import React from 'react';
import PersonStyleClasses from './Person-style.module.css';

const Person = props => {
  console.log("[Person.jsx] rendering...");
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

export default Person;
