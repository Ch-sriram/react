import React, { useEffect, useRef } from 'react';
import CockpitStyleClasses from './Cockpit-style.module.css';
import AuthContext from '../../context/auth/auth.context';

const Cockpit = props => {
  const togglePersonsBtnRef = useRef(null);

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
   * We will wrap the required button inside the 
   * <AuthContext/> context component where we return the
   * button by passing in the function with the `context` 
   * variable.
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
      <AuthContext.Consumer>
        {(context) => <button onClick={context.login}>{"Log In/Out"}</button>}
      </AuthContext.Consumer>
    </div>
  );
};

export default React.memo(Cockpit);

/**
 * Because of this, we don't need to send the `loginHandler()`
 * as a prop to the <Cockpit/> component.
 */
