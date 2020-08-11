// LIBRARY IMPORTS
import React, { Component } from "react";
import { Route, NavLink } from 'react-router-dom';

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
              <li><NavLink to="/" exact
                activeClassName="my-active"
                activeStyle={{
                  color: '#FA923F',
                  textDecoration: 'underline'
                }}
              >Home</NavLink></li>
              <li><NavLink to={{
                pathname: '/new-post',
                hash: '#submit',
                search: '?quick-submit=true',
              }}>New Post</NavLink></li>
            </ul>
          </nav>
        </header>
        {
        /**
         * For every <Post /> Component we click on, we should
         * be able to render the entire <FullPost /> Component
         * related to the clicked <Post />.
         * 
         * Which is why, we set a specific Route for the 
         * <FullPost /> to be loaded whenever the path matches
         * some kind of an `id`, which in this case is `post.id`.
         * handled inside the <Posts /> Component.
         * 
         * Therefore, we add the route for "/:id", which is 
         * telling to the react-router that this route is a 
         * dynamic route. Anything that's prefixed with "/" and
         * has some string after it, will render the component 
         * mentioned respectively.
         * 
         * But that would also make the "/new-post" route render
         * the component we mention inside the route for "/:id"
         * because now, "/new-post" is also a route which 
         * matches the rule of the route mentioned as "/:id". 
         * 
         * To avoid this confusion, we can render the <Route /> 
         * for the "/new-post" path before the <Route /> for the
         * "/:id" path, as shown below.
         */
        }
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" component={NewPost} />
        <Route path="/:id" exact component={FullPost} />
        
        {// The following ordering of Routes won't work properly
          // <Route path="/" exact component={Posts} />
          // <Route path="/:id" exact component={FullPost} />
          // <Route path="/new-post" component={NewPost} />
        }
      </div>
    );
  }
}

export default Blog;
