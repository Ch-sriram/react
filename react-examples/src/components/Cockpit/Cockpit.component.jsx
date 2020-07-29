import React, { useEffect } from 'react';
import CockpitStyleClasses from './Cockpit-style.module.css';

/**
 * Now, if we are using useEffect() hook to handle the
 * functionality of componentWillUnmount() class-based 
 * lifecycle method in a functional component, in that case, 
 * in our useEffect() lifecycle hook, we can always return 
 * either nothing, or, we can return an anonymous function,
 * which runs (and this is important) BEFORE whatever is there
 * in the useEffect(), but this behaviour of running before 
 * the useEffect() hook, is only in-effect AFTER the (first) 
 * render cycle only.
 */

const Cockpit = props => {
  useEffect(() => {
    console.log("[Cockpit.jsx] useEffect");
    // Dummy HttpRequest using setTimeout()
    const timer = setTimeout(() => {
      alert("Saved data to cloud!");  // executes after 1s
    }, 1000);
    return () => {
      // whenever this cleanup code is executed, we don't 
      // want the alert to showup, and so, we simply clear
      // the timeout as shown below.
      clearTimeout(timer);
      console.log("[Cockpit.js] cleanup work in useEffect");
    }
  }, []);

  /**
   * Even with the useEffect() hook defined with the cleanup
   * code being returned, we'll never see that cleanup code 
   * being executed, until the respective component actually 
   * is removed from the view.
   * 
   * In this case, the Cockpit component has to be removed from
   * App.js component (parent component), onClick of some 
   * button and so on... (which is handled in App.js)
   */

  /**
   * In case we want the cleanup to be done on every render 
   * cycle of the app, in that case, we don't send any 2nd 
   * argument to the useEffect() lifecycle hook.
   */

  useEffect(() => {
    console.log("[Cockpit.jsx] 2nd useEffect");
    return () => {
      console.log("[Cockpit.jsx] cleanup work in 2nd useEffect");
    };
  });

  /**
   * This above useEffect() will be called every time the
   * Persons component is rendered on to the view as the 2nd
   * argument is missing.
   */

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
