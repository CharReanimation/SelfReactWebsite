import React, { useState } from "react";
import Player from "./Player";

// CSS
import "../css/MusicUploader.css";

function MusicUploader() {
  const [uploadedSong, setUploadedSong] = useState(null);

  // Handle File Upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("audio/")) {
      const songUrl = URL.createObjectURL(file);
      setUploadedSong({
        title: file.name,
        artist: "Uploaded Song",
        src: songUrl,
        cover: "../img/bg.png", // Generate By Stable Diffusion 3; Promopt: "(Gleam), light, (Cyberpunk: 1.3), (high-resolution)"
      });
    } else {
      alert("Please Upload Valid Audio File");
    }
  };

  return (
    <div className="uploader">
      <h2>UPLOAD MUSIC</h2>
      
      {/* Uploaded Song and Use Player*/}
      {uploadedSong && <Player song={uploadedSong} />}

      <label className="file-upload"> {/* File Upload: https://www.w3schools.com/howto/howto_html_file_upload_button.asp */}
        <input type="file" accept="audio/*" onChange={handleFileUpload} />
        Choose File
      </label>
    </div>
  );
}

export default MusicUploader;
