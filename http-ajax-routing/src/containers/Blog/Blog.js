// LIBRARY IMPORTS
import React, { Component } from "react";
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

// STYLING IMPORTS
import "./Blog.css";

// CUSTOM COMPONENTS
import Posts from '../../containers/Blog/Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
  state = { auth: false };

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
         * To handle a 404 (Bad Request / Not Found) Error, 
         * we can do what we did below, i.e., Use a route to 
         * handle all general routes that start with "/", and
         * redirect them to a specified working route (like
         * "/posts") as shown below using the <Redirect /> 
         * component.
         */
        }
        {
          // <Switch>
          //   {this.state.auth ? <Route path="/new-post" component={NewPost} /> : null}
          //   <Route path="/posts" component={Posts} />
          //   <Redirect from="/" to="/posts" />
          //   {/*<Route path="/" component={Posts} />*/}
          // </Switch>
        }

        {
        /**
         * But to handle 404 Error, we have another way, which
         * is to use a pathless <Route /> component, which is
         * placed at the end inside the <Switch /> component.
         * 
         * This pathless <Route /> will just have a `render` or
         * `component` prop, which simply renders 
         * "404 Not Found" text onto the view, whenever someone
         * tries to access a path that's not defined for our 
         * application. It is done as shown below.
         */
        }
        <Switch>
          {this.state.auth ? <Route path="/new-post" component={NewPost} /> : null}
          <Route path="/posts" component={Posts} />
          <Route render={() => <h1 style={{textAlign: 'center'}}>404 Not Found</h1>} />
          {/*<Redirect from="/" to="/posts" />*/}
          {/*<Route path="/" component={Posts} />*/}
        </Switch>
        {
        /**
         * The pathless <Route /> component in line #87 will
         * catch any route that hasn't been handled by the 
         * previous <Route /> component(s) (where the 
         * <Route /> components also include the `path` 
         * information).
         */
        }
      </div>
    );
  }
}

export default Blog;

/**
 * Now if we click on "New Post" link, we will see the message
 * "404 Not Found" rendered onto the view. Even, for any other
 * route which hasn't been handled, we will see the same 
 * message, which is "404 Not Found".
 */
