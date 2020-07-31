import React, { useEffect, useRef } from 'react';
import CockpitStyleClasses from './Cockpit-style.module.css';

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
