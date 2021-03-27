import React from "react";
import "./post.css";

function post() {
  return (
    <div className="post">
      <h3>Username</h3>
      {/* header  -> avatar & username */}
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
