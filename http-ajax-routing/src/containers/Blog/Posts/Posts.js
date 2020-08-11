// LIBRARY IMPORTS
import React, { Component } from 'react';
import axios from '../../../axios'; // this is our own axiosInstance that we created earlier inside axios.js

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
      posts = this.state.posts.map((post) => (
        /**
         * Since we have used the <Post /> Component here, we
         * would expect that we'll be able to use the routing
         * information from <Posts /> Component, to the <Post />
         * Component. But that's not the case here.
         *
         * To use the routing information, we have to either
         * send in the props inside this <Posts /> Component as
         * a prop to each of the <Post /> Component, i.e., as
         * shown below using `{...this.props}`,
         * 
         * OR, we can use a HOC called withRouter, which can
         * be imported from 'react-router-dom' in the 
         * <Post /> Component, and before export the <Post /> 
         * Component, we will wrap the default export in the
         * withRouter() HOC, so that now, every <Post /> 
         * Component will implicitly get the Routing Information
         * without us sending the Routing Props as shown earlier.
         */
        <Post
          key={post.id}
          title={post.title}
          author={post.author}
          clicked={() => this.postSelectedHandler(post.id)}
          // {...this.props}
        />
      ));
    }

    return <section className="Posts">{posts}</section>;
  }
};

export default Posts;
