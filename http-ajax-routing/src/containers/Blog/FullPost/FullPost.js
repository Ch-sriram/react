import React, { Component } from "react";
import axios from "axios";
import "./FullPost.css";

class FullPost extends Component {
  state = {
    loadedPost: null,
  }

  // Now we are not Updating this component, we are rendering
  // this component to the DOM whenever we need it and 
  // un-mounting it whenever we don't need it, and so, we need 
  // to use componentDidMount() lifecycle method, instead of 
  // componentDidUpdate() method.
  componentDidMount() {
    console.log(this.props); // will have the route params.
    
    /**
     * `this.props.match.params.id` exists because in Blog.js,
     * we set the <Route /> for <FullPost /> as "/:id", and so, 
     * we can find `id` field inside the 
     * `this.props.match.params` field.
     * 
     * If we mentioned the route to be "/:num", then we would've
     * had to access it as follows: `this.props.match.params.num`
     */
    
    if (this.props.match.params.id
    && (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id))
    ) {
      axios.get(`/posts/${this.props.match.params.id}`)
        .then(response => {
          console.log(response);
          this.setState({ loadedPost: response.data });
        });
    }
  }

  deletePostHandler = () => {
    axios.delete(`/posts/${this.props.id}`)
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
          <p>{this.state.loadedPost.body}</p>
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
