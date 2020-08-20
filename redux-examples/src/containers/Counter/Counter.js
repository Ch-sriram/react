// LIBRARY IMPORTS
import React, { Component } from "react";
import { connect } from "react-redux";

// STYLING & CUSTOM COMPONENT IMPORTS
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

/**
 * Now, in our <Counter /> container, how do we access the
 * Redux STORE?
 *
 * For that, we need to connect this container with the Redux
 * STORE, or, to be precise, in the end what want to do is, we
 * want to setup a SUBSCRIPTION in this container.
 *
 * We connect the Redux STORE to this container, a bit
 * differently compared to how we did using Vanilla JS.
 *
 * We won't connect the Redux STORE to this container manually
 * by calling the store.subscribe() method, but instead, we'll
 * use a feature provided by 'react-redux' package, which is
 * known as `{ connect } from 'react-redux'` as imported above.
 *
 */

class Counter extends Component {
  state = {
    counter: 0,
  };

  counterChangedHandler = (action, value) => {
    switch (action) {
      case "inc":
        this.setState(prevState => {
          return { counter: prevState.counter + 1 };
        });
        break;
      case "dec":
        this.setState(prevState => {
          return { counter: prevState.counter - 1 };
        });
        break;
      case "add":
        this.setState(prevState => {
          return { counter: prevState.counter + value };
        });
        break;
      case "sub":
        this.setState(prevState => {
          return { counter: prevState.counter - value };
        });
        break;
      default:
    }
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={() => this.counterChangedHandler("inc")}
        />
        <CounterControl
          label="Decrement"
          clicked={() => this.counterChangedHandler("dec")}
        />
        <CounterControl
          label="Add 5"
          clicked={() => this.counterChangedHandler("add", 5)}
        />
        <CounterControl
          label="Subtract 5"
          clicked={() => this.counterChangedHandler("sub", 5)}
        />
      </div>
    );
  }
}

/**
 * `connect` is a HOC, which we use to wrap it around this
 * container (i.e., <Counter /> Component) when we export this
 * container (or, component). However, we won't wrap the
 * component directly, because `connect` itself is a function
 * that returns a function, and that returned function itself
 * takes the respective component/container as a parameter.
 *
 * Therefore, `connect` is a function that returns a HOC, which
 * means, `connect` is a closure HOC. And so, we pass in 2
 * vital pieces of information before `connect` actually wraps
 * around the actual container/component.
 *
 * The 2 pieces of information we send in as the the first set
 * of parameters to the `connect` closure HOC are:
 *  1. Which part of the whole application state is interesting
 *     to us? (Here, we are only interested in `counter`, from
 *     the state of this application. For a bigger app, we
 *     might want a different slice of the state)
 *  2. Which ACTIONs do we want to DISPATCH? (In a bigger app,
 *     we may have thousands of ACTIONs Dispatched from all
 *     over the application, but a given individual container
 *     may only DISPATCH a couple of ACTIONs)
 *
 * 1 =>
 * The part of the state we want to get is defined below as
 * `mapStateToProps` constant (NOTE that it is defined after
 * the container is defined, in this case, our <Counter />
 * component/container).
 *
 * `mapStateToProps` stores a function which expects a state
 * stored in Redux as the input parameter, and returns a JS
 * Object of the mapping of the prop names and slices of the
 * state stored in the Redux STORE. The `mapStateToProps`
 * function will eventually be executed by `connect` from
 * 'react-redux' package, as we'll pass it as the first param
 * to the first set of parameters to the `connect` closure HOC.
 */

// The `state` passed on here, will be given to us by
// 'react-redux', which ofcourse will reach out to the required
// state store inside the Redux STORE.
const mapStateToProps = state => {
  return { ctr: state.counter };
};

/**
 * Now, we can use `ctr` as a prop inside this container, which
 * is the `counter` inside the Redux Store, which is handled by
 * the REDUCER implemented at [store/reducer.js].
 * 
 * The actual Redux STORE is available inside [index.js] 
 * module. Now, if we send mapStateToProps as the first param
 * inside the first set of params to the `connect` closure HOC,
 * we will out <Counter /> container/component back, which will
 * have access to the `ctr` stored in the Redux STORE, as a 
 * prop. We can now access the `ctr` from inside the Redux 
 * STORE, using `this.props.ctr`, which is accessed above in
 * line #61.
 */

export default connect(mapStateToProps)(Counter);

/**
 * Now, to actually make sure that the state change inside
 * the Redux STORE is reflected in the UI, we will DISPATCH
 * the ACTIONs.
 */
