import React, { useState, useEffect } from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

import "./App.css";
import Post from "./components/post/post.jsx";
import { db } from "./firebase";

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

  // useEffect runs a piece of code based on a specific condition.
  useEffect(() => {
    // code runs here!
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() })));
    });
    // every new posts made, snapshot will send it straight to db as soon as photo is taken.
    // real timne connection to firebase. will update live for updated or new posts.
  }, []);

  return (
    <div className="app">
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
          <h2>This is a Modal</h2>
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
