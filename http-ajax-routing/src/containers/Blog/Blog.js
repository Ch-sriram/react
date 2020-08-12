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
         * For re-routing, we have a special component 
         * provided by react-router-dom, which is known as 
         * the <Redirect /> component.
         * 
         * When we specify the <Redirect /> Component inside
         * the <Switch /> Component, we can specify an extra
         * prop for redirection which is the `from` prop, using
         * which, we can mention the route from which we'll 
         * redirect. 
         * 
         * Example: We want to redirect to "/posts", even 
         * when we visit "/" route. And so, for that, we give
         * the <Redirect /> component with from="/" and 
         * to="/posts" props respectively. 
         * 
         * NOTE: Using the `from` prop for the <Redirect />
         * component only can be given when the <Redirect />
         * component is given inside the <Switch /> component.
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
