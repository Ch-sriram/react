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
                  to="/posts/"
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
         * Now, if we change the `path` of the route for 
         * "/" to "/posts", then this will break the `path`
         * setting for the nested <Route /> components, as 
         * their `path` props are not defined in relation to
         * the `path` of their parent <Route />, but they're
         * defined in absolute terms, which is not what we 
         * want. And so, we change the path here from "/" to
         * "/posts" to render the <Posts /> component. 
         * 
         * And inside the Posts.js file, where we render the
         * <FullPost /> component depending on the click on a
         * single <Post /> component using a <Route />, for
         * which, we allot the `path` dynamically, using the
         * `url` information sent down to the <Posts /> 
         * component in its `props`, which can be accessed 
         * using `this.props.match.url`, which will in this 
         * case be same as "/posts", because the parent route
         * for that nested route is "/posts"
         */
        }
        <Switch>
          <Route path="/new-post" component={NewPost} />
          <Route path="/posts" component={Posts} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
