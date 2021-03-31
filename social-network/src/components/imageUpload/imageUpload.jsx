import React from 'react'

function imageUpload() {
    return (
        <div>
            <h1>Image Upload Render</h1>
             {/*We need: */}
      {/* Caption Input */}
      {/* File Picker*/}
      {/* 'Post' Button */}
      <input type='text'/>
      <input type='file' onChange={handlechange}/>
      <Button onClick={handleUpload}>Upload</Button>
        </div>
    )
}

export default imageUpload
