import React, { Component } from "react";


import Post from "../../components/Post/Post";
import FullPost from "./FullPost/FullPost";
import NewPost from "./NewPost/NewPost";
import "./Blog.css";
import Posts from '../../containers/Blog/Posts/Posts';

/**
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
        <Posts />
      </div>
    );
  }
}

export default Blog;
