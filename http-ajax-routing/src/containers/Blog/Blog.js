// LIBRARY IMPORTS
import React, { Component, Suspense } from "react";
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

// STYLING IMPORTS
import "./Blog.css";

// CUSTOM COMPONENTS
import Posts from '../../containers/Blog/Posts/Posts';  // direct import
// import NewPost from './NewPost/NewPost';
// import asyncLazyLoadComponent from '../../hoc/LazyLoader/asyncLazyComponent';

/**
 * Instead of using our own custom-made HOC, from React v16.6,
 * we can use React.lazy() method and replace what our 
 * asyncLazyLoadComponent() method did. The lazy() method also
 * takes in an anonymous callback function which returns a
 * call to the dynamic import() method, which returns a Promise
 */

// this following line is a dynamic import using the import()
// const AsyncNewPost = asyncLazyLoadComponent(() => import('./NewPost/NewPost'));

// Instead of the using our custom HOC for lazy loading the 
// <NewPost /> component, we can now use React.lazy() as shown
// below.
const AsyncNewPost = React.lazy(() => import('./NewPost/NewPost')); // only supports default exports.

/**
 * Now, we will render the <NewPost /> which is now our 
 * <AsyncNewPost /> component inside a <React.Suspense /> 
 * Component as shown in the `render` prop of the <Route />
 * component defined for the "/new-post" `path` below (line #72)
 */

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

/**
 * VERY IMPORTANT (README) on React.lazy() & <React.Suspense />
 * ------------------------------------------------------------
 * 
 * We can use lazy loading for any component using 
 * React.lazy() method along with the <React.Suspense /> 
 * wrapper. We can use it even for loading components which
 * aren't rendered from the <Route /> component defined 
 * inside the <BrowserRouter /> component.
 */
