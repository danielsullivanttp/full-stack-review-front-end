import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function PlaylistDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [playlist, setPlaylist] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";


  useEffect(() => {

    async function loadPlaylist() {
      try {
        const res = await fetch(`${API_URL}api/playlists/${id}`);

        // returns 404 for invalid playlist IDs
        if (!res.ok) {
          setError("Playlist not found");
          setLoading(false);
          return;
        }

        const data = await res.json();

        // sometimes returns an error object even when res.ok is true
        if (data.status_code === 34) {
          setError("Playlist not found");
          setLoading(false);
          return;
        }

        setPlaylist(data);
        setLoading(false);
      } catch (err) {
        setError("Playlist not found");
        setLoading(false);
      }
    }

    loadPlaylist();
  }, [id]);

  if (loading) {
    return <p style={{ padding: 16 }}>Loading...</p>;
  }

  // ⭐ Back button included on NOT FOUND page
  if (error) {
    return (
      <div style={{ padding: 16 }}>
        <button onClick={() => navigate("/")}>Back</button>
        <h2>{error}</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: 16 }}>
      <button onClick={() => navigate("/")}>Back</button>

      <h1>{playlist.name}</h1>
      <ul>
        {(playlist.Songs || []).map((song) => (
          <li key={song.id}>{song.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PlaylistDetail;