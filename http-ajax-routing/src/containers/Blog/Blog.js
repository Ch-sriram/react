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
                  to="/"
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
        {/**
         * Till now, we have generated a <FullPost /> in its
         * own route inside the browser, instead of rendering
         * the <FullPost /> below the selected <Post />
         * component itself inside the "/" route itself.
         *
         * What we can do is, we can add the route to render
         * the <FullPost /> component inside the <Posts />
         * component which itself is inside the <Blog />
         * component as a <Route /> component.
         *
         * So this here, will be Nested Routing, i.e.,
         * <Route /> component, inside another component,
         * which is rendered from a <Route /> component.
         *
         * Now, if we want to load the selected/clicked post
         * beneath the generated list of <Post /> components
         * in the "/" route, for that, we need to move the
         * "/:id" route's component, to be rendered inside the
         * <Posts /> component, as seen in Post.js file.
         */}
        {
          // <Switch>
          //   <Route path="/" exact component={Posts} />
          //   <Route path="/new-post" component={NewPost} />
          // </Switch>
        }

        {/**
         * With the Routing setup made above, whenever we click
         * on any of the <Post /> inside the <Posts />
         * component rendered at the "/" route, we will see
         * that the <FullPost /> related to that particular
         * component won't be rendered at the same route, and
         * that happens because we've the `exact` prop as true
         * for the "/" route.
         *
         * Which also means that, the "/:id" route won't be
         * activated whenever we click on a <Post /> inside
         * the <Posts /> component.
         *
         * So we need to remove the `exact` prop from the "/"
         * route, and then also re-arrange the <Route />
         * components, as now, if the `exact` is false for "/"
         * route, it will also consume "/new-post" route, and
         * so, that would be counter-productive.
         *
         * So the correct Route config is shown below:
         */}
        <Switch>
          <Route path="/new-post" component={NewPost} />
          <Route path="/" component={Posts} />
        </Switch>
        {
        /**
         * This in itself is nested routing, as we can see it
         * in action, when we open the App now, to see that
         * a selected <Post /> now renders as <FullPost/>
         * below the <Posts /> component.
         */
        }
      </div>
    );
  }
}

export default Blog;
