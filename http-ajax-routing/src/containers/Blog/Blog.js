// LIBRARY IMPORTS
import React, { Component } from "react";
import { Route, Link } from 'react-router-dom';

// STYLING
import "./Blog.css";

// CUSTOM COMPONENTS
import Posts from '../../containers/Blog/Posts/Posts';
import NewPost from './NewPost/NewPost';

/** REMAINING OLD STATE
 * 
    selectedPostID: null,
    error: false,
 */

/** The following comes inside div with className="Blog" after
 * <Posts /> component.
 * <section>
    <FullPost id={this.state.selectedPostID} />
   </section>
   <section>
    <NewPost />
   </section>
 */

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
              <li><Link to="/">Home</Link></li>
              <li><Link to={{
                pathname: '/new-post',
                hash: '#submit',
                search: '?quick-submit=true',
              }}>New Post</Link></li>
            </ul>
          </nav>
        </header>
        {
        /**
         * Here, <Posts /> and <NewPost /> Components will 
         * receive props which are sent in by the <Route />
         * Component, which contains useful information about 
         * the Route like the `match`, `history`, `location`, 
         * etc. This information is automatically passed in by 
         * react-router.
         * 
         * The `history` object has certain methods we can use to
         * push(), goBack(), goForward(), replace() the 
         * respective page and so on...
         * 
         * The `match` field contains the information about 
         * whether the route isExact or not, `path` & `url` info.
         * There's one more field which is `params`, which is an
         * object we'll discuss about later.
         * 
         * The `location` field contains the fields like `hash`,
         * `key`, `pathname` (which is the route wi give) and the
         * `search` field, which is the URL Search Query we give.
         */
        }
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" component={NewPost} />
      </div>
    );
  }
}

export default Blog;
