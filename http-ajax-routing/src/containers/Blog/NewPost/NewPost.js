// LIBRARY IMPORTS
import React, { Component } from "react";
import axios from 'axios';
import { withRouter } from 'react-router-dom';

// STYLING IMPORTS
import "./NewPost.css";

class NewPost extends Component {
  state = {
    title: "",
    content: "",
    author: "Max",
    // submitted: false
  };

  componentDidMount() {
    // if !auth => this.props.history.replace('/posts');
    console.log("[NewPost.js]...", this.props);
  }

  postDataHandler = () => {
    const data = {
      title: this.state.title,
      body: this.state.content,
      author: this.state.author
    }

    axios.post("/posts", data)
      .then(response => {
        console.log(response);
        // this.setState({ submitted: true });

        /* 2 WAYS to re-route */
        // this.props.history.push("/posts"); // go back, and we'll be able to see the "/new-post" route
        this.props.history.replace("/posts");  // go back, and we'll simply see the "/posts" route only
      })
      .catch(err => console.log(err));
  }

  render() {
    // const redirect = this.state.submitted ? <Redirect to="/posts" /> : null;
    return (
      <div className="NewPost">
        {/*redirect*/}
        <h1>Add a Post</h1>
        <label>Title</label>
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.setState({ title: event.target.value })}
        />
        <label>Content</label>
        <textarea
          rows="4"
          value={this.state.content}
          onChange={(event) => this.setState({ content: event.target.value })}
        />
        <label>Author</label>
        <select
          value={this.state.author}
          onChange={(event) => this.setState({ author: event.target.value })}
        >
          <option value="Max">Max</option>
          <option value="Manu">Manu</option>
          <option value="Sriram">Sriram</option>
        </select>
        <button onClick={this.postDataHandler}>Add Post</button>
      </div>
    );
  }
}

export default withRouter(NewPost);
