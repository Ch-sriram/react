import React from 'react';
import './search-box.styles.css';


/**
 * functional components, unlike class components, don't have 
 * access to state (as they don't have access to constructor() 
 * which is a class method in React.Component that we import) 
 * and the also don't have access to lifecycle methods.
 * 
 * And, functional components don't have internal state and 
 * lifecycle methods, because we don't always have to use them.
 * Sometimes, we just want to render some HTML (using JSX) and 
 * return that to wherever it needs to be used.
 */

export const SearchBox = ({ placeholder, handleChange }) => {
    return (
        <input
            className="search"
            type="search"
            placeholder={placeholder}
            onChange={handleChange}
        />
    );
}