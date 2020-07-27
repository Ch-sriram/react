import React from 'react';
import PersonStyleClasses from './person-style.module.css';

/**
 * Let's say that when we render the Person component, we will
 * get an error, i.e., we have a 30% chance of getting an error.
 * 
 * Here, in this example, we're simulating the error ourselves,
 * but in a real application (when it is deployed), we might
 * get any error during the runtime of the application. And so,
 * in these situations, it would always be nice to catch these
 * errors and then handle it graciously.
 * 
 * For this, we'll create a new component called `ErrorBoundary`
 * (the concept is known as ErrorBoundary, but we can name it
 * however we want). See the ErrorBoundary component to know 
 * more, which is imported inside this Person component.
 */

const person = props => {
  if (Math.random() > 0.7) {
    throw new Error("Something went wrong!");
  }

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
