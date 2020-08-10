// LIBRARY IMPORTS
import React, { Component } from "react";
import { Route } from 'react-router-dom';

// CUSTOM COMPONENTS
import Post from "../../components/Post/Post";
import FullPost from "./FullPost/FullPost";
import NewPost from "./NewPost/NewPost";
import "./Blog.css";
import Posts from '../../containers/Blog/Posts/Posts';

/** REMAINING OLD STATE
 * 
    selectedPostID: null,
    error: false,
 */

/** The following comes inside div with className="Blog" after
 * <Posts /> component.
 * <section>
    <FullPost id={this.state.selectedPostID} />
   </section>
   <section>
    <NewPost />
   </section>
 */

/**
 * Instead of hard-coding the components to be rendered onto 
 * the home "/" route, we can render the components dynamically
 * using the <Route /> component, in which we define the `path`
 * and `render` props. For a certain `path` we define, we can 
 * also define the `exact` prop to be true/false depending on
 * how we want to render the components, whether we want to 
 * render the components on the specified path exactly, or we 
 * might not want to render the components on the specified 
 * path exactly. 
 */

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/new-post">New Post</a></li>
            </ul>
          </nav>
        </header>
        <Route path="/" exact render={() => <h1>Home</h1>}/>
        <Route path="/" render={() => <h1>Home 2</h1>}/>
      </div>
    );
  }
}

/**
 * Line #52's `render` prop will run every time the "/" path
 * is searched for in the browser, but Line #53's `render` prop
 * will run for every route, iff that route is not setup 
 * previously. For example, on the route "/new-post", we will
 * see the output `<h1>Home 2</h1>`, but not the output, 
 * `<h1>Home</h1>`, because `<h1>Home</h1>` (being rendered in
 * Line #52) will only be rendered when the specified path is 
 * "/", because we've already mentioned the `exact` prop to be 
 * true for that <Route /> Component.
 */

export default Blog;
