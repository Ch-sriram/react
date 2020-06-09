import React from 'react';
import './card-list.styles.css';

// This is a functional component
// There are 2 ways of creating a component, the class component, and the functional component.
// This is a functional component using the arrow function syntax. 
// export const CardList = () => <div></div>;

// One of the big things about components is that they take in a parameter known as 'props'.
// We will just see the contents of props parameter using the console.log() as follows:
export const CardList = props => {
    console.log(props);
    return <div className="card-list">{props.children}</div>;
}