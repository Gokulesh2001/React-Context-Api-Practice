import React, { useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";


const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext);
  movies.map(movie => (
   console.log(movie)
  ));
  return (
    <div>
      {movies.map(movie => (
        <div>
        <Movie name={movie.name} price={movie.price} key={movie.id}/>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
