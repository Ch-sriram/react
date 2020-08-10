// LIBRARY IMPORTS
import React, { Component } from "react";
import { Route } from 'react-router-dom';

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
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/new-post">New Post</a></li>
            </ul>
          </nav>
        </header>
        {
          /**
           * Only issue we've right now is that, every time we
           * click on the links we defined above, which are 
           * "Home" & "New Post", what we are doing is, we are 
           * re-loading our entire application each time we 
           * click the links. 
           * 
           * This might not seem like a problem here, but 
           * theoretically, a reload means, we are reloading 
           * the entire JS related to the website, again, which
           * is just a massive waste of time, and because of 
           * this, our previous application state is also lost,
           * which we don't want.
           * 
           * As long as the user is navigating around inside 
           * the same HTML page, we never want to reload the 
           * entire page again, we just want to re-render the 
           * page in the parts where we need to render the 
           * components, so that it just looks like a totally
           * new page, without even rendering anything onto the
           * page.
           * 
           * Therefore, next time, we will see how to stay 
           * inside the same page and not reload the entire
           * page again when trying to route to a new component
           */
        }
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" component={NewPost} />
      </div>
    );
  }
}

export default Blog;
