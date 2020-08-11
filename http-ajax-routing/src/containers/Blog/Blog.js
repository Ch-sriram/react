// LIBRARY IMPORTS
import React, { Component } from "react";
import { Route, NavLink } from 'react-router-dom';

// STYLING IMPORTS
import "./Blog.css";

// CUSTOM COMPONENTS
import Posts from '../../containers/Blog/Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

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
              <li><NavLink to="/" exact
                activeClassName="my-active"
                activeStyle={{
                  color: '#FA923F',
                  textDecoration: 'underline'
                }}
              >Home</NavLink></li>
              <li><NavLink to={{
                pathname: '/new-post',
                hash: '#submit',
                search: '?quick-submit=true',
              }}>New Post</NavLink></li>
            </ul>
          </nav>
        </header>
        {
        /**
         * All routes mentioned below will be rendered if they
         * match the `path`, and so, this is the reason why
         * components related to "/new-post" and "/:id" are 
         * rendered even when the "/new-post" path is active.
         * 
         * We can fix it by naming our `path` for <FullPost />
         * component to be "/posts/:id" here, and then fixing 
         * each <Post /> component to be routed to "/posts/id" 
         * in Posts.js file. Route-renaming solution shown 
         * below.
         */
        }
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" component={NewPost} />
        <Route path="/posts/:id" exact component={FullPost} />
      </div>
    );
  }
}

export default Blog;
