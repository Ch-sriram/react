// LIBRARY IMPORTS
import React, { Component } from 'react';
import axios from '../../../axios'; // this is our own axiosInstance that we created earlier inside axios.js
import { Link } from 'react-router-dom';

// STYLE IMPORTS
import './Posts.css';

// CUSTOM COMPONENTS
import Post from '../../../components/Post/Post';

class Posts extends Component {
  state = { posts: [] };

  componentDidMount() {
    console.log("[Posts.js]...", this.props);
    axios.get("/posts")
      .then((response) => {
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
      .catch((err) => {
        console.log(err);
        // this.setState({ error: true });
      });
  }

  postSelectedHandler = (id) => {
    this.setState({ selectedPostID: id });
  };

  render() {
    let posts = <p style={{ textAlign: "center" }}>Something Went Wrong!</p>;

    if (!this.state.error) {
      posts = this.state.posts.map(post => (
        <Link to={`/${post.id}`} key={post.id}>
          <Post
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)}
          />
        </Link>
      ));
    }

    return <section className="Posts">{posts}</section>;
  }
};

export default Posts;
