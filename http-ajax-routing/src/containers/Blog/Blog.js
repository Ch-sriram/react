// LIBRARY IMPORTS
import React, { Component } from "react";
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

// STYLING IMPORTS
import "./Blog.css";

/**
 * One concept, which is very important, and easy to implement,
 * is Code Splitting (aka Lazy Loading), where we load routes/
 * components that we don't require all the time, to be loaded
 * when they're required (or when they're requested for by the
 * user).
 * 
 * Without Lazy Loading, what we generally do is, we try to 
 * get the entire `bundle.js` file whenever we request for the
 * webapp. For smaller webapps, loading the entire app makes
 * sense. But if an application is extremely big, in that 
 * scenario, we might want to lazy load certain components 
 * when they're required/requested by the user. Such components
 * in the webapp generally exits for different routes, or 
 * sometimes, at the component level itself. The solution is to
 * lazy load such components/routes entirely, using the new ES6
 * async import() method.
 * 
 * We generally create a HOC inside which we basically pass an
 * component, which would be loaded lazily (asynchronously), 
 * which is the HOC created as a LazyLoader inside the `hoc`
 * directory in our webapp.
 * 
 * For this lazy loading example, we will set the state for 
 * `auth` to true, so that we have access to the "/new-post"
 * route. This "/new-post" route can be lazy loaded, only when
 * the user wants to post a new post onto the database. 
 * Therefore, loading the component related to the "/new-post"
 * route is unnecessary, and so, we need not load the component
 * related to "/new-post" route upfront, instead, we can always
 * lazy load the respective component and its child components 
 * when the user wants/needs it.
 * 
 * This technique of downloading/acquiring a resource 
 * (component in this case) only when needed by the end-user, 
 * is known as Code Splitting (or) Lazy Loading.
 * 
 * NOTE: Code Splitting is heavily dependent on the WEBPACK 
 * configuration. The Webpack config generated from the 
 * `npx create-react-app` command, has a webpack configuration
 * which supports the implementation of code splitting as shown
 * in here.
 */

// CUSTOM COMPONENTS
/**
 * Direct imports inform Webpack (The Build Tool used BTS) that
 * this particular component that's being imported, is a 
 * dependency which is to be included directly inside 
 * `bundle.js` file (which is the final file to deployed).
 * 
 * For Lazy Loading, we don't want to import the component
 * (or resource) directly, as shown above for React and 
 * Component (or for Posts as shown below), but we want to 
 * load it only when needed.
 * 
 * For that, we need to prepare Webpack to dynamically bundle 
 * some extra resource/component for this potentially loaded
 * code. 
 * 
 * Therefore, to import the <NewPost /> component dynamically
 * (for lazy loading on "/new-post/" route), we will import the
 * HOC which lazy loads the required component passed to the 
 * dynamic import() method, and returns the respective 
 * component related to the specified module which is mentioned
 * as a parameter to the dynamic import() method.
 */
import Posts from '../../containers/Blog/Posts/Posts';  // direct import
// import NewPost from './NewPost/NewPost';
import asyncLazyLoadComponent from '../../hoc/LazyLoader/asyncLazyComponent';

// this following line is a dynamic import using the import()
const AsyncNewPost = asyncLazyLoadComponent(() => import('./NewPost/NewPost'));

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
        {
        /**
         * Now, we can use the <AsyncNewPost /> component
         * that we will get dynamically, only when the 
         * component related to the "/new-post" route is 
         * routed/clicked by the user.
         */
        }
        <Switch>
          {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null}
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
 * Now, whenever we click on the "New Post" link (or get 
 * routed to "/new-post" route), we might not see any changes
 * upfront, but if we open the `Network` tab of the Dev Tools
 * of our browser, and then see what is happening when we go
 * to the "/new-post" route for the first, we can see that we
 * are actually downloading the required JS file as a small
 * chunk from the server (thanks to HTTP v2) asynchronously.
 * 
 * Whereas, before lazy loading the <NewPost /> component, we
 * were getting it inside the bundle.js file at once.
 */
