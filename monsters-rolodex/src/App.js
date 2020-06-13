/**
 * Learnings:
 * 1. Difference between .js and .jsx files.
 * 2. When and how to use functional components and class components.
 * 3. Destructuring props object in function component as a parameter.
 */

// Look into card-list.component.jsx to understand the comments.


import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';


import './App.css';

// Same as the following:
// class App extends React.Component {...} // use this syntax 
// if we didn't import Component by de-structuring it.
class App extends Component {
  constructor() {
    super(); // Calls React.Component's constructor() function
    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  // life-cycle method
  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  /**
   * Now that we have our search component, we might want to be
   * able to use the component multiple times and for that, we 
   * can simply make a new component, say SearchBox defined in 
   * search-box.component.jsx.
   * 
   * Why is that some of our files have the extension of .jsx 
   * and why some others have .js?
   * We know that create-react-app command hides a lot of the 
   * configuration done using webpack and babel. And so, what 
   * babel does is help transform any of the modern JS 
   * including the files with .jsx extension into older 
   * versions of javascript in the public directory when we 
   * run our 'build' script from our "scripts" of package.json 
   * file.
   * 
   * We will use the SearchBox component
   */

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <SearchBox
          placeholder='search monsters'
          handleChange={event => this.setState({searchField: event.target.value})}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
