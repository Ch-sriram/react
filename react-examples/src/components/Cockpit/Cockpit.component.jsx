import React, { useEffect } from 'react';
import CockpitStyleClasses from './Cockpit-style.module.css';

/**
 * Whenever there are changes in the Parent component a 
 * Child component (for example, changes in App component 
 * directly affect the Cockpit component) will also get
 * re-rendered for a fact, and that's only limited till the 
 * Virtual DOM, not to the real DOM. Now, this process happens
 * every time there's some trigger/change at the Parent 
 * component and therefore, to even put a stop to processing
 * the child components even at the Virtual DOM level, what we
 * can do is, we can always use the shouldComponentUpdate() 
 * lifecycle method, but this will only work if the child 
 * component is also a class-based component, but it won't work
 * when the component is a functional component.
 * 
 * For a functional child component, what we do is, we wrap our
 * export (which is `export default Cockpit;`) with 
 * `React.memo()` method, which memoizes the overall 
 * information of the functional component. 
 * 
 * Now, because of this, React will now memoize/store the 
 * snapshot of the respective component, and because of this 
 * memoization, React will now re-render the respective 
 * functional component iff the input to the respective 
 * functional component changes.
 * 
 * And for that to happen, the input to the functional
 * component, which are the `props`, should've elements which
 * don't change on every render cycle/trigger.
 * 
 * For example: In this Cockpit component, the input, which are
 * the `props` will keep on changing on every render 
 * cycle/trigger, because we send in `state.persons` from 
 * <App/> component to the props in <Cockpit/> component, 
 * and because of that, whenever there's some re-render, the 
 * reference to the `state.persons` array changes and that 
 * change means that the previous snapshot has changed in 
 * <Cockpit/> component and so, we need to again re-render the
 * <Cockpit/> component to memoize the snapshot of the 
 * <Cockpit/> component after the render cycle/trigger. 
 * 
 * To avoid this, we can simply not send in the `state.persons`
 * array from the <App/> component as `props` to the <Cockpit/>
 * component, and send in only the relevant/required info which
 * we know for sure, won't change on every render cycle/
 * trigger.
 * 
 * We don't even need the full `state.persons` array, we just
 * need the array's length, and so, we can simply send in the
 * length as `props` to the <Cockpit/> component and avoid
 * re-render for every render cycle/trigger.
 */

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



/**
 * Output (when the Person component is updated)
 * ---------------------------------------------
 * 
 * [App.js] getDerivedStateFromProps {title: "Person Manager"}
 * [App.js] shouldComponentUpdate
 * [App.js] rendering...
 * [Persons.jsx] shouldComponentUpdate
 * [Persons.jsx] rendering...
 * [Person.jsx] rendering...
 * [Persons.jsx] getSnapshotBeforeUpdate
 * [Persons.jsx] componentDidUpdate
 * {message: "Hello 🖖 🖖 from getSnapshotBeforeUpdate()"}
 * 
 * Only when anything related to <Cockpit/> component is being
 * rendered, the lifecycle hooks inside <Cockpit/> component
 * are in-effect and are executed respectively, otherwise, as
 * we can see above, whenever we affect the `state.persons` 
 * object from the <input> component of the <Person/> 
 * component, in that case, <Cockpit/> is not rendered.
 */
