import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/**
 * Handling errors locally, in components make a lot of sense,
 * because we might want to do different things with errors
 * depending on what the component is.
 * 
 * But sometimes, we might want to execute some code Globally,
 * no matter which HTTP Request we send from within whichever
 * component, that request/response gets sent/received 
 * respectively, we might want to do something for every such
 * request/response, and intercept it before sending/receiving
 * the request/response for every such HTTP request/response.
 * 
 * We can handle HTTP requests/responses globally, using 
 * `axios.interceptors.request.use()` and 
 * `axios.interceptors.response.use()` methods.
 * 
 * This is especially useful for setting some common headers, 
 * like say, Authorization Header for request, OR, to log each
 * response, in case of a response, OR, if we want to handle
 * errors globally.
 * 
 * We generally add interceptors in index.js because that's the
 * most global file. We add an interceptor as follows:
 */

import axios from 'axios';

// READ DOCS: https://github.com/axios/axios#interceptors

// GLOBAL INTERCEPTOR TO HANDLE REQUEST
axios.interceptors.request.use(requestConfig => {
  console.log(requestConfig);
  /** We can Edit the Request Header in here */

  // we always need to return the request to show if there are
  // any errors in the request
  return requestConfig;
}, error => {
    // Called whenever there's an error in the request, 
    // an error in request for an interceptor means something
    // like not having an internet connection before sending
    // the request. Bad Requests like 404 won't be handled
    // in here. System level errors will be handled here.
    console.log(error);

    // we always have to return a reject state from here
    return Promise.reject(error);
});

// GLOBAL INTERCEPTOR TO HANDLE RESPONSES
axios.interceptors.response.use(response => {
  /**
   * the response is always successful or unsuccessful, and 
   * depending on that, a status code is also returned with
   * the response, which can be found inside response header.
   */
  console.log(response);
  return response;
}, error => {
    // There can be some error while the response comes back, 
    // and for that, we handle it inside this method.
    console.log(error);
    return Promise.reject(error);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
