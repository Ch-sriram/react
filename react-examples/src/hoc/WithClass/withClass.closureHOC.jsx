/**
 * Another way of writing a HOC does not work by returning a 
 * JSX component, but instead, it works by using a regular JS
 * function, where the 1st argument would actually be the 
 * component called "WrappedComponent", the 2nd argument 
 * depends on the HOC we are creating, in this case, let's 
 * say we want to take in a 2nd argument which is the 
 * "className". This HOC we're creating is specifically used 
 * to add a <div> with a certain CSS class around any element
 * that's being sent to this HOC.
 * 
 * Of course, we can also accept as many arguments as we want, 
 * based on what our HOC wants. 
 * 
 * NOTE: now this HOC is simply a function that returns a 
 * function, so we rename it w.r.t to the conventions of a 
 * function and also, import this module as a function inside 
 * the App component.
 */

import React from 'react'

const withClass = (WrappedComponent, className) => {
  return props => (
    <div className={className}>
      <WrappedComponent />
    </div>
  );
}

export default withClass;
