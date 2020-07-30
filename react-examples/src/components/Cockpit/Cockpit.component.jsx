import React, { useEffect } from 'react';
import CockpitStyleClasses from './Cockpit-style.module.css';

const Cockpit = props => {
  useEffect(() => {
    console.log("[Cockpit.jsx] useEffect");
    // Dummy HttpRequest using setTimeout()
    const timer = setTimeout(() => {
      alert("Saved data to cloud!");  // executes after 1s
    }, 1000);
    return () => {
      clearTimeout(timer);
      console.log("[Cockpit.js] cleanup work in useEffect");
    }
  }, []);

  useEffect(() => {
    console.log("[Cockpit.jsx] 2nd useEffect");
    return () => {
      console.log("[Cockpit.jsx] cleanup work in 2nd useEffect");
    };
  });

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
        className={btnCockpitStyleClasses}
        onClick={props.clicked}
      >
        Toggle Persons
      </button>
    </div>
  );
};

export default React.memo(Cockpit);
