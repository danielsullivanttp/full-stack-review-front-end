import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  // initialize movies state as empty array
  const [playlists, setPlaylists] = useState([]);
  // initialize loading state as true
  const [loading, setLoading] = useState(true);

  // useEffect takes a callback function and a dependencies array:
  useEffect(() => {
    // fetch returns a Promise, so we need to await it.
    // But the useEffect's callback can't be async (can't return a Promise)
    // so we define an async getData() inside and call it after.
    async function getData() {
      try {
        // assign a variable to the response to the fetch request
        const response = await fetch("http://localhost:3000/api/playlists/");

        // fetch will set `ok` key if request succeeds
        if (!response.ok) {
          // handle no response
          throw new Error(`Response status: ${response.status}`);
        }
        // convert response to json and assign to variable
        const result = await response.json();
        // update playlists state
        setPlaylists(result);
      } catch (error) {
        // handle error
        console.log(error.message);
      } finally {
        // finally runs once try block finishes
        // set loading to false since data has loaded
        setLoading(false);
      }
    }
    // call getData function since we defined it separately
    getData();
  }, []); // dependencies array
  // useEffect will re-run whenever the values of any variables in this array change
  // since we're fetching data, we don't care about other variables here

  // if loading is true, render "Loading" message
  if (loading) return <div>Loading...</div>;

  // when loading is false, we render our data
  return (
    <div>
      {playlists.map((playlist) => {
        const count = playlist.Songs.length;
        return (
          <div key={playlist.id} className="grid">
            <Link to={`/playlists/${playlist.id}`}>
              <p>{playlist.name}</p>
              <p>Songs: {playlist.Songs?.length ?? 0}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
