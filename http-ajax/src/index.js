import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

// DEFAULT SETTINGS
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json'; // this is the default setting btw.

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
