// LIBRARY IMPORTS
import React, { Component } from 'react';
import axios from '../../../axios'; // this is our own axiosInstance that we created earlier inside axios.js
// import { Link } from 'react-router-dom';

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

  /**
   * Instead of using the <Link /> Component, we can make use
   * of the react-router's props we receive because this 
   * component is rendered using the <Route /> component, and
   * so, we will get the `match`, `history` and the `location`
   * props.
   * 
   * We can use the `history` prop to goBack(), goForward(),
   * replace() or push() a Component onto the view, to be shown
   * when the <Post /> component is clicked.
   * 
   * We will handle that below, in the postSelectedHandler(id)
   * method as shown below:
   */
  postSelectedHandler = (id) => {
    // this.props.history.push("/" + id);
    this.props.history.push({ pathname: `/${id}` }); // same as above
  };

  render() {
    let posts = <p style={{ textAlign: "center" }}>Something Went Wrong!</p>;

    if (!this.state.error) {
      posts = this.state.posts.map((post) => (
        // <Link to={`/${post.id}`} key={post.id}>
        <Post
          key={post.id}
          title={post.title}
          author={post.author}
          clicked={() => this.postSelectedHandler(post.id)}
        />
        // </Link>
      ));
    }

    return <section className="Posts">{posts}</section>;
  }
};

export default Posts;
