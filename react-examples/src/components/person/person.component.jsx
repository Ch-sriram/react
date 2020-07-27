import React from 'react';
import PersonStyleClasses from './person-style.module.css';

const person = (props) => {
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
