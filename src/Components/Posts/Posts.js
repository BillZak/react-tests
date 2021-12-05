import React from "react";
import "./Posts.css";
import postimg from "../../images/post.jpg";

const Posts = () => {
  return (
    <div className="posts">
      <div className="post_header">
        <h3>Username</h3>
      </div>
      <img className="post_img" src={postimg} />
      <p>
        <strong>username</strong>Wow learning to clone ig with react
      </p>
    </div>
  );
};

export default Posts;
