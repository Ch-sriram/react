/**
 * Has all the ACTIONs which are to be Dispatched from 
 * anywhere in our App. It's always a good practice to store 
 * ACTION types in a single place like this, so there will be 
 * no typos when mentioning the ACTION type when Dispatching or
 * when defining the ACTION logic inside the REDUCER.
 * 
 * And also, whenever we refer to any ACTION using a variable, 
 * we'll get an error whenever we mistype the letters.
 * 
 * By Convention, we name the ACTION and the constant related 
 * to it identical to each other in uppercase characters.
 */

export const INCREMENT     = "INCREMENT",
             DECREMENT     = "DECREMENT",
             ADD           = "ADD",
             SUBTRACT      = "SUBTRACT",
             STORE_RESULT  = "STORE_RESULT",
             DELETE_RESULT = "DELETE_RESULT";


// ACTION CREATORS (Convention: same name as ACTIONS defined 
// above, but we use camel casing): A function which returns 
// the object with `type` and `payload`. `payload` is received
// as a function parameter.

// These are simple ACTION CREATORS
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });

// These are ACTION CREATORS with `payload` passed into them
export const add = val => ({ type: ADD, value: val });
export const subtract = val => ({ type: SUBTRACT, value: val });
export const storeResult = ctr => ({ type: STORE_RESULT, counter: ctr });
export const deleteResult = resID => ({ type: DELETE_RESULT, resultElementID: resID });
