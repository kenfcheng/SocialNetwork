import React from "react";
import "./post.css";
import Avatar from "@material-ui/core/Avatar";

function post() {
  return (
    <div className="post">
      <div className="post_header">
        {" "}
        <Avatar
          className="post_avatar"
          alt="KenUser"
          src="/static/images/avatar/1.jpg"
        />
        <h3>Username</h3>
        {/* header  -> avatar & username */}
      </div>

      <img
        className="post_image"
        src="https://bigseventravel.com/wp-content/uploads/2019/10/Screenshot-2019-10-11-at-13.33.07.png"
      />
      {/* image */}
      <h4 className="post_text">
        <strong>Username:</strong> User comment about photo
      </h4>
      {/* username & caption */}
    </div>
  );
}

export default post;
