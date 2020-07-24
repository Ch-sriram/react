import React from 'react';
import styled from 'styled-components';

/**
 * In order for us to use CSS in JS using styled-components
 * library, we use the concept of Tagged Templates, which
 * looks a little weird, but is actually extremely intuitive.
 * 
 * We send in a template string to a function (in this case, 
 * the function is imported from styled-components library),
 * and the function executes depending on the template that 
 * has been sent in, this is the usage of a tagged template.
 * 
 * When using the styled object's tagged template(s), we
 * generally get a React Component as the returned object.
 * 
 * In the tagged template of styled object's tagged template
 * methods, we define normal CSS rules for that particular 
 * component, and it only applies to that particular 
 * component and not to the global context of the app.
 * 
 * Because of this approach, we can get rid of the class/id
 * selectors when defining a style for a particular 
 * component. Instead, we simply focus on styling of the 
 * component individually.
 * 
 * Demonstration of `styled from styled-components` below:
 */

const StyledDiv = styled.div`
  width: 60%;
  margin: 10px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;

  input[type="text"] {
    text-align: center;
    width: 30%;
  }

  @media (min-width: 500px) {
    width: "450px";
  }
`;

const person = (props) => {
  /**
   * Now, we can get rid of the <div className="person"> we 
   * previously had, and wrap the children elements into 
   * StyledDiv which we defined above.
   */
  return (
    <StyledDiv>
      <p onClick={props.click}>
        I'm {props.name} and I'm {props.age} years old!
      </p>
      <input
        type="text"
        onChange={props.changed}
        value={props.name}
      />
    </StyledDiv>
  );
}

export default person;
