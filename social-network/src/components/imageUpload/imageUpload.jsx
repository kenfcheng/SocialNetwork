import React, {useState} from 'react';
import { Button } from "@material-ui/core";
import {storage, db} from '../../firebase';

function ImageUpload() {
const [caption, setCaption] = useState('');
const [url, setUrl] =useState('');
const [image, setImage] =useState(null);
// progress bar
const [progress, setProgress] = useState('');

// File picker
const handleChange = (e) => {
    if (e.target.files[0]) {
        setImage(e.target.files[0])
    }
};

const handleUpload = () => {
const uploadTask = storage.ref(`images/${image.name}`).put{image};
}
    return (
    <div>
            <h1>Image Upload Render</h1>
             {/*We need: */}
      {/* Caption Input */}
      {/* File Picker*/}
      {/* 'Post' Button */}

      <input type='text' placeholder='enter caption...' onChange={event => setCaption(event.target.value)} value={caption}/>
      <input type='file' onChange={handleChange}/>

      {/* Upload Button */}
      <Button onClick={handleUpload}>Upload</Button>
    </div>
    )
}

export default ImageUpload
