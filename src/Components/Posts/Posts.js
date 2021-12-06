import React from "react";
import "./Posts.css";
import avatarimg from "../../images/mypic.jpeg";

const Posts = ({ username, caption, imageUrl }) => {
  return (
    <div className="posts">
      <div className="post_header">
        <div className="post_avatar">
          <img className="avatar_img" src={avatarimg} alt="avatar" />
        </div>
        <h3 style={{ fontSize: 15 }}>{username}</h3>
      </div>
      <img className="post_img" alt="postimg" src={imageUrl} />
      <p className="post_text">
        <strong style={{ marginRight: 5 }}>{username}</strong>
        {caption}
      </p>
    </div>
  );
};

export default Posts;
