import React, { Component } from 'react';

// Returns a Component (takes in a Callback function which returns a Promise)
const asyncLazyComponent = importAsyncComponentPromise => {
  return class extends Component {
    // We always maintain a state which stores a component
    state = {
      component: null,  // initial value of component is null
    }

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

    render() {
      const Component = this.state.component;
      return Component ? <Component {...this.props} /> : null;
    }
  }
}

export default asyncLazyComponent;
