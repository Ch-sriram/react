import React, { Component } from "react";
import { connect } from "react-redux";

import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";
import * as actionTypes from "../store/actions";

/**
 * In this example, we are combining the local UI state which
 * works in tandem with the state managed inside the redux 
 * STORE. The local UI state is passed as payload to the 
 * dispatched ACTIONs.
 */

class Persons extends Component {
  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.onAddedPerson} />
        {this.props.prs.map((person) => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.onRemovedPerson(person.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    prs: state.persons,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddedPerson: (name, age) => dispatch({ type: actionTypes.ADD_PERSON, personData: {name, age} }),
    onRemovedPerson: (id) =>
      dispatch({ type: actionTypes.REMOVE_PERSON, personId: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
