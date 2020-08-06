import React, { Component } from "react";
import axios from "axios";
import "./FullPost.css";

/**
 * Now, if we send an HTTP Request once we get a valid ID of
 * the post we select, what kind of lifecycle hook shall we
 * use here?
 *
 * Since we are talking about updating components, this means,
 * we will use the componentDidUpdate() lifecycle method
 * because that's the lifecycle method which will be called
 * when a component gets updated. We do have to be careful
 * about not going into an infinite loop because of setState().
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
            <button className="Delete">Delete</button>
          </div>
        </div>
      );
    }

    return post;
  }
}

export default FullPost;
