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
        <Post
          key={post.id}
          title={post.title}
          author={post.author}
          clicked={() => this.postSelectedHandler(post.id)}
        />
      ));
    }

    return <section className="Posts">{posts}</section>;
  }
};

export default Posts;

/**
 * console.log() when clicking the "Home" link
 * -------------------------------------------
 * (When it mounts the <Posts /> Component)
 * 
 * Posts.js:15 [Posts.js]... {history: {…}, location: {…}, match: {…}, staticContext: undefined}
 * history:
 *    action: "POP"
 *    block: ƒ block(prompt)
 *    createHref: ƒ createHref(location)
 *    go: ƒ go(n)
 *    goBack: ƒ goBack()
 *    goForward: ƒ goForward()
 *    length: 5
 *    listen: ƒ listen(listener)
 *    location:
 *        pathname: "/" 
 *        search: "" 
 *        hash: "" 
 *        state: undefined 
 *        key: "0l5dmy"
 *    push: ƒ push(path, state)
 *    replace: ƒ replace(path, state)
 *    __proto__: Object
 * location:
 *    hash: ""
 *    key: "0l5dmy"
 *    pathname: "/"
 *    search: ""
 *    state: undefined
 *    __proto__: Object
 * match:
 *    isExact: true
 *    params:
 *        __proto__: Object
 *    path: "/"
 *    url: "/"
 *    __proto__: Object
 * staticContext: undefined
 * __proto__: Object
 */
