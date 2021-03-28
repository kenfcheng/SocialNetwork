import React, { useState } from "react";
import "./App.css";
import Post from "./components/post/post.jsx";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "TesterA",
      caption: "I WANT A PIZZA!",
      imageURL:
        "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_677,q_85,w_1280/v1/clients/raleigh/306f35b4_ca45_41cd_8786_c05dfd9ed4e8_4899f218-2953-46e3-a58c-a5f8f36ed04f.jpg",
    },
    {
      username: "TesterA",
      caption: "I WANT A PIZZA!",
      imageURL:
        "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_677,q_85,w_1280/v1/clients/raleigh/306f35b4_ca45_41cd_8786_c05dfd9ed4e8_4899f218-2953-46e3-a58c-a5f8f36ed04f.jpg",
    },
  ]);

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

      {/* goes through posts hooks and returns the individual bits of information */}
      {posts.map((post) => (
        <Post
          username={post.username}
          caption={post.caption}
          imageURL={post.imageURL}
        />
      ))}
      <Post
        username="TestingUser"
        caption="Can You see this pizza?"
        imageURL="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_677,q_85,w_1280/v1/clients/raleigh/306f35b4_ca45_41cd_8786_c05dfd9ed4e8_4899f218-2953-46e3-a58c-a5f8f36ed04f.jpg"
      />
      <Post
        username="Tester2"
        caption="It's nice but I got this sandwhich"
        imageURL="https://lh3.googleusercontent.com/proxy/uEAE9s0KUggjIYp2yme6XRasYGNW1S1NBOGJCs653r2bBxqjx8Q4gO20lRyHtwJILEQPxnQYUmWS3NGqR0LHrQ7zCyIjsSlbUqmsGiyzmP346H5ctVqCZIWw_w"
      />
      <Post
        username="Tester3"
        caption="Me too!"
        imageURL="https://lh3.googleusercontent.com/proxy/uEAE9s0KUggjIYp2yme6XRasYGNW1S1NBOGJCs653r2bBxqjx8Q4gO20lRyHtwJILEQPxnQYUmWS3NGqR0LHrQ7zCyIjsSlbUqmsGiyzmP346H5ctVqCZIWw_w"
      />
    </div>
  );
}

export default App;
