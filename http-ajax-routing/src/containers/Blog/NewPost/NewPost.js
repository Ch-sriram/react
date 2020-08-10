import React, { Component } from "react";
import axios from 'axios';
import "./NewPost.css";

/**
 * Till now, we saw ho to GET data using axios.get() method,
 * now, we will see how to POST data to a dummy backend using
 * axios.post(url, data, dataConfig) method. 
 * NOTE that the data is automatically stringified from JSON 
 * to string and so on...
 */

class NewPost extends Component {
  state = {
    title: "",
    content: "",
    author: "Max",
  };

  postDataHandler = () => {
    const data = {
      title: this.state.title,
      body: this.state.content,
      author: this.state.author
    }

    // The Dummy Backend will just 
    axios.post("/posts", data)
      .then(response => { console.log(response); })
      .catch(err => { console.log(err); });
  }

  render() {
    return (
      <div className="NewPost">
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

export default NewPost;
