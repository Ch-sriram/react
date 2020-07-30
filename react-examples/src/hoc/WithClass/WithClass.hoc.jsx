/**
 * It is a convention that a HOC starts with the word "With"
 * before it, because it is always adding some kind of a 
 * functionality or pre-processing to the child components that
 * are wrapped inside it. 
 * 
 * In general, it is used to render some styles, or, maybe 
 * for HTTP requests or maybe for error handling. Stuff like 
 * that is done in a HOC.
 * 
 * This particular HOC is just used to apply styling to the
 * child components that are wrapped by this respective HOC.
 */

import React from 'react'

const withClass = props =>
  <div className={props.styleClasses}>
    {props.children}  
  </div>;

export default withClass;
