import React, { useEffect, useRef } from 'react';
import CockpitStyleClasses from './Cockpit-style.module.css';

/**
 * Let's say, in our Cockpit functional component, we want to
 * automatically click the "Toggle Persons" button whenever the
 * entire page is loaded. For that, we need to access the 
 * "Toggle Persons" button using the Refs concept. 
 * 
 * In a functional component, we use React's Hooks concept,
 * where we get the reference to the Ref using `useRef()` hook.
 * To the `useRef()` hook, we can pass anything as an argument,
 * but for now, we will pass in `null` as shown below.
 * 
 * The connection to the togglePersonsBtnRef variable is given
 * as `ref` prop inside the "Toggle Persons" <button /> JSX
 * component as shown below.
 */
const Cockpit = props => {
  const togglePersonsBtnRef = useRef(null);
  
  /**
   * We cannot use the (say) 
   * togglePersonsBtnRef.current.click() here directly, 
   * because as of now, `useRef()` is passed 
   * with a null object. Therefore, with the following line, we
   * will get an error.
   */

  // togglePersonsBtnRef.current.click();

  /**
   * We get the error because till now, this functional
   * component hasn't made the connection between the <button>
   * JSX component and togglePersonsBtnRef reference.
   * 
   * Instead, we should call the click() of the 
   * togglePersonsBtnRef.current DOM Node from useEffect() 
   * hook defined below, which only runs after the first render
   * cycle. Which makes sense, and that would also make the 
   * connection between the togglePersonsBtnRef and the 
   * <button> JSX component that this Cockpit functional 
   * component returns.
   */

  useEffect(() => {
    console.log("[Cockpit.jsx] useEffect");
    // Dummy HttpRequest using setTimeout()
    // const timer = setTimeout(() => {
    //   alert("Saved data to cloud!");  // executes after 1s
    // }, 1000);
    togglePersonsBtnRef.current.click();
    return () => {
      // clearTimeout(timer);
      console.log("[Cockpit.jsx] cleanup work in useEffect");
    }
  }, []);

  // useEffect(() => {
  //   console.log("[Cockpit.jsx] 2nd useEffect");
  //   return () => {
  //     console.log("[Cockpit.jsx] cleanup work in 2nd useEffect");
  //   };
  // });

  const classes = [];
  let btnCockpitStyleClasses = "";

  if (props.showPersons) {
    btnCockpitStyleClasses = CockpitStyleClasses.Red;
  }

  if (props.personsLength <= 2 && classes.indexOf(CockpitStyleClasses.red) === -1) {
    classes.push(CockpitStyleClasses.red);
  }

  if (props.personsLength <= 1 && classes.indexOf(CockpitStyleClasses.bold) === -1) {
    classes.push(CockpitStyleClasses.bold);
  }

  return (
    <div className={CockpitStyleClasses.Cockpit}>
      <h1>{props.title}</h1>
      <p className={classes.join(" ")}>This is really working!</p>

      <button
        ref={togglePersonsBtnRef}
        className={btnCockpitStyleClasses}
        onClick={props.clicked}
      >
        Toggle Persons
      </button>
    </div>
  );
};

export default React.memo(Cockpit);

/**
 * Now when we reload our react app, we can see that the 
 * all the Persons are being shown enclosed in the <Person/>
 * component as the "Toggle Persons" button is now clicked 
 * automatically.
 */
