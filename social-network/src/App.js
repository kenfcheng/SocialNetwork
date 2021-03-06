import React, { useState, useEffect } from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";
import Post from "./components/post/post.jsx";
import { auth, db } from "./firebase";
import { Button, Input } from "@material-ui/core";
import ImageUpload from "../src/components/imageUpload/imageUpload";
import InstagramEmbed from "react-instagram-embed";

// Styles Modal
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
  const classes = useStyles();
  // Gets Modal style
  const [modalStyle] = useState(getModalStyle);
  const [posts, setPosts] = useState([]);

  // Open state for when Modal is open
  const [open, setOpen] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);

  // States for Sign Up
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    // backend listener for responses on the front end
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user has logged in
        console.log(authUser);
        setUser(authUser);

        if (authUser.displayName) {
        } else {
          // if we just created someone
          return authUser.updateProfile({ displayName: username });
        }
        // don't update username
      } else {
        setUser(null);
        // user has logged out
      }
    });
    return () => {
      // performs cleanup actions
      unsubscribe();
    };
  }, [user, username]);

  // useEffect runs a piece of code based on a specific condition.
  useEffect(() => {
    // code runs here!
    // orders placement of photos based on timestamp in descending order.
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() }))
        );
      });
    // every new posts made, snapshot will send it straight to db as soon as photo is taken.
    // real timne connection to firebase. will update live for updated or new posts.
  }, []);

  // Handles sign up event.
  const signUp = (event) => {
    // prevents unwanted refresh when signing up
    event.preventDefault();

    // creates user using email and password from state.
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({
          displayName: username,
        });
      })
      .catch((error) => alert(error.message));

    // Modal closes once user is signed up
    setOpen(false);
  };

  // Sign In function
  const signIn = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));

    // Modal Closes once user signs in
    setOpenSignIn(false);
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

      {/* Sign In Modal */}
      <Modal open={openSignIn} onClose={() => setOpenSignIn(false)}>
        <div style={modalStyle} className={classes.paper}>
          <form className="app_signUp">
            <center>
              {/* Instagram logo Placeholder until I get a real logo*/}
              <img
                className="app_headerImage"
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
                alt="logo"
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
              <Button type="submit" onClick={signIn}>
                Login
              </Button>
            </center>
          </form>
        </div>
      </Modal>

      <div className="app_header">
        {/* Instagram logo Placeholder until I get a real logo*/}
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
          alt="logo"
        />
        {user ? (
          // Logout Btn
          <Button onClick={() => auth.signOut()}>Logout</Button>
        ) : (
          <div className="app_loginContainer">
            <Button onClick={() => setOpenSignIn(true)}>Login</Button>
            <Button onClick={() => setOpen(true)}>Sign Up</Button>
          </div>
        )}
      </div>

      <h1>Social Media Testing</h1>

      <div className="app__posts">
        <div className="app__postsLeft">
          {/* goes through posts hooks and returns the individual bits of information */}
          {posts.map(({ id, post }) => (
            <Post
              key={id}
              postID={id}
              username={post.username}
              caption={post.caption}
              imageURL={post.imageURL}
            />
          ))}
        </div>

        <div className="app_postsRight">
          {/* InstagramEmbed to embed on the right */}
          <InstagramEmbed
            url="https://instagr.am/p/Zw9o4/"
            maxWidth={320}
            hideCaption={false}
            containerTagName="div"
            protocol=""
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
          />
        </div>
      </div>

      {/* alerts users that they must be signed in to upload post */}
      {/* ? is an optional that works around user.displayName being undefined */}
      {user?.displayName ? (
        <ImageUpload username={user.displayName} />
      ) : (
        <h3>Please Login to Upload</h3>
      )}
    </div>
  );
}

export default App;
