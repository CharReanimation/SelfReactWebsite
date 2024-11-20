import React, { useRef, useState, useEffect } from "react";

// CSS
import "../css/Player.css";

function Player({ song, onNext }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isSeeking, setIsSeeking] = useState(false);
  const [wasPlayingBeforeSeek, setWasPlayingBeforeSeek] = useState(false);

  // Setting Up Play And Pause
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, song]);

  // Pause
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // End
  const handleAudioEnd = () => {
    setIsPlaying(false);
  };

  // Change Volume
  const changeVolume = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  // Update Player Progress
  const updateProgress = () => {
    if (!isSeeking) {
      setProgress(
        (audioRef.current.currentTime / audioRef.current.duration) * 100
      );
    }
  };

  // Set Progress Time
  function setProgressTime(newProgress) {
    const newTime = (newProgress / 100) * audioRef.current.duration;
    audioRef.current.currentTime = newTime;
  }

  // Handle Progress Change
  const handleProgressChange = (e) => {
    const newProgress = e.target.value;
    setProgress(newProgress);
    setProgressTime(newProgress);
  };

  // Handle Progress Start and End
  const handleProgressStart = () => {
    setIsSeeking(true);
    setWasPlayingBeforeSeek(isPlaying);
    setIsPlaying(false);
  };

  const handleProgressEnd = () => {
    setIsSeeking(false);
    if (wasPlayingBeforeSeek) {
      setIsPlaying(true);
    }
  };

  return (
    <div className="player">
      <img src={song.cover} alt="Song Cover" className="player-song-cover" />
      <h2>{song.title}</h2>
      <h3>{song.artist}</h3>

      {/* Audio; https://www.w3schools.com/html/html5_audio.asp */}
      <audio
        ref={audioRef}
        src={song.src}
        onTimeUpdate={updateProgress}
        onEnded={handleAudioEnd}
      />

      <div className="controls">
        <button
          onClick={togglePlayPause}
          style={{
            backgroundColor: isPlaying ? "red" : "green",
            color: "white",
          }}
        >
          {isPlaying ? "PAUSE" : "PLAY"}
        </button>
        <button onClick={onNext}>NEXT</button>
      </div>

      {/* HTML input type range; https://www.w3schools.com/tags/att_input_type_range.asp */}
      {/* Progress Bar */}
      <div className="progress-bar">
        <input
          type="range"
          min="0"
          max="100"
          step="0.01"
          value={progress}
          onChange={handleProgressChange}
          onMouseDown={handleProgressStart}
          onMouseUp={handleProgressEnd}
          onTouchStart={handleProgressStart}
          onTouchEnd={handleProgressEnd}
        />
      </div>

      {/* Voulme Bar */}
      <div className="volume-control">
        <label>Volume: </label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={changeVolume}
        />
      </div>
    </div>
  );
}

export default Player;
