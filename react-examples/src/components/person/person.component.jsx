import React from 'react';

export const Person = (props) => {
  return (
    <div>
      <p>I'm {props.name} and I'm {props.age} years old!</p>
      {
        props.children ? 
        <p>{props.children}</p> : null
      }
    </div>
  );
}