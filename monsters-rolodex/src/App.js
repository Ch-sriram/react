import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          id: 'monster1',
          name: "Frankenstein"
        },
        {
          id: 'monster2',
          name: "Dracula"
        },
        {
          id: 'monster3',
          name: "Zombie"
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        {
          // We define each <h1> element with a key prop
          // for making the job of react easier, as it uses 
          // Virtual DOM and react doesn't need to always 
          // re - render the entire page to know where does it 
          // have to update the actual DOM. Instead, it uses 
          // the unique key's value to identify the element it 
          // has to change the state of. Because if we have a 
          // really big list with a million elements, to 
          // re-render all of those million elements is an 
          // unfeasible solution and therefore we use the key
          // prop on an HTML element.
          this.state.monsters.map(monster => <h1 key={monster.id}>{monster.name}</h1>)
        }
      </div>
    );
  }
}

export default App;
