import React, { Component } from "react";
import axios from "axios";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

/**
 * If we deliberately use an incorrect URL, we would get a 
 * 404 GET Request Error, an we can then simply catch that 
 * error using the .catch() method and do something based on
 * the error, like changing the state.
 */

class Blog extends Component {
  state = {
    posts: [],
    selectedPostID: null,
    error: false,
  };

  componentDidMount() {
    /**
     * Here, we are deliberately making a bad request with the
     * wrong URL, to trigger the code inside the .catch() 
     * method.
     */
    axios.get("https://jsonplaceholder.typicode.com/postsss")
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map((post) => {
          return {
            ...post,
            author: "Sriram",
          };
        });
        this.setState({ posts: updatedPosts });
        // console.log(response);
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: true });
      });
  }

  postSelectedHandler = (id) => {
    this.setState({ selectedPostID: id });
  };

  render() {
    let posts = <p style={{ textAlign: 'center' }}>Something Went Wrong!</p>
    
    if (!this.state.error) {
      posts = this.state.posts.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          author={post.author}
          clicked={() => this.postSelectedHandler(post.id)}
        />
      ));
    }

    return (
      <div>
        <section className="Posts">{posts}</section>
        <section>
          <FullPost id={this.state.selectedPostID} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;

/**
 * Output (after making a bad request using wrong URL)
 * ---------------------------------------------------
 * 
 * Error: Request failed with status code 404
 *  at createError (createError.js:16)
 *  at settle (settle.js:17)
 *  at XMLHttpRequest.handleLoad (xhr.js:61)
 * 
 */
