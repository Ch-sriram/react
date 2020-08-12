/**
 * This component is a HOC which wraps a component generated 
 * asynchronously and loaded only when it is needed.
 */

import React, { Component } from 'react';

// Returns an Async Component (which is a Promise)
const asyncLazyComponent = importAsyncComponentPromise => {
  return class extends Component {
    // We always maintain a state which stores a component
    state = {
      component: null,  // initial value of component is null
    }

    // importAsyncComponentPromise is a callback function which
    // returns a Promise. The Promise on Resolve state (i.e.,
    // inside the .then(response)) returns a component, which
    // is our component that's to be lazy-loaded onto the view.

    // That component (say `cmp`) is set in this state's 
    // component using the setState method, where the cmp has
    // a default field, which has the actual component.

    // this importAsyncComponentPromise is actually the 
    // dynamic import() method being passed with component
    // import details along with it.
    componentDidMount() {
      importAsyncComponentPromise()
        .then(cmp => this.setState({ component: cmp.default }))
        .catch(err => err);
    }

    // Now, at some point of time, we would've loaded the 
    // actual component from the dynamic import(), and it will
    // be store in our state inside the `component` field.

    // As this is an HOC, we return component after we render 
    // it, to the dynamic import() being called wherever this
    // asyncLazyComponent HOC is called.
    render() {
      const Component = this.state.component;
      return Component ? <Component {...this.props} /> : null;
    }
  }
}

export default asyncLazyComponent;
