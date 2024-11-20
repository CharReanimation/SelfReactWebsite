import React from "react";
import { useNavigate } from "react-router-dom";


// CSS
import "../css/Home.css";

function Home({ songs, onPlaySong }) {
    const navigate = useNavigate(); // Nav

    const handlePlaySong = (index) => 
    {
      onPlaySong(index);
      navigate(`/player/${index}`);
    };
    
    return (
        <div className="home">
          <div className="songs-container">
            {songs.map((song, index) => (
              <div key={index} className="song-card">
                <img
                  src={song.cover}
                  alt={`${song.title} cover`}
                  className="song-cover"
                />
                <h2 className="song-title">{song.title}</h2>
                <p className="song-artist">{song.artist}</p>
    
                {/* Buttons*/}
                <div className="song-buttons">
                  <button
                    onClick={() => handlePlaySong(index)}
                    className="home-player-button"
                  >
                    Play
                  </button>
                  <button
                    onClick={() => window.open(song.youtube, "_blank")}
                    className="home-youtube-button"
                  >
                    YouTube
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}

export default Home;
