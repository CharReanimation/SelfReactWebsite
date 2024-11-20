import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import PlayerPage from "./components/PlayerPage";
import Home from "./components/Home";
import About from "./components/About";
import MusicUploader from "./components/MusicUploader"; 

// CSS
import "./App.css";

function App() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const [songs] = useState([
    {
      title: "The Ultimatum",
      artist: "CharreA",
      src: "/music_data/song/CharreA - The Ultimatum.mp3",
      cover: "/music_data/img/TheUltimatum.png",
      youtube: "https://www.youtube.com/watch?v=wdY_T1FTZpw",
    },
    {
      title: "Reanimated Will",
      artist: "CharreA",
      src: "/music_data/song/CharreA - Reanimated Will.mp3",
      cover: "/music_data/img/ReanimatedWill.png",
      youtube: "https://www.youtube.com/watch?v=3oLwR8XK8HE",
    },
    {
      title: "Gleam Chaos",
      artist: "CharreA",
      src: "/music_data/song/CharreA - Gleam Chaos.mp3",
      cover: "/music_data/img/GleamChaos.png",
      youtube: "https://www.youtube.com/watch?v=11sMga-WiqY",
    },
    {
      title: "Gleam Maniac",
      artist: "CharreA",
      src: "/music_data/song/CharreA - Gleam Maniac.mp3",
      cover: "/music_data/img/GleamManiac.png",
      youtube: "https://www.youtube.com/watch?v=_EUqw5n76z4",
    },
  ]);

  const handlePlaySong = (index) => {
    setCurrentSongIndex(index);
  };

  return (
    <Router>
      <div className="App">
        <NavBar /> {/* NavBar */}
        <Routes>
          <Route
            path="/"
            element={
              <Home
                songs={songs}
                onPlaySong={handlePlaySong}
              />
            }
          />

          <Route path="/about" element={<About />} />

          <Route path="/player/:index" element={<PlayerPage songs={songs} />} />

          <Route path="/upload" element={<MusicUploader />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
