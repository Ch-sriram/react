import React, { useEffect } from 'react';
import CockpitStyleClasses from './Cockpit-style.module.css';

/**
 * useEffect() in its previous implementation where we simply
 * logged to the console, ran every time - the Cockpit
 * component was rendered because of changes in the state/props
 * of the parent component.
 * 
 * Now, what if we want to send an HttpRequest inside the 
 * useEffect() lifecycle method, but only want to do it when 
 * the component is rendered for the first time, and not for
 * every re-render cycle.
 */

const Cockpit = props => {

  // useEffect(() => { 
  //   console.log("[Cockpit.jsx] useEffect");
  //   // Dummy HttpRequest using setTimeout()
  //   setTimeout(() => {
  //     alert("Saved data to cloud!");  // executes after 1000ms
  //   }, 1000);
  // });

  /**
   * The above useEffect() executes after every re-render, and
   * that's a hassle, because we only want the useEffect() hook
   * for this component run, only when there's some change
   * to the props we receive for this component.
   * 
   * Therefore, if we only trigger useEffect() method when our
   * this.state.persons changes in <App/> component (which is
   * referred as props.persons in here), then for that, we will
   * send in a second argument to the useEffect() lifecycle
   * hook, which is some array of data that can change, and 
   * when that data changes, depending on the change, the 
   * useeEffect() lifecycle hook executes.
   * 
   * We can see its implementation below
   */

  // useEffect(() => { 
  //   console.log("[Cockpit.jsx] useEffect");
  //   // Dummy HttpRequest using setTimeout()
  //   setTimeout(() => {
  //     alert("Saved data to cloud!");  // executes after 1000ms
  //   }, 1000);
  // }, [props.persons]);

  /**
   * Now, if we want to execute the useEffect() hook only when
   * the component renders the first time, in that case, we 
   * would send in an empty array [] as the 2nd argument to 
   * the useEffect() lifecycle hook. Here, we are trying to
   * augment componentDidMount()'s usage using useEffect() 
   * lifecycle hook.
   * 
   * This below useEffect() implementation runs only once, when
   * the app starts, after that, it never runs again.
   */

  useEffect(() => {
    console.log("[Cockpit.jsx] iseEffect");
    // Dummy HttpRequest using setTimeout()
    setTimeout(() => {
      alert("Saved data to cloud!");  // executes after 1s
    }, 1000);
  }, []);

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
