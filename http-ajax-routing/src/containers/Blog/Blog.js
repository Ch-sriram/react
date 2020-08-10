import React, { Component } from "react";
// import axios from "axios";
import axios from '../../axios'; // this is our own axiosInstance that we created earlier inside axios.js

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

class Blog extends Component {
  state = {
    posts: [],
    selectedPostID: null,
    error: false,
  };

  componentDidMount() {
    axios.get("/posts")
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

    /**
     * Even if click on the links inside the actual app, we 
     * will always be re-directed to the home route which is 
     * "/" route, and it happens because of the way our
     * dev-server/production is setup, because for every 
     * request, our server doesn't have different files, it 
     * only has a single file, which is index.html, and for 
     * every request, it sends back one single file, which is
     * the index.html file, not different files, and so, 
     * routing is all about parsing the URL at the client-side.
     * 
     * Here, URL means, the route we mentioned in the links 
     * below. Example: "/" or "/new-post".
     */

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
