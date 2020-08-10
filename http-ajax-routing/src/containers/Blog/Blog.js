// LIBRARY IMPORTS
import React, { Component } from "react";
import { Route, Link } from 'react-router-dom';

// STYLING
import "./Blog.css";

// CUSTOM COMPONENTS
import Posts from '../../containers/Blog/Posts/Posts';
import NewPost from './NewPost/NewPost';

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

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              {
              /**
               * Now, this <Link to="/"> Component below will
               * not reload the entire page, whereas, it will
               * just render the component which is given in
               * the path using the `to` prop.
               * 
               * The `to` prop can also be a more complex 
               * element, which can be an entire JS object, 
               * that takes in a config which can be as 
               * follows:
                  * {
                  *  pathname: '/new-post',
                  *  hash: '#submit',
                  *  search: `?quick-submit=true',
                  * }
               * where, `pathname` is the route address,
               *        `hash` is used for going to a specified
               *               id inside the route we mentioned
               *               above in `pathname`.
               *        `search` is for query parameters to the
               *                 link in the address bar.
               * 
               * Example shown below.
               */
              }
              <li><Link to="/">Home</Link></li>
              <li><Link to={{
                pathname: '/new-post',
                hash: '#submit',
                search: '?quick-submit=true',
              }}>New Post</Link></li>
            </ul>
          </nav>
        </header>
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" component={NewPost} />
      </div>
    );
  }
}

/**
 * Now our app won't reload every time we click on the links
 * aforementioned in the "Home" and "New Post" links.
 */

export default Blog;
