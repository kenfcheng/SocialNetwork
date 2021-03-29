import React from "react";
import "./post.css";
import Avatar from "@material-ui/core/Avatar";

function post({username, caption, imageURL}) {
  return (
    <div className="post">
        {/* header  -> avatar & username */}
      <div className="post_header">
        {" "}
        <Avatar
          className="post_avatar"
          alt="User"
          src="/static/images/avatar/1.jpg"
        />
        <h3>{username}</h3>
      
      </div>
 {/* image */}
      <img
        className="post_image"
        src={imageURL}
      />
     {/* username & caption */}
      <h4 className="post_text">
        <strong>{username}</strong> {caption}
      </h4>
      
    </div>
  );
}

export default post;
