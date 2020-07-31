// LIBRARY IMPORTS
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// CUSTOM COMPONENTS
import PersonStyleClasses from './Person-style.module.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary.hoc';
import withClass from '../../../hoc/WithClass/withClass.closureHOC';

/**
 * We've the <input /> tag where we can change the name of the
 * respective person. However, if we want to get access to the 
 * <input /> JSX element (this method would work for any HTML
 * element also), then, we're not only limited to set two-way
 * binding (which is nice for getting the value we entered), 
 * but let's say we want to focus on the <input /> element 
 * after the component is rendered (i.e., the last rendered 
 * Person component's <input /> element should automatically 
 * receive focus), in that case, in regular JS, we would simply
 * use `document.querySelector("input").focus();`, and if we 
 * implement that in componentDidMount() lifecycle method in 
 * the Person component below, then, we would get the focus
 * only on the 1st Person component's <input /> element (which
 * is not what we want). This happened because every time a new
 * Person component is rendered and mounted onto the view, the
 * line: `document.querySelector("input").focus();` runs and JS
 * always chooses the first <input /> element that occurs on 
 * the document.
 * 
 * Therefore, this approach is incorrect for what we want, and
 * we there's another approach with Refs in React, and that's 
 * what we should focus on next.
 */

class Person extends PureComponent {
  /** INCORRECT APPROACH. REASONS MENTIONED ABOVE. */
  // componentDidMount() {
  //   document.querySelector("input").focus();
  // }

  /**
   * To focus on the last <input /> of the latest rendered
   * Person component, we use Refs in React, using which we can
   * select and do whatever we want to do with the respective
   * JSX element.
   * 
   * On any JSX element, we can add a special `prop` called as
   * `ref` (just like `key` prop). This `ref` property on a JSX
   * element can be used in a couple of different ways.
   * 
   * Way #1: Supported also in the older versions of React.
   * We pass an anonymous function with a single argument, and
   * the single argument we pass into the anonymous function is
   * the reference to the JSX element we placed our `ref` prop
   * on. We can see it down below in <input /> JSX element.
   */

  componentDidMount() {
    this.inputElementRef.focus();
  }
  
  render() {
    console.log("[Person.jsx] rendering...");
    return (
      <Aux>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I'm {this.props.age} years old!
        </p>
        <input
          ref={inputElement => {
            // direct usage from here:
            // inputElement.focus();

            // indirect usage, at some other place:
            this.inputElementRef = inputElement; // inputElementRef used inside componentDidMount() lifecycle method to call focus().
          }}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  changed: PropTypes.func,
  age: PropTypes.number,
  name: PropTypes.string
};

export default withClass(Person, PersonStyleClasses.Person);
