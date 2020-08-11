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
        /**
         * We will make every <Post /> Component a link, so that
         * whenever it is clicked, we can use our react-router
         * to route to a specific route as mentioned inside the 
         * `to` prop inside the <Link /> Component seen below.
         * 
         * We also add the `key` prop to the <Link /> component
         * now because it is the outermost component which is 
         * being generated as a list of components to be 
         * rendered onto the view, and so, every sequence of 
         * similar components needs to have a unique `key` prop 
         * according to rules in React.
         */
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

/**
 * Now whenever we click on any <Post /> generated at the "/" 
 * (Home) route, we can actually see that the related ID to that
 * <Post /> (i.e., `post.id`) is appended as a route in the 
 * address bar. 
 * 
 * Although, we just need to use that ID inside the route 
 * mentioned in the address bar and then display the <FullPost />
 * related to the <Post /> we clicked (which can be done by 
 * extracting the route parameters).
 */
