import React, { Component } from "react";
import axios from 'axios';
import "./NewPost.css";

class NewPost extends Component {
  state = {
    title: "",
    content: "",
    author: "Max",
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

/**
 * console.log() when clicking the "New Post" link
 * -----------------------------------------------
 * (When it mounts the <NewPost /> Component)
 * 
 * NewPost.js:13 [NewPost.js]... {history: {…}, location: {…}, match: {…}, staticContext: undefined}
 * history: 
 *    action: "PUSH"
 *    block: ƒ block(prompt)
 *    createHref: ƒ createHref(location)
 *    go: ƒ go(n)
 *    goBack: ƒ goBack()
 *    goForward: ƒ goForward()
 *    length: 6
 *    listen: ƒ listen(listener)
 *    location:
 *        pathname: "/new-post" 
 *        hash: "#submit"
 *        search: "?quick-submit=true" 
 *        key: "39aq9i"
 *    push: ƒ push(path, state)
 *    replace: ƒ replace(path, state)
 *    __proto__: Object
 * location: 
 *    hash: "#submit"
 *    key: "39aq9i"
 *    pathname: "/new-post"search: "?quick-submit=true"
 *    __proto__: Object
 * match: 
 *    isExact: true
 *    params: 
 *        __proto__: Object
 *    path: "/new-post"
 *    url: "/new-post"
 *    __proto__: Object
 * staticContext: undefined
 * __proto__: Object
 */

/**
 * For NewPost, we can see that isExact is true, even when we 
 * haven't set the <Route /> Component using the `exact` prop, 
 * and this happens because right now, the route is "/new-post"
 * and so, because of that, our route is exactly matching, and 
 * so, the `isExact` field inside the `match` field is true.
 * 
 * If we route to "/new-post/2...", we'd still get the <NewPost/>
 * Component being rendered onto the view, but, we would see that
 * `isExact` field inside `match` field would be false.
 */
