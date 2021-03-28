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
          alt="KenUser"
          src="/static/images/avatar/1.jpg"
        />
        <h3>{username}</h3>
      
      </div>
 {/* image */}
      <img
        className="post_image"
        src="https://bigseventravel.com/wp-content/uploads/2019/10/Screenshot-2019-10-11-at-13.33.07.png"
      />
     {/* username & caption */}
      <h4 className="post_text">
        <strong>{username}</strong> {caption}
      </h4>
      
    </div>
  );
}

export default post;
