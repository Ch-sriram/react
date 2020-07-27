import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: ""
  }

  /**
   * Now, there's a method which is called whenever the 
   * component wrapped inside this component (say Person 
   * component) throws an error. And that method needs to be 
   * defined here, which is componentDidCatch() method, which
   * takes in 2 parameters which are `error` and `info`.
   * We'll see how to use componentDidCatch() below.
   */

  componentDidCatch(error, info) {
    this.setState(
      { hasError: true, errorMessage: error },
      () => { console.log("Error Occurred\n" + info); }
    );
  }

  render() {
    /**
     * if there's any error, we'll just return the error-message
     * or, we'll return all the child components under the 
     * ErrorBoundary component.
     */
    return this.state.hasError ?
      <h1>{this.state.errorMessage}</h1> :
      this.props.children;
  }
}

export default ErrorBoundary
