// LIBRARY IMPORTS
import React, { Component } from "react";
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

// STYLING IMPORTS
import "./Blog.css";

// CUSTOM COMPONENTS
import Posts from '../../containers/Blog/Posts/Posts';
import NewPost from './NewPost/NewPost';

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
              <li>
                <NavLink
                  to="/posts"
                  exact
                  activeClassName="my-active"
                  activeStyle={{
                    color: "#FA923F",
                    textDecoration: "underline",
                  }}
                >
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true",
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {
        /**
         * The <Redirect /> component doesn't render the 
         * component, it simply finds the route mentioned in
         * the `to` prop and then literally redirects the 
         * rendering work to the <Route /> component.
         */
        }
        {
        /**
         * Now, whenever we make a post request by posting a 
         * new post from the "New Post" link inside the
         * "/new-post" route, we want to redirect after posting
         * a new post, to the "/posts" route. 
         * 
         * For that, we have to do some conditional routing
         * which can be seen inside the <NewPost /> component
         * inside the NewPost.js file.
         */
        }
        <Switch>
          <Route path="/new-post" component={NewPost} />
          <Route path="/posts" component={Posts} />
          <Redirect from="/" to="/posts" />
          {/*<Route path="/" component={Posts} />*/}
        </Switch>
      </div>
    );
  }
}

export default Blog;
