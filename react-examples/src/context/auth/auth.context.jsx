import React from 'react';

/**
 * `React.createContext()` allows us to initialize our 
 * respective context with a default value, because the context
 * object in the end, is just a globally available object, 
 * which we decide whether to use, or not. Now, this context
 * object can be passed between react components w/o using the
 * `props` and therefore now, there will be no prop-chaining.
 */
const authContext = React.createContext({
  authenticate: false,
  login: () => {}
});

export default authContext;
