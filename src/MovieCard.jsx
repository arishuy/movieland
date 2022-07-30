import React from "react";

export default function MovieCard({movie}) {
    return (
            <div className="movie">
              <div>
                  <p>{movie.Year}</p>
              </div>
              <div>
                  <img src={movie.Poster !== 'N/A' ? movie.Poster: "http://www.viaplay.no/no/teknikk/bilder/no-image-found.jpg"} alt={movie.Title} />
              </div>
              <div className="movie-bottom">
                  <span>{movie.Type}</span>
                  <h3>{movie.Title}</h3>
                  </div>
            </div>
      );
}