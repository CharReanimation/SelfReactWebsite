import React, { useRef, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Player from "./Player";

// CSS
import "../css/Player.css";

function PlayerPage({ songs }) {
  const navigate = useNavigate(); // Nav
  const { index } = useParams();
  const song = songs[index];
  const [currentSongIndex, setCurrentSongIndex] = useState(parseInt(index, 10));

  // Next Song
  const handleNext = () => {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(nextIndex);
    navigate(`/player/${nextIndex}`);
  };

  return (
    <div className="player-page">
      {song ? (
        <Player song={song} onNext={handleNext} />
      ) : (
        <h2>Song not found</h2>
      )}
    </div>
  );
}

export default PlayerPage;
