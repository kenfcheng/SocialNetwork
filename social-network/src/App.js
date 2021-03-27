import React from "react";
import "./App.css";
import Post from "./components/post/post.jsx";

function App() {
  return (
    <div className="app">
      <div className="app_header">
        {/* Placeholder until I get a real logo*/}
        <img
          className="app_headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
          alt="logo"
        />
      </div>
      <h1>Social Media Testing</h1>
      <Post />
      {/* Post */}
      {/* Post */}
    </div>
  );
}

export default App;
