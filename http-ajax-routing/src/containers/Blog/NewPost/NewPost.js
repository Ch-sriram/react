// LIBRARY IMPORTS
import React, { Component } from "react";
import axios from 'axios';
import { Redirect } from 'react-router-dom';

// STYLING IMPORTS
import "./NewPost.css";

class NewPost extends Component {
  state = {
    title: "",
    content: "",
    author: "Max",
    submitted: false
  };

  componentDidMount() {
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
        this.setState({ submitted: true });
      })
      .catch(err => console.log(err));
  }

  render() {
    /**
     * Note that we can only define the `to` prop for the 
     * <Redirect /> component.
     */
    const redirect = this.state.submitted ? <Redirect to="/posts" /> : null;
    return (
      <div className="NewPost">
        {/*<Redirect to="/posts"/>*/}
        {
        /**
         * In line #44, we are redirecting without any 
         * conditional checking. If we redirect as seen in line
         * #44, we would never be able to post a post to the 
         * respective API Endpoint. Whenever we click on the
         * "New Post" link, we will be automatically redirected
         * to the "/posts" route, which is not what we want.
         * 
         * We want to be able to post a New Post when we go
         * to the "/new-post" route using the "New Post" link,
         * and then we should redirect to the "/posts" route.
         * 
         * For that, we can maintain `submitted` state and set
         * it to true when we have posted a new post to the 
         * API Endpoint.
         * 
         * Depending on the state - `submitted`'s value, 
         * we'll either render the <Redirect /> component
         * or render null, as shown below.
         */
        }
        {redirect}
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
