import React, {useState, useEffect} from 'react';
import "./post.css";
import Avatar from "@material-ui/core/Avatar";
import {db} from '../../firebase';

function Post({postId, username, caption, imageURL}) {
   const [comments, setComments] = useState([]);

   useEffect(() => {
     let unsubscribe;
     if (postId) {
       unsubscribe = db
       .collection("posts")
       .doc(postId)
       .collection("comments")
       .onSnaphshot((snapshot) => {
         setComments(snapshot.docs.map((doc) => doc.data()));
       });
    }

    return () => {
      unsubscribe();
    };
   }, [postId]);

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
 {/* image */}n
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

export default Post;
