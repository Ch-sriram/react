import axios from 'axios';

/**
 * In case we want to use an axios instance, instead of using 
 * the default settings in index.js, where we can set our own
 * specific settings. 
 * 
 * In case we want to make our own settings for that specific 
 * axios instance, we can do that using our axios instance.
 * 
 * Now, if we want to use our axios instance to get the post
 * data, and use the global axios default for posting data, 
 * then we can do so how we want to.
 * 
 * This is the definition of our axios instance.
 */

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// For this instance, by default, all other settings are 
// automatically generated, as it is for the global axios
// instance. But we can also make our own setting as follows:

axiosInstance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM AXIOS USER INSTANCE';

// We can also define interceptors for our own instance here
// as we want to define:

// axiosInstance.interceptors.request/response()....

export default axiosInstance;

/**
 * We can use this instance inside the Blog.js module for 
 * getting the data from the server.
 */
