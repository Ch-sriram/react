import React from 'react';
import Person from './Person/Person.component';

const Persons = props => (
  props.persons.map((person, index) => {
    return (
      <Person
        key={person.id}
        click={() => props.clicked(index)}
        name={person.name}
        age={person.age}
        changed={event => props.nameChanged(event, person.id)}
      />
    );
  })
);

export default Persons;
