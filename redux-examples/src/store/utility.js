/**
 * In this file, we add Utility Functions that we want to use
 * across the ACTIONS & the REDUCERS.
 */

export const updateObject = (oldState, updatedValues) => ({ ...oldState, ...updatedValues });
