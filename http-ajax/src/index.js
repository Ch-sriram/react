import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

/**
 * Sometimes, we might not want to intercept the 
 * request/response we send/receive from the server, we might
 * just want to do some global settings for the server we are 
 * requesting from, and for that, we can set a global default
 * baseURL. And after we set the baseURL, we can make requests
 * to the routes of the API Endpoints to make a request, axios
 * will append the baseURL automatically for every GET, POST,
 * DELETE & PUT Request on the server.
 * 
 * In our case, our baseURL we can set it as follows:
 */
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

// Now, wherever we request for a resource from the server
// in question, we can simply get rid of the baseURL, and
// simply mention the default route.

/**
 * With default setting we are not only limited to what we did 
 * above, but we can also set some common headers as follows:
 */
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json'; // this is the default setting btw.

/**
 * Now when we inspect the header, we will see all of this 
 * inside the response we receive from the server.
 */

// READ DOCS: https://github.com/axios/axios#interceptors
// GLOBAL INTERCEPTOR TO HANDLE REQUEST
axios.interceptors.request.use(requestConfig => {
  console.log(requestConfig);
  return requestConfig;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

// GLOBAL INTERCEPTOR TO HANDLE RESPONSES
axios.interceptors.response.use(response => {
  console.log(response);
  return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
