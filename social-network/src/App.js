import React, { useState, useEffect } from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

import "./App.css";
import Post from "./components/post/post.jsx";
import { auth, db } from "./firebase";
import { Button, Input } from "@material-ui/core";

// Styling for Modal

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
  // Gets Modal style
  const [modalStyle] = useState(getModalStyle);
  const classes = useStyles();

  const [posts, setPosts] = useState([]);

  // Open state for when Modal is open
  const [open, setOpen] = useState(false);

  // States for Sign Up
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  // useEffect runs a piece of code based on a specific condition.
  useEffect(() => {
    // code runs here!
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() })));
    });
    // every new posts made, snapshot will send it straight to db as soon as photo is taken.
    // real timne connection to firebase. will update live for updated or new posts.
  }, []);

  // Handles sign up event.
  const signUp = (event) => {
    // prevents unwanted refresh when signing up
    event.preventDefault();

    // sets up/handles user authentication
    auth
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));
  };

  return (
    <div className="app">
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
          <form className="app_signUp">
            <center>
              {/* Instagram logo Placeholder until I get a real logo*/}
              <img
                className="app_headerImage"
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
                alt="logo"
              />
            </center>
            <Input
              placeholder="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <Input
              placeholder="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" onClick={signUp}>
              Sign Up
            </Button>
          </form>
        </div>
      </Modal>

      <div className="app_header">
        {/* Instagram logo Placeholder until I get a real logo*/}
        <img
          className="app_headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
          alt="logo"
        />
      </div>

      {/* Sign Up Button */}
      <Button onClick={() => setOpen(true)}>Sign Up</Button>

      <h1>Social Media Testing</h1>

      {/* goes through posts hooks and returns the individual bits of information */}
      {posts.map(({ id, post }) => (
        <Post
          key={id}
          username={post.username}
          caption={post.caption}
          imageURL={post.imageURL}
        />
      ))}
    </div>
  );
}

export default App;
