/**
 * Learnings:
 * 1. Deploying our app on GitHub Pages.
 * 2. Adding finishing touches and styling the app.
 */

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
      searchField: "",
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  // life-cycle method
  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = event => this.setState({ searchField: event.target.value });

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
 
export default App;

/**
 * To host the project on GitHub Pages: 
 * 
 * 1. Go to GitHub and create a new repository called 
 * "monsters-rolodex".
 * 2. We will copy either the SSH/HTTPS link for the repository
 * and then go to the terminal of monsters-rolodex project.
 * 3. we'll type in `git remote add origin [Paste the SSH/HTTPS link here]`.
 * 4. We will include the gh-pages package in our GitHub repo 
 * by typing in `yarn add gh-pages`.
 * 5. Then we go into the package.json file of our project and 
 * add a "homepage" info before the "dependencies" object as 
 * follows: "homepage": https://[username].github.io/[repo_name]
 * where [username] is the username of your 
 * github profile and [repo_name] is the name of the repo 
 * which we created, which is monsters-rolodex.
 * 6. After that, inside the "scripts" object in the package.
 * json file, we'll add 2 more scripts which are `"predeploy": "npm build"`
 *  and `"deploy": "gh-pages -d build"`. We just need to run 
 * the deploy script, which also automatically run the 
 * predeploy script.
 * 7. Now, in our terminal (inside where the package.json file 
 * is located at), we'll run the deploy script using `npm run 
 * deploy` or `yarn deploy` and it'll also run the predeploy 
 * script before it runs the deploy script that we defined in 
 * step 6. 
 * 8. After that, we'll simply add the files to the repo's 
 * staging area and then commit the changes and then push the 
 * changes to the remote git repository hosted on github.
 * 
 */