import "./App.css";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import PlaylistDetail from "./pages/PlaylistDetails";

function App() {
  const [playlist, setPlaylist] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [songs, setSongs] = useState([]);

  const myKeyDS = import.meta.env.VITE_TMDB_KEY;

  useEffect(() => {
    const myKeyDS = import.meta.env.VITE_TMDB_KEY;

    async function loadPLaylist(){
    e.preventDefault();
    const res = await fetch(myKeyDS,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ title, description }),
      },
    );
    const newPlaylist = await res.json();
    setPlaylist([...playlist, newPlaylist]);
    setTitle("");
    setdescription("");
  }})
  
  return (
    <>
      <section id="center">
        <div className="hero">
          <h1>🟢 Playlist</h1>
        </div>
        <div>
          <h2>Your Playlists</h2>
         
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/playlists/:id" element={<PlaylistDetail />} />
        </Routes>
      </section>
    </>
  );
}

export default App;
