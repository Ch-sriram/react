/**
 * Although, this HOC using Closure works for the <App/> 
 * component, but it doesn't work for the <Person/> component.
 * 
 * There's a reason why it doesn't work for the <Person/> 
 * component, and it is because the <Person/> component uses
 * its `props` when rendering some dynamic content onto the 
 * view and those `props` aren't mentioned inside the 
 * <WrappedComponent /> in this HOC using Closure.
 * 
 * The `props` in this HOC using Closure has to be 
 * de-structured inside the <WrappedComponent /> as those
 * will automatically expanded using the spread (...) operator
 * as shown below.
 */

import React from 'react'

const withClass = (WrappedComponent, className) => {
  return props => (
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
  );
}

export default withClass;


/**
 * Without the inclusion of {...props} in line 22, the 
 * <WrappedComponent /> that we are trying to render onto the
 * screen, won't be rendered properly, if that respective 
 * <WrappedComponent /> uses the `props` when rendering the 
 * JSX components onto the view.
 */
