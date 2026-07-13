import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <section id="center">
        <div className="hero">
          <h1>🟢 Playlist</h1>
        </div>
        <div>
          <h2>Your Playlists</h2>
          <button>New Playlist</button>
        </div>
        <Home />
      </section>
    </>
  );
}

export default App;
