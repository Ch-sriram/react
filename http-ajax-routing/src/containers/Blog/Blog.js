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
 * Instead of rendering the components directly using the 
 * `render` prop, we will use the `component` prop inside the 
 * <Route /> Component to give the `component` prop a reference
 * to the component we want to render at that exact specified
 * route in the `path` prop of the <Route /> Component.
 * 
 * The example is shown below.
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
        {/*<Route path="/" exact render={() => <h1>Home</h1>}/>
        <Route path="/" render={() => <h1>Home 2</h1>}/>*/}
        
        {/**
          Instead of rendering the component using the `render`
          prop, we can render using the `component` prop as
          shown below:
        */}
        <Route path="/" exact component={Posts} />

        {/**
          If we still want to use the `render` prop to render
          the component we need onto the specified route inside
          the path we want to render to, we'd use the `render`
          prop as shown below:
        */}
        <Route path="/" exact render={() => <Posts />} />
      </div>
    );
  }
}

export default Blog;
