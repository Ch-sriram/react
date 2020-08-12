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
         * Every JS framework/library offers some solution to
         * Guard Navigation to Routes with some kind of a 
         * construct. In React, we can simply use the inbuilt 
         * state or some other state indicator to simply 
         * render a Route or not, depending on the state. 
         * 
         * Let's just say, for argument sake, that we have a 
         * `auth` state which is false for now. Depending on 
         * the truth value of `auth`, we would either render
         * or not render the "/new-post" route as shown below.
         */
        }
        <Switch>
          {this.state.auth ? <Route path="/new-post" component={NewPost} /> : null}
          <Route path="/posts" component={Posts} />
          <Redirect from="/" to="/posts" />
          {/*<Route path="/" component={Posts} />*/}
        </Switch>
        {
        /**
         * Sometimes, we might not want to handle the `auth` 
         * to render the <NewPost /> component (in this case)
         * at this level (i.e., inside the <Blog /> component),
         * but maybe at the component level itself (i.e., at 
         * the <NewPost /> component itself). In that case, we
         * can handle the authentication details at the 
         * lifecycle method of the <NewPost /> component, 
         * inside the componentDidMount() lifecycle method,
         * demonstrated as a comment inside the <NewPost /> 
         * component (i.e., inside, NewPost.js file).
         */
        }
      </div>
    );
  }
}

export default Blog;
