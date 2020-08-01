import React, { useEffect, useRef, useContext } from 'react';
import CockpitStyleClasses from './Cockpit-style.module.css';
import AuthContext from '../../context/auth/auth.context';

/**
 * In functional components, we can either use the Context
 * wrapper component, which is in this case, <AuthContext/>
 * component, or we can use the `useContext()` hook.
 * 
 * Using `useContext()` hook, we can get access to the context 
 * anywhere in our functional component, in our function body.
 */

const Cockpit = props => {
  const togglePersonsBtnRef = useRef(null);

  // Usage of useContext(), where the argument to useContext()
  // is the Context object we imported here.
  const authContext = useContext(AuthContext);

  // We can now use `authContext` inside the function body
  console.log(authContext.authenticated);

  useEffect(() => {
    console.log("[Cockpit.jsx] useEffect");
    togglePersonsBtnRef.current.click();
    return () => {
      console.log("[Cockpit.jsx] cleanup work in useEffect");
    }
  }, []);

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

  /**
   * Instead of wrapping <AuthContext.Consumer/> wherever the 
   * Context is required, we would simply use the constant we 
   * got from using the `useContext()` hook (in this case, the
   * constant is `authContext`) as shown below.
   */

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
      <button onClick={authContext.login}>{"Log In/Out"}</button>
    </div>
  );
};

export default React.memo(Cockpit);

/**
 * So, useContext() hook is to functional components, what the
 * `static contextType` is to class-based components.
 * 
 * Therefore, we use the Context API to manage data which can
 * be accessed across all the components in our app, instead
 * of passing data through `props`.
 * 
 * A different concept which will help us with maintaining 
 * state/data across all the components in the app, is the use
 * of a well-known library called Redux.
 */
