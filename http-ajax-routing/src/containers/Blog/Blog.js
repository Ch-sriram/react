// LIBRARY IMPORTS
import React, { Component, Suspense } from "react";
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

// STYLING IMPORTS
import "./Blog.css";

// CUSTOM COMPONENTS
import Posts from '../../containers/Blog/Posts/Posts';  // direct import
// import NewPost from './NewPost/NewPost';
// import asyncLazyLoadComponent from '../../hoc/LazyLoader/asyncLazyComponent';

// this following line is a dynamic import using the import()
// const AsyncNewPost = asyncLazyLoadComponent(() => import('./NewPost/NewPost'));

const AsyncNewPost = React.lazy(() => import('./NewPost/NewPost')); // only supports default exports.

class Blog extends Component {
  state = { auth: true };
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
        <Switch>
          {this.state.auth ?
            <Route
              path="/new-post"
              render={() =>
                <Suspense fallback={<div style={{ textAlign: 'center' }}>Loading...</div>}>
                  <AsyncNewPost />
                </Suspense>
              }
            /> : null}
          <Route path="/posts" component={Posts} />
          <Route render={() => <h1 style={{textAlign: 'center'}}>404 Not Found</h1>} />
          {/*<Redirect from="/" to="/posts" />*/}
          {/*<Route path="/" component={Posts} />*/}
        </Switch>
      </div>
    );
  }
}

export default Blog;
