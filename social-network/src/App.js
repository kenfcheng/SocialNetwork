import React, { useState, useEffect } from "react";
import "./App.css";
import Post from "./components/post/post.jsx";
import { db } from "./firebase";

function App() {
  const [posts, setPosts] = useState([]);

  // useEffect runs a piece of code based on a specific condition.
  useEffect(() => {
    // code runs here!
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
    // every new posts made, snapshot will send it straight to db as soon as photo is taken.
    // real timne connection to firebase. will update live for updated or new posts.
  }, []);

  return (
    <div className="app">
      <div className="app_header">
        {/* Instagram logo Placeholder until I get a real logo*/}
        <img
          className="app_headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
          alt="logo"
        />
      </div>
      <h1>Social Media Testing</h1>

      {/* goes through posts hooks and returns the individual bits of information */}
      {posts.map((post) => (
        <Post
          username={post.username}
          caption={post.caption}
          imageURL={post.imageURL}
        />
      ))}
    </div>
  );
}

export default App;
