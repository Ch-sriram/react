import React from 'react';

const WithClass = props =>
  <div className={props.styleClasses}>
    {props.children}
  </div >;

export default WithClass;
