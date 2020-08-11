// LIBRARY IMPORTS
import React, { Component } from "react";
import { Route, NavLink } from 'react-router-dom';

// STYLING
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
          {
          /**
           * Using <NavLink /> Component, we can use some extra
           * props which allow us to define some styling for the
           * active link, i.e., the link that's actually clicked.
           * 
           * Now, when we can style the links in Blog.css file, 
           * for their respective class/id/element along with the
           * .active class, to change the styling when the link
           * is actually active, i.e., the contents of the route
           * related to that link are being displayed on the 
           * page/view.
           * 
           * Now, when we click on the "New Post" link, even the
           * "Home" link is styled as if it is having the .active
           * class, but it is actually having the .active class,
           * and that's because the <NavLink /> applies the 
           * .active class to every link that has the route 
           * prefixed with the path "/". We need to get rid of 
           * this behaviour by giving the `exact` prop to the 
           * <NavLink /> component related to "Home" Link as 
           * shown below.
           */
          }
          <nav>
            <ul>
              <li><NavLink
                to="/"
                exact
                /**
                 * Sometimes, we might not want the default 
                 * class, which is .active, to be the class name,
                 * when we click the link. We might want to have
                 * our own class name applied to the active link,
                 * and that can be done as shown below:
                 */
                activeClassName="my-active"
                /**
                 * Because of the prop above, we have to add 
                 * styling for the "Home" route separately to 
                 * style it when it is active i.e., when the "/"
                 * route (i.e., "Home") is active, the .my-active
                 * class is the one attached to the respective 
                 * <NavLink /> Component for the "Home" link, and
                 * so, we style using the .my-active class inside
                 * the Blog.css file.
                 */

                /**
                 * We can also directly style the <NavLink />
                 * directly in here, using inline styling, using
                 * the activeStyle prop as shown below:
                 */
                activeStyle={{
                  color: '#FA923F',
                  textDecoration: 'underline'
                }}
              >Home</NavLink></li>
              {
              /**
               * Here, we don't need the `exact` prop as, there
               * is no other link that prefixes '/new-post' 
               * route.
               */
              }
              <li><NavLink to={{
                pathname: '/new-post',
                hash: '#submit',
                search: '?quick-submit=true',
              }}>New Post</NavLink></li>
            </ul>
          </nav>
        </header>
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" component={NewPost} />
      </div>
    );
  }
}

export default Blog;
