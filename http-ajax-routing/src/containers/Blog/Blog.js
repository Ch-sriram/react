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

class Blog extends Component {
  componentDidMount() {
    console.log("[Blog.js]...", this.props);
  }

  render() {
    return (
      <div className="Blog">
        <header>
          {
          /**
           * Every time we set a path using the `pathname` object
           * or using the `to` prop inside the <Link /> 
           * Component, we always set the path to be absolute.
           * 
           * To turn the path we set into a relative path, we've
           * to use the props which contain the Route Information
           * and in there, we'll find the `url` from:
           *  `this.props.match.url`, to which we can access the
           * "/new-post" or any other path we want to add.
           * 
           * We can do it as follows:
           *  pathname: `${this.props.match.url}/new-post`
           */
          }
          <nav>
            <ul>
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

export default Blog;
