import * as actionTypes from "./actionTypes";

// These are simple ACTION CREATORS
export const increment = () => ({ type: actionTypes.INCREMENT });
export const decrement = () => ({ type: actionTypes.DECREMENT });

// These are ACTION CREATORS with `payload` passed into them
export const add = val => ({ type: actionTypes.ADD, value: val });
export const subtract = val => ({ type: actionTypes.SUBTRACT, value: val });
