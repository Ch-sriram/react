import React, { useEffect } from 'react';
import CockpitStyleClasses from './Cockpit-style.module.css';

/**
 * Since the Cockpit component is a functional component, we
 * can go ahead and use a React hook here.
 * 
 * Note that, in a functional component, we can't add 
 * lifecycle methods that the class based components use, such
 * as componentDidMount(), componentDidUpdate(), etc. But we
 * can still add react hooks here.
 * 
 * useEffect() hook is the 2nd most important react hook we can
 * use, after useState() hook because useEffect() combines the
 * functionality (or the use-cases we can cover) of all the 
 * class based component's lifecycle methods into a single
 * hook.
 * 
 * We can add useEffect() hook anywhere in our functional 
 * functional component's body and useEffect(), by default
 * takes in an empty function, inside which we can do anything
 * we want. The body of the function is executed every time the
 * Cockpit component is rendered onto the view.
 * 
 * Basically, useEffect() react hook in functional components 
 * replaces componentDidUpdate() & componentDidMount() in shot.
 */

const Cockpit = props => {

  useEffect(() => { 
    console.log("[Cockpit.jsx] useEffect");
  });

  const classes = [];
  let btnCockpitStyleClasses = "";

  if (props.showPersons) {
    btnCockpitStyleClasses = CockpitStyleClasses.Red;
  }

  if (props.persons.length <= 2 && classes.indexOf(CockpitStyleClasses.red) === -1) {
    classes.push(CockpitStyleClasses.red);
  }

  if (props.persons.length <= 1 && classes.indexOf(CockpitStyleClasses.bold) === -1) {
    classes.push(CockpitStyleClasses.bold);
  }

  return (
    <div className={CockpitStyleClasses.Cockpit}>
      <h1>{props.title}</h1>
      <p className={classes.join(" ")}>This is really working!</p>

      <button
        className={btnCockpitStyleClasses}
        onClick={props.clicked}
      >
        Toggle Persons
      </button>
    </div>
  );
};

export default Cockpit;


/**
 * Output (when the app starts)
 * ----------------------------
 * 
 * [App.js] constructor
 * [App.js] getDerivedStateFromProps {title: "Person Manager"}
 * [App.js] rendering...
 * [App.js] componentDidMount
 * [Cockpit.jsx] useEffect
 * 
 * 
 * Output (when "Toggle Persons" button is clicked and Math.random() > 0.5)
 * -----------------------------------------------------------------------------
 * 
 * [App.js] getDerivedStateFromProps {title: "Person Manager"}
 * [App.js] shouldComponentUpdate
 * [App.js] rendering...
 * [Persons.jsx] rendering...
 * [Person.jsx] rendering...
 * [Person.jsx] rendering...
 * [Person.jsx] rendering...
 * [Cockpit.jsx] useEffect
 */
