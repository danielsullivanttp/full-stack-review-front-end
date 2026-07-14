import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import PlaylistDetail from "./pages/PlaylistDetails";

function App() {
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
