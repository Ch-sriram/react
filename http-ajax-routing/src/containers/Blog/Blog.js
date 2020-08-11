// LIBRARY IMPORTS
import React, { Component } from "react";
import { Route, NavLink, Switch } from 'react-router-dom';

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
              <li>
                <NavLink
                  to="/"
                  exact
                  activeClassName="my-active"
                  activeStyle={{
                    color: "#FA923F",
                    textDecoration: "underline",
                  }}
                >
                  Home
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
        {/**
         * Even though we can use unique route names and
         * hard-code the routing information for each route,
         * (even for dynamic routes), but this approach has its
         * drawback, which is that, it's a hack, not a
         * solution. A proper solution can be achieved using
         * the <Switch /> component from 'react-router-dom'.
         *
         * Using the <Switch /> Component, we can wrap the
         * <Route /> Components inside it, in a scenario where
         * we only want to load 1 route at a time.
         */}
        {
          // <Switch>
          //   <Route path="/" exact component={Posts} />
          //   <Route path="/new-post" component={NewPost} />
          //   <Route path="/:id" exact component={FullPost} />
          // </Switch>
        }

        {/**
         * This config above works perfectly fine. Now if we
         * change the ordering, where the "/:id" route comes
         * before the "/new-post" route, then, even the
         * "/new-post" route will be rendered dynamically as
         * "/:id", because it matches anything with the prefix
         * of "/", and so, when parsing, the "/:id" route comes
         * before "/new-post" route, and so, the request for
         * "/new-post" also gets clubbed as request for "/:id"
         * and so, we will get an error for that.
         */}
        {
          // <Switch>
          //   <Route path="/" exact component={Posts} />
          //   <Route path="/:id" exact component={FullPost} />
          //   <Route path="/new-post" component={NewPost} />
          // </Switch>
        }

        {/**
         * Although, we can also mix and match the Routes by
         * taking some <Route /> components out of the
         * <Switch />, and having some other inside the
         * <Switch /> component, which is done as shown below.
         */}
        <Route path="/" exact component={Posts} />
        <Switch>
          <Route path="/new-post" component={NewPost} />
          <Route path="/:id" exact component={FullPost} />
        </Switch>
        {
        /**
         * This configuration above works very well. NOTE that
         * the order of the <Route /> components matter here.
         * If we have the "/:id" route before the "/new-post"
         * route, then for every route that matches the prefix
         * of "/:id" (where "/new-post" also matches), React 
         * Router will always render the <NewPost /> component.
         */
        }
      </div>
    );
  }
}

export default Blog;
