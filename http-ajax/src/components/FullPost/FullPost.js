import React, { Component } from "react";
import axios from "axios";
import "./FullPost.css";

/**
 * For jsonplaceholder's API call to delete a certain data
 * item, we simply use `axios.delete(url)` to delete the 
 * resource mentioned in the URL.
 * 
 * jsonplaceholder actually doesn't delete anything, because 
 * that website is a dummy website, and so, it simply returns
 * a response with empty response.data field, which means that
 * the delete() call was successful.
 */

class FullPost extends Component {
  state = {
    loadedPost: null,
  }

  componentDidUpdate() {
    if (this.props.id
    && (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id))
    ) {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`)
        .then(response => {
          console.log(response);
          this.setState({ loadedPost: response.data });
        });
    }
  }

  deletePostHandler = () => {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`)
      .then(response => { console.log(response); })
      .catch(err => { console.log(err); });
  }

  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    
    if (this.props.id) {
      post = <p style={{ textAlign: "center" }}>Loading...</p>;
    }
    
    if (this.state.loadedPost) {
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.content}</p>
          <div className="Edit">
            <button onClick={this.deletePostHandler} className="Delete">Delete</button>
          </div>
        </div>
      );
    }

    return post;
  }
}

export default FullPost;
