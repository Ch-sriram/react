// LIBRARY IMPORTS
import React, { Component } from "react";
import { Route, NavLink, Switch } from 'react-router-dom';

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
         * We can redirect the "/" route to "/posts", by using 
         * the <Route /> component to render the <Posts />
         * component even for the "/" route.
         * 
         * But we need to be careful when defining the route
         * for "/", as the order of the route definition does 
         * matter here, as every route that precedes the "/"
         * route, if it is defined before the "/posts" & 
         * "/new-post" route, will always match the "/" route
         * for even the "/new-post" & "/posts" route request.
         */
        }
        <Switch>
          <Route path="/new-post" component={NewPost} />
          <Route path="/posts" component={Posts} />
          <Route path="/" component={Posts} />
        </Switch>
        {
        /**
         * Although, the approach above works well, the only 
         * problem here is, now, for <Posts /> component, 
         * there are 2 routes, one is "/" and the other is 
         * "/posts". 
         * 
         * Even when we route to "/", we would see what we will
         * see for "/posts" route, but if we look at the 
         * address bar, it is not being re-routed to "/posts"
         * when we are on the "/" route. We are actually seeing
         * the <Posts /> component inside the "/" route.
         * 
         * When we click any of the <Post /> inside the 
         * <Posts /> component, React automatically routes to 
         * the "/posts" route (only after we configure the 
         * click event on the each individual <Post /> 
         * component properly, for the resolution of the 
         * routes), but its core functionality of the 
         * re-routing is not achieved here.
         */
        }
      </div>
    );
  }
}

export default Blog;
