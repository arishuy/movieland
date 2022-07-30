import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard.jsx";
// import Headers from "./Headers";
// import MainContainer from "./MainContainer";

// 270acbba
const API_URL = "https://www.omdbapi.com/?apikey=270acbba";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const searchMovie = async (title) => {
    const reponse = await fetch(`${API_URL}&s=${title}`);
    const data = await reponse.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovie("avengers");
  }, []);
  return (
    <div className="App">
      <h1>MOVIES LAND</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Search for a movie"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img src={SearchIcon} alt="search" onClick={() => searchMovie(search)} />
      </div>
      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            // console.log(movie)
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}
