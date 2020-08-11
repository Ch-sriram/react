// LIBRARY IMPORTS
import React from "react";
import { withRouter } from 'react-router-dom';

// STYLING IMPORTS
import "./Post.css";

const post = (props) => {
  console.log("[Post.js]...", props);
  return (
    <article className="Post" onClick={props.clicked}>
      <h1>{props.title}</h1>
      <div className="Info">
        <div className="Author">{props.author}</div>
      </div>
    </article>
  )
};

// This <Post /> Component is now Route Aware, i.e., it contains
// information about the nearest loaded route.
export default withRouter(post);
