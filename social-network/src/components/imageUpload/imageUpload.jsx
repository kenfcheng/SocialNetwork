import React, {useState} from 'react';
import { Button } from "@material-ui/core";
import {storage, db} from '../../firebase';
import { Children } from 'react';
import firebase from 'firebase';
import './imageUpload.css'

function ImageUpload({username}) {
const [caption, setCaption] = useState('');
const [url, setUrl] =useState('');
const [image, setImage] =useState(null);


// progress bar
const [progress, setProgress] = useState(0);


// File picker
const handleChange = (e) => {
    if (e.target.files[0]) {
        setImage(e.target.files[0])
    }
};

const handleUpload = () => {
const uploadTask = storage.ref(`images/${image.name}`).put(image);

// Progress Bar
uploadTask.on(
    "state_changed", (snapshot) => {
    // progress function sets from 0 - 100 throwing a visual representation.
    const progress = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        )
        setProgress(progress);
},
(error) => {
    // Error function throws an error alert if upload is not working.
    console.log(error);
    alert(error.message);
},
() => {
    // upload complete function indicates when download is complete.
storage.ref('images')
.child(image.name)
// returns download link
.getDownloadURL()
.then(url => {
    // post image inside database
    db.collection("posts").add({
       timestamp: firebase.firestore.FieldValue.serverTimestamp(),
       caption: caption,
       imageURL: url,
       username: username
    });
    
    // Resets progress settings back to 0 and default settings.
    setProgress(0);
    setCaption("");
    setImage(null);
})
}
)
}
    
return (
    <div className="imageUpload">
             <h1>Image Upload Render</h1>
             {/*We need: */}
      {/* Caption Input */}
      {/* File Picker*/}
      {/* 'Post' Button */}
      {/* puts Max progress to 100 */}
      <progress className="imageUpload__progress" value={progress} max="100"/>
      <input type='text' placeholder='enter caption...' onChange={event => setCaption(event.target.value)} value={caption}/>
      <input type='file' onChange={handleChange}/>

      {/* Upload Button */}
      <Button onClick={handleUpload}>Upload</Button>
    </div>
    )
}

export default ImageUpload
