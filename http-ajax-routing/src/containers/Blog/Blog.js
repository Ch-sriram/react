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
        {
        /**
         * Now, we will get the route information in the props
         * of the <Posts /> and <NewPost /> Components only.
         * 
         * Any Component rendered inside the <Posts /> and the 
         * <NewPost /> wouldn't get the routing information in 
         * their props.
         */
        }
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" component={NewPost} />
      </div>
    );
  }
}

export default Blog;
